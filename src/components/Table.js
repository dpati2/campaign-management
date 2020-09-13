import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import Modal from './Modal';
import {  getEventOccurnce } from '../helper';

import "react-datepicker/dist/react-datepicker.css";
import './styles.scss';
const Table = ({tableData ,updateTableData, activeTab, local}) => {
  const [modalData, showModal ] = useState({
    show: false,
    data: {}
  })
  const filterData = () => {
    if(tableData.length) {
      return tableData.filter(({createdOn}) => {
        switch(activeTab) {
          case '1':
            return getEventOccurnce(createdOn).event === 'UPCOMING';
            break;
          case '2': 
            return getEventOccurnce(createdOn).event === 'TODAY';
            break;
          case '3': 
            return getEventOccurnce(createdOn).event === 'PAST';
            break;
        }
      })
    }
    return [];
  }

  const headTable = () => (
    <tr className="head">
      <th>{local.date}</th>
      <th>{local.campaign}</th>
      <th>{local.view}</th>
      <th>{local.action}</th>
    </tr>
  )

  const getDaysStr = (createdOn) => {
    const { event, days} = getEventOccurnce(createdOn);
    if(event === 'UPCOMING' ) {
      return `${days} ${local.dhead}`
    } else if (event === 'PAST') {
      return `${days} ${local.dago}`
    } else {
      return local.today
    }
  };

  const getDateStr = (createdOn) => {
    let date  = new Date(createdOn);
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear();
    const day = date.getDate();
    return `${month} ${year}, ${day}`;
  }
  const onDateChange = (date,id) => {
    const updatedData = tableData.map((elm) => {
      if(elm.id === id) {
          return {
            ...elm,
            createdOn: new Date(date).getTime()
          }
      }
      return elm
    })
    console.log("===>updatedData==>",updatedData);
    updateTableData(updatedData);
  }

  const tableBody = () => {
    const filterdData = filterData();
    console.log("====>",tableData,"====>",filterdData);
    return filterdData.map((elm) => (
      <tr>
        <td className="date">
          <div>{getDateStr(elm.createdOn)}</div>
          <i>{getDaysStr(elm.createdOn)}</i>
        </td>
        <td className="campaign">
          <img src={`./${elm.image_url}`}/>
          <div>
            <p>{elm.name}</p>
            <i>{elm.region}</i>
          </div>
       </td>
        <td className="view">
          <div className="icon-container" onClick={() => {
            showModal({
              show: true, 
              data: elm
          })
          }}>
              <i className="price"></i>
              <span>View Pricing</span>
            </div>
        </td>
        <td className="actions">
          <div className="icon-container">
            <i className="file"></i>
            <span>CSV</span>
          </div>
          <div className="icon-container">
            <i className="report"></i>
            <span>Report</span>
          </div>
          <div className="icon-container">
           <DatePicker 
            onChange={(date) => {onDateChange(date,elm.id)}}>
            </DatePicker>
            <i className="calendar"></i>
            <span>Schedule Again</span>
          </div>
        </td>
      </tr>
    ));
  }
  return (
    <>
    <table id="customers" className="tableData">
      <thead>
        {headTable()}
      </thead>
      <tbody>
        {tableBody()}
      </tbody>
    </table>
    {modalData.show ? 
    <Modal data={modalData.data}  showModal={showModal}/>: null}
    </>
  );
}

export default Table;