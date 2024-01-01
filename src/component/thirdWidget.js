import React from 'react';
import './widget.css';
import { useNavigate } from 'react-router-dom';


function ThirdWidgrt() {
    const navigate = useNavigate();
  
    const handleBackgroundClick = () => {
      navigate('/fregrant');
    };
  
    return (
      <div className='ThirdWidgrt' onClick={handleBackgroundClick}>
      </div>
    );
  }

export default ThirdWidgrt