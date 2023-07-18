import './App.css';
import Login from './Components/Login';
import PasswordReset from './Components/PasswordReset';
import SignUp from './Components/SignUP';
import { Route, Routes } from 'react-router-dom';
import LoginSuccess from './Components/LoginSuccess';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/success" element={<LoginSuccess />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
