'use strict';

let producto=[];

class Catalogo{
    constructor(codigo, descripcion, precio, imagen){
        this.codigo=codigo;
        this.nombre=descripcion;
        this.precio=precio;
        this.imagen=imagen;
    }
}

//funcion para validar los campos
function validateFields(){
    if (document.getElementById('codigo').value==""){
        alert('Ingrese el Codigo');
        return false;
    }
    if (document.getElementById('descripcion').value==""){
        alert('Ingrese el nombre');
        return false;
    }
    if (document.getElementById('precio').value==""){
        alert('Ingrese el precio del producto');
        return false;
    }
   /* if (document.getElementById('imagen').value==""){
        alert('Ingrese una imagen');
        return false;
    }*/
    return true;
}

function addRecord(){
    let codigo=document.getElementById('codigo').value;
    let descripcion=document.getElementById('descripcion').value;
    let precio=document.getElementById('precio').value;
   // let imagen=document.getElementById('imagen').value;

    producto.push(new Catalogo(codigo, descripcion, precio));
}

function showData(){

    let rows="";

    for(let Pedido=0; Pedido<producto.length; Pedido++){

        rows += '<tr>'
        rows += '<tr>'+ producto[Pedido].codigo +'</td>';
        rows += '<tr>'+ producto[Pedido].descripcion +'</td>';
        rows += '<tr>'+ producto[Pedido].precio +'</td>';
       // rows += '<tr>'+producto[Pedido].imagen +'</td>';
        rows += '</td>';
        
    }
    document.getElementById('listado').innerHTML=rows;
}

function addData(){
    
    if(validateFields()==false){
        return;
    }
    alert ("Bien");


    addRecord();
    showData();

}

function imagenes(){

}