import { Link } from "react-router-dom";

import { CarritoContext } from "../contexts/CarritoContext"
import { DolarContext } from '../contexts/DolarContext';
import { useContext } from "react";


const CardProduc = ({item}) => {

const {cart,agregar,eliminar}=useContext(CarritoContext)

 const getCantidad = (producto) => {
        return cart.find((item) => item.id === producto.id)?.cantidad || 0
    }

  const totalProd = getCantidad(item)
  const precioTotal = parseFloat(item.price * totalProd);


  return (

    
          <div className="col-md-4 col-lg-3 py-2">
            <div className="card h-100 text-center">
              <div className="card-header">
                {totalProd > 0 && (
                        <span
                            className="badge rounded-pill text-bg-info fs-4 m-2" style={{ position: 'absolute', top: '0', right: '0', zIndex: '1' }}>
                            {totalProd}
                        </span>
                    )}
                <img src={item.thumbnail} alt={item.title} className="img-fluid" />
              </div>
              <div className="card-body">
                <h5 className="fs-3">{item.title}</h5>
                <h6 className="py-2 text-danger">{item.price}$</h6>
              </div>
              <div className="card-footer text-center">
                <a href="#" className="btn btn-sm btn-primary m-2" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Modal</a>
                <Link to={`/Detalle/${item.id}/${item.title}`} href="#" className="btn btn-sm btn-info m-2">Detalles</Link>
                <hr />
                <button className="btn btn-sm btn-outline-info" onClick={() => agregar(item)}>+ Agregar</button>
                {totalProd > 0 && (
                    <button className="btn btn-outline-danger btn-sm mx-1" onClick={() => eliminar(item)}>- Restar</button>
                    )}
              </div>
            </div>


  <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="row">
          <div className="col-4"><img src={item.thumbnail} alt="" /></div>
          <div className="col-8 text-left">
            <h3 className="py-2">{item.title}</h3>
            <h4 className="py-2">Categoria : {item.category}</h4>
            <h4 className="py-2">Marca : {item.brand}</h4>
            <h4 className="py-2">Existencia : {item.stock}</h4>
            <p>{item.description}</p>
            <p className="text-danger">Precio: {item.price}</p>
          </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>


          </div>
        
        
  )
}

export default CardProduc