import React, { useState, useEffect } from 'react';
import Tab from './components/Tab';
import Table from './components/Table';
import { initialData } from './components/__mocks__';
import { locales } from './local';
const DashBoard = () => {
  const [activeTab, updateTab] = useState('1');
  const [lang, selectlang] = useState(localStorage.getItem('lang') || 'en');
  const [tableData ,updateTableData] = useState(initialData.data || []);
  const local = locales[lang];
  const changeLang = (e) => {
    console.log("===>",e.target.value);
    localStorage.setItem('lang', e.target.value);
    selectlang(e.target.value);
  }
  console.log("==>",local.heading);
  return (
    <>
      <h2 className="heading">{local.heading}</h2>
      <select onChange={changeLang} defaultValue={lang} className="select">
        <option value="en">English</option>
        <option value="gn">Germen</option>
      </select>
      <Tab activeTab={activeTab} updateTab={updateTab} local={local}/>
      <Table activeTab={activeTab} tableData={tableData} updateTableData={updateTableData} local={local}/>
    </>
  );
}

export default DashBoard;