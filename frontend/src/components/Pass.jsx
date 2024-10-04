import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import html2canvas from 'html2canvas';
import eventImage from '../assets/event1.png';
import './Pass.css';

const Pass = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
  });
  const passRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePass = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  const downloadPass = () => {
    if (passRef.current) {
      html2canvas(passRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'event_pass.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const resetForm = () => {
    setShowForm(true);
    setFormData({ name: '', date: '' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="container">
      {showForm ? (
        <form onSubmit={generatePass} className="input-form">
          <h2>Enter Pass Details</h2>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="date">Date:</label>
            <select
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            >
              <option value="">Select a date</option>
              <option value="2024-10-18">October 18, 2024</option>
              <option value="2024-10-19">October 19, 2024</option>
              <option value="2024-10-20">October 20, 2024</option>
              <option value="2024-10-21">October 21, 2024</option>
            </select>
          </div>
          <button type="submit" className="generate-btn">Generate Pass</button>
        </form>
      ) : (
        <div className="pass-wrapper">
          <div className="pass-container" ref={passRef}>
            <div className="top-section">
              <img src={eventImage} alt="Event Logo" className="event-image" />
            </div>
            <div className="middle-section">
              <h2>{formData.name}</h2>
              <p className="pass-date">{formatDate(formData.date)}</p>
            </div>
            <div className="qr-code-section">
              <QRCodeSVG value={`Name: ${formData.name}, Date: ${formData.date}`} />
            </div>
          </div>
          <div className="button-group">
            <button onClick={downloadPass} className="download-btn">Download Pass</button>
            <button onClick={resetForm} className="reset-btn">Create New Pass</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pass;