import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";

type PathMatch = "full" | "prefix" | undefined;
const appRoutes = [
  //{ path: '', component: AppComponent, pathMatch: 'full' as PathMatch},
  { path: '', redirectTo: 'login', pathMatch: 'full' as PathMatch},
  { path: 'login', component: LoginComponent, pathMatch: 'full' as PathMatch},
  { path: 'register', component: RegisterComponent, pathMatch: 'full' as PathMatch},
  { path: 'home', component: HomeComponent, pathMatch: 'full' as PathMatch},
  
  
];
export const routing = RouterModule.forRoot(appRoutes);