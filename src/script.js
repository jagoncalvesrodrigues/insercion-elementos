// # Ejercicios

// ## Inserción de elementos en el DOM

// - Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... 
// Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista

// ```html
// <button>Añadir Elementos</button>
// <ul>
//   <li>Item 1</li>
// </ul>
// ```

const button = document.getElementById('button');
const container = document.getElementById('container');
let number = 2;


const createNewElement = ()=>{
    const newLi = document.createElement('li');
    newLi.textContent=`Item ${number++}`;
    container.append(newLi);
}

button.addEventListener('click',createNewElement);



// - Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, 
// en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. 
// Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

// ```html
// <div>
//   <label>1</label>
//   <input type="range" id="range" min="1" max="6" step="1" value="1" />
//   <button>Generar Encabezado</button>
// </div>

const button2 = document.getElementById('button2');
const container2 = document.getElementById('container');
const range = document.getElementById('range');


const createNewElementH = ()=>{
    const newH = document.createElement('h'+range.value);
    newH.textContent=`soy un h${range.value}`;
    container2.append(newH);
}

button2.addEventListener('click',createNewElementH);