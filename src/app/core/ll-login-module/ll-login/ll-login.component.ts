import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LlHttpService } from 'src/app/shared/service/ll-http.service';
import { User } from '../../../shared/model/ll-user.model';
import { Router } from '@angular/router';
import { LlGlobalStoreService } from 'src/app/shared/service/ll-global-store.service';


@Component({
  selector: 'app-ll-login',
  templateUrl: './ll-login.component.html',
  styleUrls: ['./ll-login.component.scss']
})
export class LlLoginComponent implements OnInit {

  public loginForm: FormGroup;
  private userArray: User[];
  loggedInUser: User;


  constructor(
    private llHttpService: LlHttpService,
    private llGlobalService: LlGlobalStoreService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('')
    });
  }

  ngOnInit() {
    this.llHttpService.getRequest('https://jsonplaceholder.typicode.com/users').subscribe((result: User[]) => {
      this.userArray = result;
    });
  }

  public getErrorMessage() {
     const emailCtrl =  this.loginForm['email'] as FormControl;
     return emailCtrl.hasError('required') ? 'You must enter a value' :
      emailCtrl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    console.log(this.userArray);
    console.log(this.loginForm.controls['email'].value);
    const email = this.loginForm.controls['email'].value;

    const loggedInUser = this.userArray.find((ele) => {
      return ele.email === email;
    });

    console.log(loggedInUser);

    if (loggedInUser) {
      this.llGlobalService.setUser(loggedInUser);
      this.llGlobalService.setUserId(loggedInUser.id);
      this.llGlobalService.setIsLoggedIn(true);
      this.router.navigate(['profile']);
    }
  }
}
