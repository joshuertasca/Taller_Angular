import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  //se debe importar para realizar el formulario ractvo
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { RegistroService } from 'src/app/services/registro.service'
import Swal from 'sweetalert2';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    registroForm: FormGroup;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regexNumero = /^[0-9]+$/;
    titulo_formulario = "Registrate con nosotros para obtener grandes beneficios"
    id: string | null;

    constructor(private fb: FormBuilder, private _RegistroService: RegistroService, private router: Router, private idRouter: ActivatedRoute) {
        // el router del constructor es la libreria que nos permite direccionarnos desde el ts
        this.registroForm = this.fb.group({
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            nombre: ['', [Validators.required]],
            cedula: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.regexNumero)]],
            genero: ['', [Validators.required]],
            contrasena: ['', [Validators.required, Validators.minLength(5)]],
            acepta_terminos: ['', [Validators.requiredTrue]]
        })
        this.id = this.idRouter.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        this.rellenarInformacion();
    }

    guardarContacto() {
        //console.log(this.registroForm);

        const registroUsuario: Contacto = {
            correo: this.registroForm.get('correo')?.value,
            nombre: this.registroForm.get('nombre')?.value,
            cedula: this.registroForm.get('cedula')?.value,
            genero: this.registroForm.get('genero')?.value,
            contrasena: this.registroForm.get('contrasena')?.value,
            acepta_terminos: this.registroForm.get('acepta_terminos')?.value
        }

        console.log(registroUsuario);
        if (this.id !== null) {

            this._RegistroService.putContacto(this.id,registroUsuario).subscribe(data=>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'el contacto ha sido actualizado',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.router.navigate(['database'])
            }, error =>{
                console.log(error);
            })

        } else {
            this._RegistroService.postContacto(registroUsuario).subscribe(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'el contacto ha sido registrado',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.router.navigate(['database'])
            }, error => {
                console.log(error);
            })
        }


    }

    rellenarInformacion() {
        if (this.id !== null) {
            this.titulo_formulario = "Editar informacion de registro";
            this._RegistroService.getContacto(this.id).subscribe(data => {
                this.registroForm.setValue({
                    correo: data.correo,
                    nombre: data.nombre,
                    cedula: data.cedula,
                    genero: data.genero,
                    contrasena: data.contrasena,
                    acepta_terminos: data.acepta_terminos
                })
            })

        }
    }

}
