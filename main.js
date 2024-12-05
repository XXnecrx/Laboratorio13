// function sumar(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       return a + b;
//     } else {
//       return 'Error: Ambos argumentos deben ser números';
//     }
//   }
// function restar(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       return a - b;
//     } else {
//       return 'Error: Ambos argumentos deben ser números';
//     }
//   }
// function multiplicar(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       return a * b;
//     } else {
//       return 'Error: Ambos argumentos deben ser números';
//     }
//   }
// function dividir(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       if (b === 0) {
//         return 'Error: No se puede dividir entre cero';
//       } else {
//         return a / b;
//       }
//     } else {
//       return 'Error: Ambos argumentos deben ser números';
//     }
//   }
// let a = parseInt(prompt("Ingresa el primer número"));
// let b = parseInt(prompt("Ingresa el segundo número"));
// console.log(("El Resultado de la suma es: "),sumar(a, b));            
// console.log(("El Resultado de la resta es: "),restar(a, b));       
// console.log(("El Resultado de la multiplicacion es: "),multiplicar(a, b));  
// console.log(("El Resultado de la division es: "),dividir(a, b));      

function sumar(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return 'Error: Ambos argumentos deben ser números';
    }
  }
  
  function restar(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else {
      return 'Error: Ambos argumentos deben ser números';
    }
  }
  
  function multiplicar(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a * b;
    } else {
      return 'Error: Ambos argumentos deben ser números';
    }
  }
  
  function dividir(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      if (b === 0) {
        return 'Error: No se puede dividir entre cero';
      } else {
        return a / b;
      }
    } else {
      return 'Error: Ambos argumentos deben ser números';
    }
  }
  
  let continuar = true;
  
  while (continuar) {
    // Solicitar los números
    let a = parseInt(prompt("Ingresa el primer número"));
    let b = parseInt(prompt("Ingresa el segundo número"));
  
    // Mostrar los resultados de las operaciones
    console.log("El Resultado de la suma es: ", sumar(a, b));
    console.log("El Resultado de la resta es: ", restar(a, b));
    console.log("El Resultado de la multiplicación es: ", multiplicar(a, b));
    console.log("El Resultado de la división es: ", dividir(a, b));
  
    // Preguntar si el usuario quiere continuar o salir
    let opcion = prompt("Presiona 1 para continuar o 2 para salir");
  
    if (opcion === "1") {
      // Continuar con la calculadora
      continuar = true;
    } else if (opcion === "2") {
      // Salir de la calculadora
      continuar = false;
    } else {
      // Opción inválida, mostrar mensaje y volver a pedir la opción
      console.log("Dato no existente. Por favor, presiona 1 para continuar o 2 para salir.");
      continuar = true;
    }
  }