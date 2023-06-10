
import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public userService: UsersService) { }

  mimg!: boolean;
  noc!: boolean;
  desarrollo!: boolean;
  directorio!: boolean;

  ngOnInit() {
    this.getUserLogged();
    var toggler = document.querySelectorAll(".contenedor");
    console.log(toggler);
    Array.from(toggler).forEach(item => {
      item.addEventListener("click", () => {
        item.parentElement?.querySelector(".interior")?.classList.toggle("active");
        item.classList.toggle("contenedor-down");
      });
    });

    this.mimg = true;
    this.directorio = true;
    this.noc = true;
    this.desarrollo = true;

  }
  getUserLogged() {
    this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }

  cargarHtml(DocHtml: string) {
    const compoEl = document.querySelector(".comp");
    console.log(compoEl?.nodeName);
    return fetch('assets/archivos/' + DocHtml)
      .then(response => response.text())
      .then(html => {
        compoEl!.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });

  }



}