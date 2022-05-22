//condicion ? verdadero : falso
/*
let nombre = document.getElementById("nombre");

let edad = document.getElementById("edad");

const usuario = {
    nombre : nombre,
    edad : edad
};


let entra = ("coca")
let noEntra = ("pepsi")





    let permiso = (usuario.edad >= 17 ? entra : noEntra);
    console.log(permiso);
let btn = document.getElementById("myBtn");
btn.addEventListener("click", permiso);






if (permiso == entra){
    Swal.fire({
        icon: 'Has ingresado',
        title: 'Correcto',
        text: "Disfruta " + nombre,
        footer: '<a href="">Aceptar</a>'
    })
}else if(permiso == noEntra){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "No puedes ingresar debido a tu edad " + nombre,
        footer: '<a href="">Aceptar?</a>'
    })
}




switch (ingresar){
    case entra:
            Swal.fire({
                icon: 'Has ingresado',
                title: 'Correcto',
                text: "Disfruta " + nombre,
                footer: '<a href="">Aceptar</a>'
            })
             
        break;
    case noEntra:
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "No puedes ingresar debido a tu edad " + nombre,
                    footer: '<a href="">Aceptar?</a>'
                })

    break;
};




const usuario = {
    nombre : "maxi",
    edad : 18
}

const permiso = usuario.edad >= 17 ? true : false

console.log(permiso);

let btn = document.getElementById("myBtn");
btn.addEventListener("click",   ingreso);



function ingreso(){
    if (permiso === true){
    alert ("true ")
    }
    else if (permiso === false){
        alert("false")
    }

}    
*/


function usuarios(){
    const usuario = {
        nombre : nombre,
        edad : edad
    };
    
    
    
    
    
  


}
let permiso = (usuario.edad >= 17 ? 1 : 2);
console.log(permiso);
let btn = document.getElementById("myBtn");
btn.addEventListener("click", ingresaron);






function ingresaron() {

switch (ingresar){
    case 1:
            Swal.fire({
                icon: 'Has ingresado',
                title: 'Correcto',
                text: "Disfruta " + nombre,
                footer: '<a href="">Aceptar</a>',
                
            })
    break;
             
        break;
    case 2:
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "No puedes ingresar debido a tu edad " + nombre,
                    footer: '<a href="">Aceptar?</a>'
                })

    break;
};
}