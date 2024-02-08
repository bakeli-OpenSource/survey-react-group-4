import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Liste_sondage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/form");
        const jsonData = await response.json();
        setData(jsonData.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  

  return (
    <React.Fragment>
      <div className="container3 container_overflow">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">List Sondage</h1>
            <p className="text-danger"></p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Prenom</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">Telephone</th>
                  <th scope="col">Candidat</th>
                  <th scope="col">Pourquoi</th>
                  <th scope="col" width="200">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((pdata, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pdata.prenom}</td>
                    <td>{pdata.nom}</td>
                    <td>{pdata.email}</td>
                    <td>{pdata.tel}</td>
                    <td>{pdata.choix}</td>
                    <td>{pdata.pourquoi}</td>
                    <td>
                      {/* <Link
                        to={`/editproduct/${pdata.id}/edit`}
                        className="btn btn-success mx-2"
                      >
                        Edit
                      </Link>
                      <button onClick={() => deleteProduct(pdata.id)} className="btn btn-danger">Delete</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}