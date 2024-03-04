
const persona = {
    nombre: 'Emilia',
    edad: 37,
    clave: 'Daenerys'
};

const retornaPersona = ({clave, nombre, edad, rango = 'Reina 7 reinos'}) => {
//a veces tendremos que retornar objetos que tengan objetos dentro  
    return {
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 14.2345,
        lng: -12.3440
    }
  }
}

const {nombreClave, anios, latlng:{lat, lng} } = retornaPersona(persona);
console.log(nombreClave, anios);
//podemos retornar el objeto latlng
/*console.log(latlng);*/
//pero si necesito las constantes específicas
//colocamos dos puntos luego {}
console.log(lat, lng);