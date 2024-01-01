import React from 'react';
import './widget.css';
import { useNavigate } from 'react-router-dom';


function SecondWidget() {
    const navigate = useNavigate();
  
    const handleBackgroundClick = () => {
      navigate('/dirty');
    };
  
    return (
      <div className='SecondWidget' onClick={handleBackgroundClick}>
      </div>
    );
  }

export default SecondWidget