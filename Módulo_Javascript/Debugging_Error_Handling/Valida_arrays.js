function validaArray(arr, numero) {
  try {
    if (!arr && !numero) 
      throw new ReferenceError("Envie os parâmetros");
    
    if (typeof arr !== 'object') 
      throw new TypeError("Array precisa ser do tipo object");

    if (typeof numero !== 'number') 
      throw new TypeError("Numero precisa ser do tipo number");
    
    if (arr.length !== numero) throw new RangeError("O tamanho é inválido");

    return arr;

  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um referenceError");
      console.log(e.message);

    } else if (e instanceof TypeError) {
      console.log("Este erro é um typeErrror");
      console.log(e.message);

    } else if (e instanceof RangeError) {
      console.log("Este erro é um rangeError");
      console.log(e.message);

    } else {
      console.log("Ocorreu um tipo não esperado:" + e);
    }
  }
}


console.log(validaArray([1], 1));