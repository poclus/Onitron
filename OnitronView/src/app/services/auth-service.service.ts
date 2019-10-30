import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 user : User;
 tuser : User;
  ps;

 pk  ;
  isAuth =false ;
  constructor(private router : Router,private http: HttpClient) {


    this.user = new User();
    this.tuser = new User();
   }

   
 

  //noeuf d'ajout d'une entite
  signup (usera: User): Observable<User> {
    const Url : string = 'http://localhost:8080/api/user';  // URL to web api 
    
     
  console.log(usera);

      return this.http.post<User>(Url, usera, this.httpOptions).pipe(
        tap((reponse:any) =>console.log('save succes')),
        catchError(this.handleError<User>('addUser'))
      );
    
    



  }

  getUserByMail(emailik: string): Observable<User> {
    const urli = `http://localhost:8080/api/user/find/${emailik}`;
    console.log("appel du service getone");
    return this.http.get<User>(urli).pipe(
      tap(_ => console.log(`fetched User id=${emailik}`)),
      catchError(this.handleError<User>(`getUserByemail id=${emailik}`))
    );
  }


  login(usera : User){

    console.log("login start");
    console.log(usera.email);
  
    this.getUserByMail(usera.email).subscribe(data =>{
      this.tuser = data ;
      console.log(this.tuser);

      if((this.tuser === null)){
    
        console.log("password ou email incorret");
    
       }else{
       
    this.isAuth = true;
        console.log("login si");
        sessionStorage.setItem("pwd", this.tuser.password);
        sessionStorage.setItem("email", this.tuser.email);
        sessionStorage.setItem("pkh", this.tuser.public_key);
        sessionStorage.setItem("state", 'true');
        sessionStorage.setItem("reload", "1");
        sessionStorage.setItem("lock", "false");
    
    console.log("login succefully");
    this.router.navigate(['/dashboard']);
   
        
       }
    });
  


    

  }
  screen(){
   
    
    if(this.isAuth){

this.router.navigate(['/dashboard']);

    }
  }

  lockscreen(){

//this.isAuth = false;
    sessionStorage.setItem("state", 'false');
    this.router.navigate(['/screen']);

  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
