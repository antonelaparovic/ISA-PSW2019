import {User} from '../models/user'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class UserService{
    users: Array<User>;

    constructor(){
        this.users=new Array<User>(); 
    }

    public addUser(u: User){
        this.users.push(u);
    }

    public getUser(email:string){
        if(this.users.length===0){
            return;
        }
        for(const u of this.users){
            if(u.email===email){
                return u;
            }
        }
    }
}