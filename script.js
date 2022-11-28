// console.log('hello, world');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const presult =document.querySelector('#result');
function btnOnClick(){
    const sumainput = input1.value + input2.value;
    presult.innerText = "Resultado: " + sumainput;
}


// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// })
// h1.innerHTML= 'patito <br> feo' //nos permite modificar el html que tengamos dentro de la variable, de igual fomra nos permite escribir html dentro del mismo.

// h1.innerText='patito <br>feo' //nos permite solo poner texto, lo traduce solo a texto
// //h1.getAttribute = (); //nos permite leer atributos 
// h1.setAttribute('class', 'rojo'); //nos permite reescribir nuestro atributo de nuestro elemento en nuestro html
// h1.classList.add('rojo') //para agregar nuevas clases a nuestro elemento 
// h1.classList.remove('verde') //nos sirve para eliminar una clase
// document.createElement(); //nos sirve para crear un elemento de html desde javascript
// `const img = document.createElement('img');
// img.setAttribute('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.radionica.rocks%2Fseries%2Fanimes-siglo-xxi-radionica&psig=AOvVaw2WM6WyhOe5XWUDrkplIGfF&ust=1668359321400000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDS5_eQqfsCFQAAAAAdAAAAABAE');
// console.log(img);

// pid.append(img);`