import { useEffect, useState } from "react"
import { customFetch } from "../CustomFetch"
import { productos } from "../productos/productos";
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const [ListProducts, SetListProducts] = useState([])

  useEffect(() => {
    customFetch(productos)
    .then(data => SetListProducts(data))
  }, [])

  return (
    <>
      <ItemList ListProducts={ListProducts} />
    </>
  )
}
export default ItemListContainer