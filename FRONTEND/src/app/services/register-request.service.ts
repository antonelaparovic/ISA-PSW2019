import {environment} from './../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegisterRequest } from '../models/registerRequest';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';

export class RegisterRequestService{
    url=environment.baseUrl+environment.clinicalCentreAdmin;
    registerRequests: BehaviorSubject<RegisterRequest[]>=new BehaviorSubject<RegisterRequest[]>([]);


    constructor(
        private httpClient: HttpClient,
        private router: Router
    ){}

    public getRegisterRequest(): Observable<RegisterRequest[]> {
        this.httpClient.get(this.url + '/all-requests-to-register').subscribe(
          (data: RegisterRequest[]) => {
            this.registerRequests.next(data);
          },
          (error: HttpErrorResponse) => {
    
          });
    
        return this.registerRequests.asObservable();
    }

    public reject(id:number,reason:string){
        return this.httpClient.put(this.url+'reject-request-to-register/'+id,reason);
    }

    public approve(registerRequest: RegisterRequest){
        return this.httpClient.put(this.url+'/approve-request-to-register/'+registerRequest.id,registerRequest);
    }
}

