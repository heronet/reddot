import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { User } from "./models/User";

const BASE_URL = environment.apiUrl;

@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private http: HttpClient) {

    }
    getUser(id: any) {
        return this.http.get<{data: any}>(`${BASE_URL}users/${id}`);
    }
    updateUser(id: any, data: User) {
        return this.http.put<{data: any}>(`${BASE_URL}users/${id}`, data);
    }
}