import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduc from "../components/CardProduc";
const API = 'https://dummyjson.com/products/category/';
const Categorias = () => {
    const param=useParams();
    const [datos, setDatos] = useState([]);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState(null);
        const getDatos = async () => {
                try {
                    const response = await fetch(API+param.slug);
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
            getDatos();
        }, [param.slug]);
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

                    <h3 className="text-center py-4">{param.name}</h3>
                    {datos.map((item)=>(
                    <CardProduc key={item.id} item={item} />
                    ))}
            
            </div>
  </div>
  )
}

export default Categorias