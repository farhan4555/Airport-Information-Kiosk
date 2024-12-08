import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css'; // Import your CSS file
import { useTranslation } from 'react-i18next';


function BottomBar() {
  const { i18n } = useTranslation(); // Initialize translation for locale-based formatting
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [temperature, setTemperature] = useState('Loading...');

  useEffect(() => {
    // Update date dynamically
    const updateDateTime = () => {
      const now = new Date();

      // Format the date dynamically based on the selected language
      const formattedDate = now.toLocaleDateString(i18n.language, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      });

      // Format the time always in English (default locale)
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: i18n.language === 'it' ? false : true,
      });

      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [i18n.language]); // Re-run when language changes

  useEffect(() => {
    // Fetch temperature dynamically
    const fetchTemperature = async () => {
      try {
        const response = await fetch('https://wttr.in/Calgary?format=%t'); // Public weather API
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
      {/* Date Section */}
      <Col md={4} className="text-center">
        <div className="flex-container bottomBarDate">
          <img src="/cal.png" alt="calendar" className="botIcons" />
          <div className="fixed-position">
            <span>{date || 'Loading...'}</span>
          </div>
        </div>
      </Col>

      <Col md={4} className="text-center">
        <div className="flex-container bottomBarTemp">
          <img src="/weat.png" alt="weather" className="botIcons" />
          <span>{temperature !== 'Loading...' ? `${temperature} ` : 'Loading...'}</span>
        </div>
      </Col>

      {/* Time Section (Static English Formatting) */}
      <Col md={4} className="text-center">
        <div className="flex-container">
          <img src="/time.png" alt="clock" className="botIcons" />
          <span>{time || 'Loading...'}</span>
        </div>
      </Col>
    </Row>
  );
}

export default BottomBar;