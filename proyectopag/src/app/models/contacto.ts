export class Contacto {
  _id?: string;
  correo: string;
  nombre: string;
  cedula: string;
  genero: string;
  contrasena: string;
  acepta_terminos: boolean;

  constructor(correo:string, nombre:string, cedula:string, genero:string, contrasena:string, acepta_terminos:boolean) {
    this.correo= correo;
    this.nombre=nombre;
    this.cedula=cedula;
    this.genero=genero;
    this.contrasena=contrasena;
    this.acepta_terminos=acepta_terminos;


  }

}
