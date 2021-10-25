function add(valor1 = 2, valor2 = 4)
{
    return valor1+valor2;
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



function multiply(number1 = 4,number2 = 6)
{
    let resultado = 0;
    for(counter = 1; counter <= number2; counter++) 
    { 
        resultado = add(resultado, number1);   
    }
    return resultado;       
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');






function power(x = 2,n = 8)
{
    let resultado = 1;
    for(counter2 = 1; counter2 <= n; counter2 ++)
    {
        resultado = multiply(resultado,x);
    }
    return resultado;
}
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');





function factorial(numeral = 5)
{
    let resultado = 1;
    for(counter3 = 1; counter3 <= numeral; counter3 ++)
    {
        resultado = multiply(resultado,counter3)
    }
  return resultado  
}
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');





function fibonacci(n = 8)
{
    let array = [];
    let result= 0;
    for(counter = 0;counter <= n; counter ++)
    {
        result = array.indexOf[counter] + (array.indexOf[counter-1]-1);
        array.push(result)     
    }
    return array.indexOf(n)
}
 console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
