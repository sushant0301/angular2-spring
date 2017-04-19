import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
    getEmail(){
    return this.email;
    }
}

var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    console.log("Removing user from Local Storage....");
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user){
    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['personlist']);
      return true;
    }
    return false;

  }

  checkCredentials(){
    let user = null;
    if(localStorage.getItem("user") != null){
      user =  JSON.parse(localStorage.getItem("user"));
      console.log("User not null....."+user.email+" --- "+user.password);
    }
    if (user == null){
      this._router.navigate(['login']);
    }
  }
}
