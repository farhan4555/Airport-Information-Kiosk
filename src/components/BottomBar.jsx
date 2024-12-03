import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css'; // Import your CSS file

function BottomBar() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [temperature, setTemperature] = useState('Loading...');

  useEffect(() => {
    // Update date and time
    const updateDateTime = () => {
      const now = new Date();
      const options = { timeZone: 'America/Edmonton', hour12: true };
      setDate(now.toLocaleDateString('en-CA', { timeZone: 'America/Edmonton' }));
      setTime(now.toLocaleTimeString('en-CA', { ...options, hour: '2-digit', minute: '2-digit' }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch Calgary temperature from a public API without keys
    const fetchTemperature = async () => {
      try {
        const response = await fetch('https://wttr.in/Calgary?format=%t'); // Public weather service wttr.in
        const temp = await response.text();
        setTemperature(temp.trim());
      } catch (error) {
        console.error('Error fetching temperature:', error);
        setTemperature('Unavailable');
      }
    };

    fetchTemperature();
  }, []);

  return (
    <Row className="bottomBar">
      <Col md={3} className="text-center">
        <div className="flex-container">
          <img src="./src/components/images/cal.JPG" alt="calendar" />
          <span>{date || 'Loading...'}</span>
        </div>
      </Col>
      <Col md={1} className="text-center" />
      <Col md={3} className="text-center">
        <div className="flex-container">
          <img src="./src/components/images/weat.JPG" alt="weather" />
          <span>{temperature !== 'Loading...' ? `${temperature} Celsius` : 'Loading...'}</span>
        </div>
      </Col>
      <Col md={1} className="text-center" />
      <Col md={3} className="text-center">
        <div className="flex-container">
          <img src="./src/components/images/tim.JPG" alt="clock" />
          <span>{time || 'Loading...'}</span>
        </div>
      </Col>
    </Row>
  );
}

export default BottomBar;
