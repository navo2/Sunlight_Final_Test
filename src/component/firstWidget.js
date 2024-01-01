import React from 'react';
import './widget.css';
import { useNavigate } from 'react-router-dom';

function FirstWidget() {
  const navigate = useNavigate();

  const handleBackgroundClick = () => {
    navigate('/second');
  };

  return (
    <div className='FirstWidget' onClick={handleBackgroundClick}>
    </div>
  );
}

export default FirstWidget;
