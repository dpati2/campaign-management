import React, { useState } from 'react';
import Tab from './components/Tab';
import Table from './components/Table';
import { locales } from './local';
const DashBoard = () => {
  const [activeTab, updateTab] = useState('1');
  const [lang, selectlang] = useState(localStorage.getItem('lang') || 'en');
  const local = locales[lang];

  const changeLang = (e) => {
    localStorage.setItem('lang', e.target.value);
    selectlang(e.target.value);
  }

  return (
    <>
      <h2 className="heading">{local.heading}</h2>
      <select onChange={changeLang} defaultValue={lang} className="select">
        <option value="en">English</option>
        <option value="gn">Germen</option>
      </select>
      <Tab activeTab={activeTab} updateTab={updateTab} local={local}/>
      <Table activeTab={activeTab} local={local}/>
    </>
  );
}

export default DashBoard;