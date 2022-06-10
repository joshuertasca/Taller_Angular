import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
    listaProductos =  [
        {
            img_url: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
            producto: "Ponque" ,
            descripcion:"Torta con cubierta de chocolate blanco y relleno de fresa" ,
            precio: 140000
        },
        {
            img_url: "https://images.pexels.com/photos/9012594/pexels-photo-9012594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            producto: "Flan de fresa" ,
            descripcion:"500 gramos de flan de fresa cubierta con salsa al gusto" ,
            precio: 30000
        },
        {
            img_url: "https://cdn.shopify.com/s/files/1/2703/9078/products/image.png?v=1645134493" ,
            producto: "Chocoramo" ,
            descripcion:"Ponqué chocorramo de 65 gramo" ,
            precio: 1500
        },
        {
            img_url: "https://www.cocinavital.mx/wp-content/uploads/2019/05/tiramisu-clasico-pasos.jpg" ,
            producto: "Tiramisú de Cafe" ,
            descripcion:"Tiramisú de café 6 porciones, cprepardo con mejor reseta italiana" ,
            precio: 50000
        },
        {
            img_url: "https://okdiario.com/img/2019/12/03/receta-de-leche-asada-en-microondas-1.jpg" ,
            producto: "Leche asada" ,
            descripcion:"Mejor leche asada del pais para 6 personas" ,
            precio: 30000
        },
        {
            img_url: "https://larepublica.pe/resizer/xqL7OaDSFeKLZcTNtFxf26Scx94=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/XJKXX4AWTBDTPG75CUNJW4TU34.png" ,
            producto: "Postre de cuatro leches" ,
            descripcion:"postre para 7 personas" ,
            precio: 60000
        }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
