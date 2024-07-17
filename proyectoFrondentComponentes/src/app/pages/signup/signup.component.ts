import  Swal  from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public persona = {
    username : '',
    password : '',
    nombre : '',
    identificacion:'',
    apellido : '',
    correoElectronico : ''
  }

  constructor(private personaService:PersonaService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.persona);
    if(this.persona.username == '' || this.persona.username == null || this.persona.nombre == '' || this.persona.nombre == null || this.persona.apellido == '' || this.persona.apellido == null 
      || this.persona.identificacion == '' || this.persona.identificacion == null || this.persona.correoElectronico == '' || this.persona.correoElectronico == null 
      || this.persona.password == '' || this.persona.password == null
    ){
      this.snack.open('Todos los campos del usuario son requeridos !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.personaService.añadirPersona(this.persona).subscribe(
        (data) => {
        console.log(data);
        Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');
      },(error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
          duration : 3000
        });
      }
    )
  }

}
