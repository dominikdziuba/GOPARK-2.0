import React, { useState } from 'react';
import axios from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';

const AddPayment = () => {
  const [paymentNumber, setPaymentNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [parkingTime, setParkingTime] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'paymentNumber') {
      setPaymentNumber(value);
    } else if (name === 'streetName') {
      setStreetName(value);
    } else if (name === 'registerNumber') {
      setRegisterNumber(value);
    } else if (name === 'parkingTime') {
      setParkingTime(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/base/payments/', {
        payment_number: paymentNumber,
        street_name: streetName,
        register_number: registerNumber,
        parking_time: parkingTime
      }, {
        headers: { Authorization: `JWT ${localStorage.getItem("access")}` }
      })
      .then((response) => {
        setMessage('Płatność została dodana pomyślnie');
        navigate('/payments');
      })
      .catch((error) => {
        setMessage('Wystąpił błąd podczas dodawania płatności');
        console.error(error);
      });
  };

  return (
    <div className="main-page">
      <div className="content">
        <div className="add">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="paymentNumber" className="add_task_text">Numer płatności:</label>
              <input
                type="text"
                id="paymentNumber"
                name="paymentNumber"
                value={paymentNumber}
                onChange={handleInputChange}
                className="payment-input"
              />
            </div>
            <div>
              <label htmlFor="streetName" className="add_task_text">Nazwa ulicy:</label>
              <input
                type="text"
                id="streetName"
                name="streetName"
                value={streetName}
                onChange={handleInputChange}
                className="payment-input"
              />
            </div>
            <div>
              <label htmlFor="registerNumber" className="add_task_text">Numer rejestracyjny:</label>
              <input
                type="text"
                id="registerNumber"
                name="registerNumber"
                value={registerNumber}
                onChange={handleInputChange}
                className="payment-input"
              />
            </div>
            <div>
              <label htmlFor="parkingTime" className="add_task_text">Czas parkowania:</label>
              <input
                type="text"
                id="parkingTime"
                name="parkingTime"
                value={parkingTime}
                onChange={handleInputChange}
                className="payment-input"
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

export default AddPayment;
