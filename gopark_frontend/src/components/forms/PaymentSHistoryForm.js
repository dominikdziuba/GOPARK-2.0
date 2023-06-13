import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';

const PaymentsHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/base/payments/history', {
        headers: { Authorization: `JWT ${localStorage.getItem('access')}` },
      })
      .then((response) => setPayments(response.data))
      .catch((error) => {
        console.error('There was an error retrieving the payment history!', error);
      });
  }, []);

  return (
    <div className="main-page">
      <div className="content">
        <h1>Historia płatności</h1>
        {payments.length > 0 ? (
          <div className="payment-list">
            {payments.map((payment) => (
              <div className="payment-item" key={payment.id}>
                <div className="payment-details">
                  <div className="payment-number">Numer płatności: {payment.payment_number}</div>
                  <div className="street-name">Nazwa ulicy: {payment.street_name}</div>
                  <div className="register-number">Numer rejestracyjny: {payment.register_number}</div>
                  <div className="parking-time">Czas parkowania: {payment.parking_time}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Brak dostępnych płatności.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentsHistory;
