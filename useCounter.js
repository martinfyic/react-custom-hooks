import { useState } from 'react';

// export const useCounter = (inicialValue = 10) => {
//     const [counter, setCounter] = useState(inicialValue);

//     const increment = () => {
//         setCounter(counter + 1);
//     };
//     const decrement = () => {
//         //validamos que cuando sea 0 deje de funcionar
//         if (counter === 0) return;
//         setCounter(counter - 1);
//     };
//     const reset = () => {
//         setCounter(inicialValue);
//     };

//     return {
//         counter,
//         increment,
//         decrement,
//         reset,
//     };
// };

//** Podemos utilizar estas funciones a modo de logica, ejemplo, si queremos que nuestras compras sean 2x1, es decir que al comprar se cargue 2, debemos hacer que el contador sume de a dos, para eso debemos mandar por parametro como muestro en el ejemplo abajo */

export const useCounter = (inicialValue = 10) => {
	const [counter, setCounter] = useState(inicialValue);

	const increment = (value = 1) => {
		setCounter(current => current + value);
	};
	const decrement = (value = 1) => {
		//validamos que cuando sea 0 deje de funcionar
		if (counter === 1) return;
		setCounter(current => current - value);
	};
	const reset = () => {
		setCounter(inicialValue);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};

//**esto nos sirve para poder tener por defecto lo que necesitamos sumar dinamicamente, adicional a esto debo pasarle la info en CounterWithCustomHook ya que de lo contrario no funcionara */
