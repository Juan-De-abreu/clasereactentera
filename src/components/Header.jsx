import { Link } from "react-router-dom"
import FiltroCategorias from "./FiltroCategorias"
import { useNavigate} from 'react-router-dom';
import { useContext, useState } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import VerCarrito from "./Vercarrito";
import { TbShoppingCartSearch } from "react-icons/tb";

const Header = () => {

  const [txtbuscar, setTxtbuscar] = useState('');

  const menejoTxt = (event) => {
    setTxtbuscar(event.target.value);
    console.log(txtbuscar)
};
  const { cart, agregar, eliminar, vaciar, comprar } = useContext(CarritoContext)

const navigate = useNavigate();
const manejoEnvio = (event) => {
    event.preventDefault();
    navigate('/busquedas', {
      state: txtbuscar,
    });	
    
  };


  return (
<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-2" href="#">Victors</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto fs-4">
            <li className="nav-item">
              <Link to={"/inicio"} className="nav-link active" aria-current="page" href="/src/pages/Inicio.jsx">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Movil"} className="nav-link" href="/src/pages/Movil.jsx">Movil</Link>
            </li>
            <li className="nav-item">
              <Link to={"/laptop"} className="nav-link" href="/src/pages/laptop.jsx">Laptop</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Motorcycle"} className="nav-link" href="/src/pages/Tienda.jsx">motorcycle</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Tienda"} className="nav-link" href="/src/pages/Tienda.jsx">Tienda</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to={"/Categoria"} className="nav-link dropdown-toggle" href="/src/pages/Categorias.jsx" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </Link>
              <ul className="dropdown-menu">
                          <FiltroCategorias/>
              </ul>
            </li>
          </ul>
                        {cart.length >= 0 && (
                            <button className="btn btn-outline-warning me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                <TbShoppingCartSearch className="fs-3" />
                                <span className="badge bg-danger m-1">{cart.length}</span>
                            </button>
                        )}
          <form className="d-flex" role="search" onSubmit={manejoEnvio}>
            <input value={txtbuscar} onChange={menejoTxt}  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <VerCarrito cart={cart} agregar={agregar} eliminar={eliminar} vaciar={vaciar} comprar={comprar}   />

</>
  )
}

export default Header