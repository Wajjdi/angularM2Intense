// login.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { User } from '../assignments/user.model';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  submitted = false;
  loading = false;
  error = '';
  users: User[] = [];
  mail = "";
  motDePasse = "";




  constructor(private authService: AuthService,private userService: UserService,private router:Router,) {}





  ngOnInit(): void {
    console.log("appelé à l'initialisation du composant");
    //this.assignmentsService.peuplerBD();
    this.userService.getUsers()
      .subscribe(user => {
        this.users = user
        console.log(this.users);
        //// rooter assignement
      });
     
  }


  onSubmit() {
    this.submitted = true;

    this.loading = true;
    for (let index = 0; index < this.users.length; index++) {
        
        if((this.motDePasse == this.users[index].motDePasse)&&(this.mail == this.users[index].mail)){
            console.log(true);
            this.router.navigate(["/home"]);

        }
        else{
            console.log(false);
            
        }
    }





   /* this.authService.logIn(this.f.email.value, this.f.password.value)
      .subscribe(
        (data) => {

        },
        (error) => {
          this.error = error;
          this.loading = false;
        },
      );
  }
  */
} }
