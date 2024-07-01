
import './App.css';
import { LeadList } from './Components/LeadList';
import { useState, useEffect } from "react";

function App() {
  const [leads, setLeads] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/leads/get-all-data')
      .then(response => response.json())

      .then(data => setLeads(data?.data));
  }, []);

  const handleSelectLead = (leadId) => {
    setSelectedLeads(prevSelectedLeads => {
      if (prevSelectedLeads.includes(leadId)) {
        return prevSelectedLeads.filter(id => id !== leadId);
      } else {
        return [...prevSelectedLeads, leadId];
      }
    });
  }

  const handleButtonClick = () => {
    fetch('http://localhost:8000/api/leads/generate-emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ leadsIds: selectedLeads }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("data :", data);
      });
  };

  return (
    <div className="App">
      <h1>Lead List</h1>
      <LeadList leads={leads} onSelectLead={handleSelectLead} />
      <button onClick={handleButtonClick}>Generate Emails</button>
    </div>
  );
}

export default App;
