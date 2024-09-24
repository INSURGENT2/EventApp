import React, { useState, useEffect } from 'react';
import './ExhibitorLogin.css'; // Add your custom styles

function ExhibitorLogin() {
  const [eventDetails, setEventDetails] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventGateCount, setEventGateCount] = useState(0);
  const [requests, setRequests] = useState([]);
  const [showRequests, setShowRequests] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(true);

  const handleAddEvent = (e) => {
    e.preventDefault();
    const gates = Array.from({ length: eventGateCount }, (_, i) => `Gate ${String.fromCharCode(65 + i)}`);
    setEventDetails([...eventDetails, { name: eventName, gates }]);
    setEventName("");
    setEventGateCount(0);
  };

  const handleApproveRequest = (request) => {
    alert(`Request for ${request.event} at ${request.gate} has been approved!`);
    setRequests(requests.filter(r => r !== request)); // Remove the request after approval
  };

  const toggleShowRequests = () => {
    setShowRequests(true);
    setShowAddEvent(false);
  };

  const toggleShowAddEvent = () => {
    setShowRequests(false);
    setShowAddEvent(true);
  };

  // Simulate receiving requests from Visitor Login
  const receiveRequest = (request) => {
    setRequests(prev => [...prev, request]);
  };

  // Simulate adding an event
  useEffect(() => {
    // Simulate some visitor requests
    receiveRequest({ event: "Tech Conference 2024", gate: "Gate A" });
    receiveRequest({ event: "Music Festival 2024", gate: "Gate C" });
  }, []);

  return (
    <div className="exhibitor-login-container">
      <h2>Exhibitor Login</h2>
      <div className="toggle-buttons">
        <button onClick={toggleShowAddEvent} className="toggle-button">Add Event</button>
        <button onClick={toggleShowRequests} className="toggle-button">View Requests</button>
      </div>

      {showAddEvent && (
        <form onSubmit={handleAddEvent} className="event-form">
          <div className="form-group">
            <label>Event Name:</label>
            <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Number of Gates:</label>
            <input type="number" value={eventGateCount} onChange={(e) => setEventGateCount(e.target.value)} min="1" required />
          </div>
          <button type="submit" className="submit-button">Add Event</button>
        </form>
      )}

      {showRequests && (
        <div className="request-list">
          <h3>Visitor Requests:</h3>
          {requests.length === 0 ? (
            <p>No requests yet.</p>
          ) : (
            <ul>
              {requests.map((request, index) => (
                <li key={index}>
                  {request.event} at {request.gate}
                  <button onClick={() => handleApproveRequest(request)} className="approve-button">Approve</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {eventDetails.length > 0 && (
        <div className="event-list">
          <h3>Events:</h3>
          <ul>
            {eventDetails.map((event, index) => (
              <li key={index}>
                {event.name} - Gates: {event.gates.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExhibitorLogin;
