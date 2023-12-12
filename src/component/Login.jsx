
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [section, setSection] = useState('login'); 
  const{setIsAuthenticated}=useContext (AppContext);
  
 

  const handleLogin = (e) => {
    e.preventDefault();
   
    console.log('Username:', username);
    console.log('Password:', password);

    setSection('dashboard');
    setIsAuthenticated(true)
  };

  const renderSection = () => {
    switch (section) {
      case 'login':
        return (
           <form onSubmit={handleLogin} className='mt-4'>
       <label>
         Username:
         <input
            type="text" className='logg'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className='mt-4'>
          Password:
          <input
            type="password" className='logg'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className='mt-4 log 'onClick={handleLogin}>Login</button>
      </form>
        );
      case 'dashboard':
        return (
          <div>
            <h2 className='text-white fs-5 mt-4  '>Welcome to Allen Collecions! <br/> {username}!</h2>
          </div>
        );
   
      default:
        return null;
    }
  };

  return (
    <div className='login '>
      <h1 className=''>Login</h1>
      {renderSection()}
    </div>
  );
};

export default Login;