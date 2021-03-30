import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreatePostComponent } from './home/create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './layout/body/search-result/search-result.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "create", component: CreatePostComponent, canActivate: [AuthGuard] },
  {path: "edit/:postId", component: CreatePostComponent, canActivate: [AuthGuard] },
  {path: "profile", component: ProfileComponent},
  {path: "search/:name", component: SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
