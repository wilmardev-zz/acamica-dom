// Get Elements By Tag Name
const elementsByTagName = document.getElementsByTagName('p');
console.warn('Element By Tag Name ======> Retorna un array con los elementos (HTMLCollection)');
console.log(elementsByTagName);

// Get Elements By ID
const elementsById = document.getElementById('p1');
console.warn('Element by Id ======> (Retorna explícitamente el nodo)');
console.log(elementsById);

// Get Elements By Class
const elementsByClassRed = document.getElementsByClassName('red');
const elementsByClassBlue = document.getElementsByClassName('blue');
console.warn('Element by class name ======> (Retorna un array con los elementos los nodos)');
console.log(elementsByClassRed);
console.log(elementsByClassBlue);

// Get Elements By Query Selector
const elementsByQuerySelector = document.querySelector('.red');
console.warn('Element by query selector ======> (Retorna el primer elemento con el criterio dado)');
console.log(elementsByQuerySelector);

// Get Elements By Query Selector All
const elementsByQuerySelectorAll = document.querySelectorAll('.blue');
console.warn('Element by query selector all ======> (Retorna un array con todos los elementos que cumplan con el criterio)');
console.log(elementsByQuerySelectorAll);

// Manipular los elementos
// elementsById.className = elementsById.className + " background-yellow"  --->  MALA PRÁCTICA!
// elementsById.classList.add('background-yellow')  --->  BUENA PRÁCTICA
// elementsById.innerHTML = "NUEVO VALOR"
// elementsById.remove();