import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Cazador X']);
    // const handleAdd = () => {
    //     // FORMAS DE AGREGAR UN ELEMENTO A UN ARREGLO USANDO USESTATE
    //     // setCategories([...categories, 'Shingeki no Kyojin']);
    //     setCategories(cats => [...cats, 'Shingeki no Kyojin']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map(cat => (
                        <GifGrid 
                            key={cat}
                            category={cat} 
                        />
                    ))
                }
            </ol>
        </>
    )
}
