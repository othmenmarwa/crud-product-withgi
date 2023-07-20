import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ProduitsList'
import { Link, useNavigate } from 'react-router-dom';

const ProdCreate = () => {
    const [nom,setNom]= useState("");
    const [prix,setPrix]= useState("");
    const [quantite,setQuantite]= useState("");
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log({nom,prix,quantite});
        
    }
    return (

        <div>
            <div className="row">
                <div className="offset-lg-3">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{width:"70%",height:"50%",marginLeft:"2%",marginRight:"80%",marginTop:"10%"}}>
                            <div className="card-title">
                                <h2>Creation de produit</h2>

                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-groupe">
                                        <label>Nom:</label>
                                        <input value ={nom} onChange={e=>setNom(e.target.value)}className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-groupe">
                                        <label>prix:</label>
                                        <input value ={prix} onChange={e=>setPrix(e.target.value)}className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-groupe">
                                        <label>quantite:</label>
                                        <input value ={quantite} onChange={e=>setQuantite(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-groupe">
                                        
                                       <button className='btn btn-success' type='submit'>Ajoutez</button>
                                       <Link to="/produits/liste"className="btn btn-danger">retour</Link>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </form>
                </div>

            </div>


        </div>
    );
}

export default ProdCreate;