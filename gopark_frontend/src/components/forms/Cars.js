import React, { useState, useEffect } from "react";
import axios from '../../axiosConfig';
import { Link } from 'react-router-dom';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/base/cars/", {
        headers: { Authorization: `JWT ${localStorage.getItem("access")}` },
      })
      .then((response) => setCars(response.data))
      .catch((error) => {
        console.error("There was an error retrieving the cars!", error);
      });
  }, []);


  return (
    <div className="main-page">
      <div className="content">
        <h1>Lista samochodów</h1>
        {cars.length > 0 ? (
          <div className="car-list">
            {cars[0] && (
              <div className="car-item">
                <Link to={`/car/${cars[0].id}`} style={{ textDecoration: 'none' }}>
                  <div className="car-details">
                    <div className="car-brand">{cars[0].brand}</div>
                    <div className="car-model">{cars[0].model}</div>
                    <div className="car-reg-num">{cars[0].register_num}</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <p>Brak dostępnych samochodów.</p>
        )}
        <div className="add-car">
          <Link to={`/addcar/`} style={{ textDecoration: 'none' }}>
            <button className="add-car-button">Dodaj samochód</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cars;
