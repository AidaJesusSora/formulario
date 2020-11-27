import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  usuario: FormGroup;
  submitted = false;

  ngOnInit(): void {

    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });

  }

  get f() {

    return this.usuario.controls;

  }

  EnviarDatos() {

    this.submitted = true;
    if (this.usuario.invalid) {

      return;

    }

    Swal.fire(
      'Enhorabuena',
      'Has hecho click!',
      'success'
    )
  }

}
