import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import CardProduc from "../components/CardProduc";
const API = 'https://dummyjson.com/products/search?q=';
import { useLocation } from 'react-router-dom';


const Busquedas = () => {
    const location=useLocation();
    const txtbuscar=location.state;

   const [datos, setDatos] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

    const getDatos = async (valueSearch) => {
            try {
                const response = await fetch(API+valueSearch);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDatos(data.products);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

    useEffect(() => {
        getDatos(txtbuscar);
    }, [txtbuscar]);
    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Productos...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Productos</h4>
                <p>{error}</p>
            </div>
        );
    }
  return (
    <div className="container">

      <div className="row">
        {datos.map((item)=>(
        <CardProduc key={item.id} item={item} />
        ))}


      </div>

    </div>
  )
}

export default Busquedas