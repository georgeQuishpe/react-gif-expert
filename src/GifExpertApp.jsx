import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Piece' ]);

    const onAddCategory = ( newCategory ) => {
        const categoriesAux = [...categories.map( category => category.toLowerCase() )];
        const newCategoryAux = newCategory.toLowerCase();
        if ( categoriesAux.includes( newCategoryAux ) ) return;
        setCategories( [ newCategory, ...categories ] );
        // setCategories( cat => [... categories, category] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        {/* Mando la referencia a la función */}
        <AddCategory 
            onNewCategory = { value => onAddCategory(value) }
        />

        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category }
                    category={ category } />
            ))
        }
    </>
  )
}
