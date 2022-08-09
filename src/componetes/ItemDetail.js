const ItemDetail = ({product}) => {
    return (
        <section>
            <h4>{product.id}</h4>
            <p>{product.producto} </p>
        </section>
    )
}

export default ItemDetail