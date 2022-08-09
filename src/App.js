import { BrowserRouter } from "react-router-dom";
import NavBar from "./componetes/NavBar";
import ItemListContainer from "./componetes/ItemListContainer";
import Footer from "./componetes/Footer"


const App = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <ItemListContainer/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;