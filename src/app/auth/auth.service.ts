import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { User } from "../models/User";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private token: string | null = "";
    private tokenTimer: any;
    private isAuthenticated = false; 
    private authStatusListener = new Subject<boolean>();

    constructor(public http: HttpClient, private router: Router) {}

    getToken() {
        return this.token;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getAuthStatus() {
        return this.isAuthenticated;
    }

    createUser(user: User) {
        this.http.post<User>("http://localhost:4000/api/users/signup", user).subscribe(res => {
            console.log(res);
            this.router.navigate(['/']);
        });
    }
    loginUser(data: {email: string, password: string}) {
        this.http.post<{token: string, expiresIn: number, userId: string}>("http://localhost:4000/api/users/login", data).subscribe(res => {
            this.token = res.token;
            console.log(this.token);
            if(this.token) {
                const expiresInDuration = res.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.authStatusListener.next(true);
                this.isAuthenticated = true;
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                this.saveAuthData(this.token, expirationDate);
                this.router.navigate(['/']);
            }
        });
    }
    autoAuthUser() {
        const authInformation: any = this.getAuthData();
        if(!authInformation) return;
        const now = new Date();
        const expiresIn: any = authInformation?.expirationDate.getTime() - now.getTime();
        if(expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    logoutUser() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearInterval(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }
    private saveAuthData(token: string, expirationDate: Date) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
    }
    private clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }
    private getAuthData() {
        const token  = localStorage.getItem("token");
        const expirationDate  = localStorage.getItem("expiration");
        if(!token || !expirationDate) {
            return;
        }
        return {
            token: token, expirationDate: new Date(expirationDate)
        }
    }
    private setAuthTimer(duration: number) {
        console.log("Setting Timer" + duration);
        
        this.tokenTimer = setTimeout(() => {
            this.logoutUser();
        }, duration * 1000);
    }
}