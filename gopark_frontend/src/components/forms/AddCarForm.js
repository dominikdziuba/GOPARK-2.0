import React, { useState } from 'react';
import axios from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';

const AddCars = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [registerNum, setRegisterNum] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'brand') {
      setBrand(value);
    } else if (name === 'model') {
      setModel(value);
    } else if (name === 'registerNum') {
      setRegisterNum(value);
    } else if (name === 'image') {
        setImage(value);
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/base/cars/', { brand, model, register_num: registerNum, image }, {
        headers: { Authorization: `JWT ${localStorage.getItem("access")}` }
      })
      .then((response) => {
        setMessage('Samochód został dodany pomyślnie');
        navigate('/boards');
      })
      .catch((error) => {
        setMessage('Wystąpił błąd podczas dodawania samochodu');
        console.error(error);
      });
  };

  return (
    <div className="main-page">
        <div className="content">
            <div className="add">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="brand" className="add_task_text">Marka:</label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={brand}
                    onChange={handleInputChange}
                    className="car-name-input"
                  />
                </div>
                <div>
                  <label htmlFor="model" className="add_task_text">Model:</label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    value={model}
                    onChange={handleInputChange}
                    className="car-name-input"
                  />
                </div>
                <div>
                  <label htmlFor="registerNum" className="add_task_text">Numer rejestracyjny:</label>
                  <input
                    type="text"
                    id="registerNum"
                    name="registerNum"
                    value={registerNum}
                    onChange={handleInputChange}
                    className="car-name-input"
                  />
                </div>
                <div>
                  <label htmlFor="image" className="add_task_text">Obrazek:</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={image}
                    onChange={handleInputChange}
                    className="car-name-input"
                  />
                </div>
                <button type="submit" className="AddBtn">Dodaj</button>
              </form>
              {message && <p>{message}</p>}
            </div>
        </div>
    </div>
  );
};

export default AddCars;
