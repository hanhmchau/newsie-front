import { Injectable } from '@angular/core';
import Todo from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import consts from '../consts';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userUrl =  `${consts.API}/user`;  // URL to web api
    constructor(private http: HttpClient) {
    }
}
