import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    messages = []
    users = []

    constructor ( private http: Http) {}

    getMessages() {
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            this.messages = res.json();
            console.log(res);
        });
    }

    getUsers() {
        this.http.get('http://localhost:3000/users').subscribe(res => {
            this.users = res.json();
            console.log(res);
        });
    }

    getProfile(id) {
        return this.http.get('http://localhost:3000/profile/' + id)
    }
}
