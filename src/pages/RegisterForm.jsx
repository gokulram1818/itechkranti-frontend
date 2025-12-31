import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    participant1Name: '',
    participant1Roll: '',
    participant2Name: '',
    participant2Roll: '',
    stream: '',
    department: '',
    phone: '',
    events: {
      cipherChase: false, 
      codeRelay: false,
      promptMasters: false, // Kept as requested
      memeMania: false,         // Data Dash and Prompt Masters removed
      mindscape: false,  
      techSpirit: false,
    },
  });

 const handleChange = (e) => {
  const { name, value, checked, type } = e.target;

  // Handle Event Checkboxes (Nested Object)
  if (name in formData.events) {
    setFormData(prev => ({
      ...prev,
      events: {
        ...prev.events,
        [name]: checked // This updates the specific boolean (true/false)
      }
    }));
  } 
  // Handle Stream Selection
  else if (name === "stream") {
    setFormData(prev => ({
      ...prev,
      stream: value
    }));
  } 
  // Handle All Other Text/Tel Inputs
  else {
    const finalValue = type === "text" ? value.toUpperCase() : value;
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
  }
};


  const validateForm = () => {
    const nameRegex = /^[A-Z\s.]+$/;
    const rollRegex = /^[A-Z0-9]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(formData.participant1Name)) {
      alert("Participant 1 Name should contain only letters and dots.");
      return false;
    }
    if (!rollRegex.test(formData.participant1Roll)) {
      alert("Participant 1 Roll Number must be alphanumeric.");
      return false;
    }
    if (formData.participant2Name && !nameRegex.test(formData.participant2Name)) {
      alert("Participant 2 Name should contain only letters and dots.");
      return false;
    }
    if (formData.participant2Roll && !rollRegex.test(formData.participant2Roll)) {
      alert("Participant 2 Roll Number must be alphanumeric.");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone Number must be exactly 10 digits.");
      return false;
    }
    if (!formData.stream) {
      alert("Please select your stream (Aided or Self Financed).");
      return false;
    }
    
    const isEventSelected = Object.values(formData.events).some(val => val === true);
    if (!isEventSelected) {
      alert("Please select at least one event.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch("https://itechkranti-backend.onrender.com//api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      alert("Registration Successful!");
      console.log("Data being sent:", formData);
      
      setFormData({
        participant1Name: "",
        participant1Roll: "",
        participant2Name: "",
        participant2Roll: "",
        stream: "",
        department: "",
        phone: "",
        events: {
          codeRelay: false,
          cipherChase: false,
          promptMasters: false,
          memeMania: false,
          mindscape: false,
          techSpirit: false
        },
      });
    } catch (error) {
      alert("Server error. Please try again later.");
    }
  };

  return (
    <section className='registerForm'>
      <div className="form-glass-container">
        <div className="form-header">
          <h2>EVENT REGISTRATION</h2>
          <div className="gold-line"></div>
        </div>

        <form onSubmit={handleSubmit} className="luxury-form">
          <div className="input-grid">
            <div className="input-group">
              <label>Participant 1 Name</label>
              <input type="text" name="participant1Name" value={formData.participant1Name} onChange={handleChange} placeholder="FULL NAME" required />
            </div>
            <div className="input-group">
              <label>Roll Number</label>
              <input type="text" name="participant1Roll" value={formData.participant1Roll} onChange={handleChange} placeholder="E.G. 23BIT001" required />
            </div>
            <div className="input-group">
              <label>Participant 2 Name</label>
              <input type="text" name="participant2Name" value={formData.participant2Name} onChange={handleChange} placeholder="PARTNER NAME" />
            </div>
            <div className="input-group">
              <label>Roll Number</label>
              <input type="text" name="participant2Roll" value={formData.participant2Roll} onChange={handleChange} placeholder="E.G. 23BIT002" />
            </div>
          </div>

          <div className="stream-selection">
            <label className="checkbox-card">
              <input type="checkbox" name="stream" value="aided" checked={formData.stream === 'aided'} onChange={handleChange} />
              <span className="custom-box"></span>
              <span className="event-name-text">AIDED</span>
            </label>
            <label className="checkbox-card">
              <input type="checkbox" name="stream" value="self-financed" checked={formData.stream === 'self-financed'} onChange={handleChange} />
              <span className="custom-box"></span>
              <span className="event-name-text">SELF FINANCED</span>
            </label>
          </div>

          <div className="input-group">
            <label>Department</label>
            <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="E.G. BSC INFORMATION TECHNOLOGY" required />
          </div>

          <div className="input-group">
            <label>WhatsApp Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10 DIGIT NUMBER" required />
          </div>

          <div className="event-selection">
            <label className="section-label">Select Your Events</label>
            <div className="event-grid">
              {Object.keys(formData.events).map((event) => (
                <label key={event} className="checkbox-card">
                  <input type="checkbox" name={event} checked={formData.events[event]} onChange={handleChange} />
                  <span className="custom-box"></span>
                  <span className="event-name-text">
                    {event === 'mindscape' ? 'MINDSCAPE' : 
                     event === 'cipherChase' ? 'CIPHER CHASE' : 
                     event.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <a href=" https://chat.whatsapp.com/HkX4PKG7oEdJgF2J2IEe1z" target="_blank" rel="noopener noreferrer" className="luxury-btn wa-btn">JOIN WHATSAPP GROUP</a>
            <button type="submit" className="luxury-btn main-btn">CONFIRM REGISTRATION</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;