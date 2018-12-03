import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {DetailsComponent} from './components/details/details.component';
import {CreatePostComponent} from './components/create-post/create-post.component';
import {ProfileComponent} from './components/profile/profile.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'createPost', component: CreatePostComponent},
  {path: 'profile', component: ProfileComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
