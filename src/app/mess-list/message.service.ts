import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Message } from "../models/Message";

const BASE_URL = environment.apiUrl;

@Injectable({
    providedIn: "root"
})
export class MessageService {
    
    constructor(private http: HttpClient) {}

    getInbox() {
        return this.http.get<{name: string, message: Message}>(`${BASE_URL}messages/inbox`)
    }

    getConversation(recipient: string) {
        return this.http.get<Message[]>(`${BASE_URL}messages/${recipient}`);
    }

    sendMessage(dto: {text: string, to: string}) {
        return this.http.post<Message>(`${BASE_URL}messages`, dto);
    }
}