import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';  //se importa el sweetalert2

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaUsuarios: Contacto []=[];

  constructor( private _registroService: RegistroService) { }

  ngOnInit(): void {
      this.obtenerContactos();
  }

  obtenerContactos() {
    this._registroService.getContactos().subscribe(data =>{
      console.log(data);
      this.listaUsuarios= data;
    }, error => {
      console.log(error);
    });

  }

  eliminarContacto(id:any){     //se deberia usar string, pero se pone any para empezar mas facil
    Swal.fire({
      title: 'desea eliminar contacto=',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this._registroService.deleteContacto(id).subscribe(data =>{
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.obtenerContactos();
        }, error => {
          console.log(error)
      })


      }
    })


  }




}
