import React from 'react';
import './widget.css';
import { useNavigate } from 'react-router-dom';

function FirstWidget() {
  const navigate = useNavigate();

  const handleBackgroundClick = async () => {
    try {
      // Fetch the API URL from the environment variable
      const apiUrl = process.env.REACT_APP_API_URL;

      // Send a POST request to the API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // You can add body data if needed
        // body: JSON.stringify({ key: 'value' }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // You can handle the successful response here
        console.log('Click counted successfully');
      } else {
        // Handle the case when the response status is not successful
        console.error('Failed to count click:', response.statusText);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('Error counting click:', error);
    }

    // Navigate to the '/second' route after the click is processed
    navigate('/second');
  };

  return <div className='FirstWidget' onClick={handleBackgroundClick}></div>;
}

export default FirstWidget;
