import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [count, setCount] = useState(0);
    // USEEFFECT ES PARA LIMITAR LA CANTIDAD DE VECES QUE SE EJECUTA UNA FUNCIÓN AL CAMBIAR ALGÚN ESTADO
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category])
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="card animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}
