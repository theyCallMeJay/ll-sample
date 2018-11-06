import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { LlHttpService } from 'src/app/shared/service/ll-http.service';
import { User } from '../../../shared/model/ll-user.model';
import { Router } from '@angular/router';
import { LlGlobalStoreService } from 'src/app/shared/service/ll-global-store.service';
import { llEmailValidator } from '../../../shared/validator/ll-email-validator';


@Component({
  selector: 'app-ll-login',
  templateUrl: './ll-login.component.html',
  styleUrls: ['./ll-login.component.scss']
})
export class LlLoginComponent implements OnInit {

  public loginForm: FormGroup;
  private userArray: User[];
  loggedInUser: User;
  public emailErrorMessage: string;


  constructor(
    private llHttpService: LlHttpService,
    private llGlobalService: LlGlobalStoreService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.llHttpService.getRequest('https://jsonplaceholder.typicode.com/users').subscribe((result: User[]) => {
      this.userArray = result;
      this.loginForm.controls['email'].setValidators([llEmailValidator(this.userArray)]);
    });
  }

  public getErrorMessage() {
     const emailCtrl =  this.loginForm.controls['email'] as FormControl;
     /* return emailCtrl.hasError('required') ? 'You must enter a value' :
      emailCtrl.hasError('invalid') ? 'Not a valid email' :
        ''; */
      if (emailCtrl.hasError('required')) {
        return 'You must enter an email';
      }

      if (emailCtrl.hasError('invalid')) {
        return 'Not a valid email';
      }

      if (emailCtrl.hasError('nonexist')) {
        return 'Email does not exist';
      }
  }

  onSubmit() {


    if (this.loginForm.valid) {
      const email = this.loginForm.controls['email'].value;

      const loggedInUser = this.userArray.find((ele) => {
        return ele.email === email;
      });
      if (loggedInUser) {
        this.llGlobalService.setUser(loggedInUser);
        this.llGlobalService.setUserId(loggedInUser.id);
        this.llGlobalService.setIsLoggedIn(true);
        this.router.navigate(['profile']);
      }
    }
  }
}
