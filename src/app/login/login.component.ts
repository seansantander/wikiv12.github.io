import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(public userService: UsersService, public router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe((data) => {
      this.userService.setToken(data.token);
      console.log(data);
      //this.router.navigateByUrl("/");
      //this.router.navigate(['/home']).then(()=> window.location.reload()); 
      this.router.navigate(['/home']); 
    });

  }
}