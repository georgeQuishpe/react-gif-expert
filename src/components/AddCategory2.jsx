// ESTE ARCHIVO SOLO SIRVE PARA CONSERVAR LOS COMENTARIOS EN EL MISMO
 
import { useState } from 'react';

// Se están desestructurando las Props que vienen
export const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState( '' );

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  };

  const onSumit = ( event ) => {
    // Para que no haga refresh de la página web
    event.preventDefault();

    // Verificar que el inputValue al menos tenga un caracter
    // Se sale de la función con el return
    if( inputValue.trim().length <= 1 ) return;

    // setCategories permite mandar un Callback para tener las categories
    setCategories( categories => [ inputValue, ...categories ] );

    // Limpiar el inputValue
    setInputValue('');
  };

  return (
      <form onSubmit={ onSumit }>
        <input 
          type="text" 
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={ onInputChange }
        />
      </form>
  )
}
