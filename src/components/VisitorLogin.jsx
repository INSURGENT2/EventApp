import React, { useState } from 'react';
import './VisitorLogin.css'; // Add your custom styles

const events = [
  { id: 1, name: "Tech Conference 2024", gates: ["Gate A", "Gate B"] },
  { id: 2, name: "Music Festival 2024", gates: ["Gate C", "Gate D"] },
  { id: 3, name: "Art Exhibition 2024", gates: ["Gate E", "Gate F"] },
  { id: 4, name: "Science Fair 2024", gates: ["Gate G", "Gate H"] }
];

function VisitorLogin({ onRequestSubmit }) {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedGate, setSelectedGate] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [duration, setDuration] = useState("");
  const [purpose, setPurpose] = useState("");
  const [request, setRequest] = useState(null); // Store the visitor request

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the request object
    const visitorRequest = {
      event: selectedEvent,
      gate: selectedGate,
      date: visitDate,
      time: visitTime,
      duration,
      purpose
    };

    // Send the request to the Exhibitor (simulated)
    if (onRequestSubmit) {
      onRequestSubmit(visitorRequest); // Pass request to Exhibitor
    }

    // Store the request details
    setRequest(visitorRequest);
    resetForm();
  };

  const resetForm = () => {
    setSelectedEvent("");
    setSelectedGate("");
    setVisitDate("");
    setVisitTime("");
    setDuration("");
    setPurpose("");
  };

  return (
    <div className="visitor-login-container">
      <div className="visitor-login">
        <h2>Visitor Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Event:</label>
            <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)} required>
              <option value="">Select an event</option>
              {events.map(event => (
                <option key={event.id} value={event.name}>{event.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Gate:</label>
            <select value={selectedGate} onChange={(e) => setSelectedGate(e.target.value)} required>
              <option value="">Select a gate</option>
              {selectedEvent && events.find(e => e.name === selectedEvent).gates.map((gate, index) => (
                <option key={index} value={gate}>{gate}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Date of Visit:</label>
            <input type="date" value={visitDate} onChange={(e) => setVisitDate(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Time of Visit:</label>
            <input type="time" value={visitTime} onChange={(e) => setVisitTime(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Duration (hours):</label>
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Purpose of Visit:</label>
            <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} required />
          </div>

          <button type="submit" className="submit-button">Request Access</button>
        </form>

        {request && (
          <div className="request-summary">
            <h3>Request Summary:</h3>
            <p>Event: {request.event}</p>
            <p>Gate: {request.gate}</p>
            <p>Date: {request.date}</p>
            <p>Time: {request.time}</p>
            <p>Duration: {request.duration} hours</p>
            <p>Purpose: {request.purpose}</p>
            <p>Your request is pending approval by the exhibitor.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisitorLogin;

