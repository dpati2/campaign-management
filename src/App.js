import React from 'react';
import logo from './assets/logo.svg';
import DashBoard from './DashBoard';
// import { header} from './styles';
import './styles.scss';

function App() {
  return (
    <div className="app container">
      <header className="header">
        <div className="container">
          <img src={logo}  alt="logo"  height="45px"/>
        </div>
      </header>
      <DashBoard/>
    </div>
  );
}

export default App;
