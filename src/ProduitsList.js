import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProduitsList = () => {
  const [prod, setProd] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/db.json");
      setProd(response.data.produits);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const updateProduct = (id, updatedProduct) => {
    const updatedProducts = prod.map((product) =>
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProd(updatedProducts);
  };
  const deleteProduct = (id) => {
    const updatedProducts = prod.filter((product) => product.id !== id);
    setProd(updatedProducts);
  };



  return (
    <div className="container">
      <div className="card">
        <div className="divbtn">
          <Link to="/produits/create" className="btn">
            Ajouter produit
          </Link>
        </div>
        <div className="card-title">
          <h2>Liste des produits</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text white">
              <tr>
                <td>ID</td>
                <td>Nom</td>
                <td>Prix</td>
                <td>Quantite</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {prod.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.nom}</td>
                  <td>{item.prix}</td>
                  <td>{item.quantite}</td>
                  <td>
                    <Link
                      onClick={() =>
                        updateProduct(item.id, {
                          ...item,
                          prix: item.prix + 100,
                        })
                      }
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => deleteProduct(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProduitsList;
