import './App.css';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cars from './components/forms/Cars';
import AddCarForm from './components/forms/AddCarForm';
import AddPayment from './components/forms/PayForm';
import PaymentsHistory from './components/forms/PaymentSHistoryForm';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/cars" element={<Cars/>} />
          <Route path="/addcar" element={<AddCarForm />} />
          <Route path="/payment" element={<AddPayment />} />
          <Route path="/history" element={<PaymentsHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;