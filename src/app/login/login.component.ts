import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  today = Date.now();

  heroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  get username() { return this.heroForm.get('username'); }
  get password() { return this.heroForm.get('password'); }


  loading = false;

  private _errorMessage: string = '';
  private _submitted: boolean = false;

  ngOnInit() {
  }
  logData: Array<any>;
  errorMessage: String;
  public onSubmit(elementValues: any) {
    this.loginService.loginCheck(elementValues.username,elementValues.password)
      .then((data) => {
        this.logData = data
        console.log(data);

      },
      error => this.errorMessage = <any>error);
    this.loading = false;
    this._submitted = true;
    if (elementValues.username == 'admin@cloud.com') {
      if (elementValues.password == 'Password1!') {
        this.router.navigate(['/admin/dashboard']);
      }
      else {
        this._errorMessage = 'Incorrect Username Or Password.';
        this.loading = true;
        this._submitted = false;
      }
    } else if (elementValues.username == 'manager@cloud.com') {
      if (elementValues.password == 'Password1!') {
        this.router.navigate(['/manager/dashboard']);
      }
      else {
        this._errorMessage = 'Incorrect Username Or Password.';
        this.loading = true;
        this._submitted = false;
      }
    }
    else {
      this._errorMessage = 'Incorrect Username Or Password.';
      this.loading = true;
      this._submitted = false;
    }
  }

}
