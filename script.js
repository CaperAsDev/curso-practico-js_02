console.log(document);

const title = document.querySelector('h1');
const h2 = document.querySelector('h2');
const pClass = document.querySelector('.parrafo');
const pId = document.querySelector('#parrafo');
const p = document.querySelector('p');
const input1 = document.querySelector('#calc1');
const input2 = document.querySelector('#calc2');
const cont = document.querySelector('.test-container');
const btnImg_1 = document.querySelector('#btnImg_1');
const btnImg_2 = document.querySelector('#btnImg_2');

console.log({title, pClass, pId, p});

/* cosas de input 
input.value = 'Hola, perolas'
input.placeholder = "Que se dice mi buen?"
*/

/* cambiar o agregar atributos con js */
title.setAttribute('class', 'titulo-principal');
/* Cambiar agregar o quitar clases*/
title.classList.add('big');
title.classList.remove('titulo-principal');

/* crear elemnetos */

const img_01 = document.createElement('img');
img_01.setAttribute('src', 'https://i.pinimg.com/564x/a4/f4/ea/a4f4eae8a5c697a4aad58d73692e4fe5.jpg');

const img_02 = document.createElement('img');
img_02.setAttribute('src', 'https://i.pinimg.com/564x/49/66/ab/4966ab51fe2b3f4ea65c81bb874ffb93.jpg');

/* Escuchar eventos */
btnImg_1.addEventListener('click', function (){
    cont.append(img_01); });
btnImg_2.addEventListener('click', ()=>{
    pId.replaceWith(img_02);
});

function calcular() {
    const resultado = input1.value +input2.value;
    h2.innerText += ` ${resultado}`;
}
