import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.Url+'/api/auth/signin'; // Update with your API URL
  private RegUrl = environment.Url+'/api/auth/register'; // Replace with your actual API URL


  constructor(private http: HttpClient) {}

  login(loginData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);
  }}
