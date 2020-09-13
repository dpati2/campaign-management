import React, { useState, useEffect } from 'react';

const Tabs = ({activeTab, updateTab, local}) => {

  return <ul className="tab">
    <li key="1" className={activeTab === '1' ? "active": null } onClick={() => updateTab('1')}>{local.upcoming}</li>
    <li key="2" className={activeTab === '2' ? "active": null } onClick={() => updateTab('2')}>{local.live}</li>
    <li key="3" className={activeTab === '3' ? "active": null } onClick={() => updateTab('3')}>{local.past}</li>
  </ul>;
}

export default Tabs;