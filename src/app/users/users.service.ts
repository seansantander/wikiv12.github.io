import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UsersService {
    constructor(private http: HttpClient) { }

    login(user: any): Observable<any> {
        return this.http.post("https://reqres.in/api/login", user);
    }

    Dtoken!: String;

    setToken(token: String) {
        //this.cookies.set("token", token);
        this.Dtoken = token;

    }
    getToken() {
        //return this.cookies.get("token");
        return this.Dtoken;
    }
    getUser() {
        return this.http.get("https://reqres.in/api/users/2");
    }
    getUserLogged() {
        const token = this.getToken();
        // Aquí iría el endpoint para devolver el usuario para un token
    }

    

}