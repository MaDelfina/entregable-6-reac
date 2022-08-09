import { useEffect, useState } from "react";
import {product} from "../productos/productos"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const pedido = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product[0])
            }, 2000)
        })

        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)

            pedido.catch((error) => {
                console.log("error");
            })

            pedido.finally(() => {
                console.log("finalizo");
            })
        })
    }, [])

    if (loading) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <itemDetail productos={productos} />
        )
    }
}

export default ItemDetailContainer