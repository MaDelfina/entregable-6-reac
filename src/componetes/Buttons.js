import Button from 'react-bootstrap/Button';

const Botones = (props) => {

  if (props.type == "NavBar") {
    return (
      <nav>
        <Button variant="outline"><a href="#">Home</a></Button>
        <Button variant="outline"><a href="#">contacto</a></Button>
        <Button variant="outline"><a href="#">Productos</a></Button>
        <Button variant="outline">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Button>
      </nav>
    )
  }else{
    return (
      <nav>
        <a href="#">Talles</a>
        <a href="#">Contacto</a>
        <a href="#">Redes Sociales</a>
        <a href="#">Productos</a>
      </nav>
    )
  }
}

export default Botones;