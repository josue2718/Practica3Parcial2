function invertirArreglo(arreglo) {
    return arreglo.reverse();
}

function esNumeroPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

function factorial(numero) {
    if (numero < 0) return -1; // El factorial de un número negativo no está definido
    if (numero === 0) return 1;
    return numero * factorial(numero - 1);
}

function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    let cuenta = 0;
    for (let char of cadena) {
        if (vocales.includes(char)) {
            cuenta++;
        }
    }
    return cuenta;
}

function sumarNumeros(arreglo) {
    return arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
}

function encontrarMaximo(arreglo) {
    return Math.max(...arreglo);
}

function mostrarInversionArreglo() {
    const input = document.getElementById('invertirArregloInput').value;
    try {
        const arreglo = JSON.parse(input);
        const resultado = invertirArreglo(arreglo);
        document.getElementById('invertirArregloOutput').innerText = JSON.stringify(resultado);
    } catch (e) {
        alert('Por favor, ingrese un arreglo válido.');
    }
}

function mostrarNumeroPrimo() {
    const input = document.getElementById('numeroPrimoInput').value;
    const numero = parseInt(input);
    const resultado = esNumeroPrimo(numero);
    document.getElementById('numeroPrimoOutput').innerText = resultado ? 'Es primo' : 'No es primo';
}

function mostrarEliminarDuplicados() {
    const input = document.getElementById('eliminarDuplicadosInput').value;
    try {
        const arreglo = JSON.parse(input);
        const resultado = eliminarDuplicados(arreglo);
        document.getElementById('eliminarDuplicadosOutput').innerText = JSON.stringify(resultado);
    } catch (e) {
        alert('Por favor, ingrese un arreglo válido.');
    }
}

function mostrarFactorial() {
    const input = document.getElementById('factorialInput').value;
    const numero = parseInt(input);
    const resultado = factorial(numero);
    document.getElementById('factorialOutput').innerText = resultado >= 0 ? resultado : 'Número inválido';
}

function mostrarContarVocales() {
    const input = document.getElementById('contarVocalesInput').value;
    const resultado = contarVocales(input);
    document.getElementById('contarVocalesOutput').innerText = resultado;
}

function mostrarSumarNumeros() {
    const input = document.getElementById('sumarNumerosInput').value;
    try {
        const arreglo = JSON.parse(input);
        const resultado = sumarNumeros(arreglo);
        document.getElementById('sumarNumerosOutput').innerText = resultado;
    } catch (e) {
        alert('Por favor, ingrese un arreglo válido.');
    }
}

function mostrarEncontrarMaximo() {
    const input = document.getElementById('encontrarMaximoInput').value;
    try {
        const arreglo = JSON.parse(input);
        const resultado = encontrarMaximo(arreglo);
        document.getElementById('encontrarMaximoOutput').innerText = resultado;
    } catch (e) {
        alert('Por favor, ingrese un arreglo válido.');
    }
}
          
  let arreglo = [];

  function agregarNumero() {
      const numeroInput = document.getElementById('numeroInput');
      const numero = parseInt(numeroInput.value);
  
      if (!isNaN(numero)) {
          arreglo.push(numero);
          numeroInput.value = ''; // Limpia el campo de entrada
      } else {
          alert('Por favor, ingrese un número válido.');
      }
  }
  
  function guardarArregloEnInput() {
      const arregloComoTexto = JSON.stringify(arreglo);
      const input = document.getElementById('arregloInput');
      input.value = arregloComoTexto;
  }
  
  // Ejemplo de uso inicial:
  // guardarArregloEnInput(); // No es necesario llamar esto aquí, se llamará cuando el usuario haga clic en el botón
  
