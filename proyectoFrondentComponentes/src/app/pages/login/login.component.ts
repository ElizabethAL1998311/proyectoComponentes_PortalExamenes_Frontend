import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username": '',
    "password": '',
  }

  constructor(private snack: MatSnackBar, private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000
      });
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRole() == 'ADMI'){
            //dashboard admin
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
           
          }
          else if(this.loginService.getUserRole() == 'Normal'){
            //user dashboard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']);

          }
          else{
            this.loginService.logout();
          }
          this.loginService.loginStatusSubjec.next(true);
        })
      },(error) => {
        console.log(error);
        this.snack.open('Detalles inválidos , vuelva a intentar !!','Aceptar',{
          duration:3000
        })
      }
    )
  }
}