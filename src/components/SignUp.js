import React from 'react';
import { Input, Checkbox, Button } from 'antd';
import { FaCross, FaTimes } from 'react-icons/fa';
import '../styles/signup.css';
import { CheckBox } from '@mui/icons-material';

const SignUpForm = ({ visible, onCancel }) => {
  return (
    <div style={{ display: visible ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0, 0.9)', zIndex: 999,  }}>
      <div className='card-container' >
        <div className='cross-icon'  onClick={onCancel}><FaTimes/></div>
          <div className='content-container'>
            <p className='heading'>Welcome to Kissan</p>
            <input className='input-box' type="text" name="username" required placeholder='Enter Username' />
            <input className='input-box' type="text" name="username" required placeholder='Your Valid Email' />
            <input className='input-box' type="text" name="username" required placeholder='Wallet Address (BEP20)' />
            <input className='input-box' type="text" name="username" required placeholder='Create Password' />
            <input className='input-box' type="text" name="username"  placeholder='Promocode (Optional)' />
            <div className='checkbox'>
            <input type="checkbox" id="agreeTerms" name="agreeTerms" />
            <label htmlFor="agreeTerms">I agree with Stormgain customer agreement and policies</label>
          </div>

           <div className='btn-box-signup'> <button className='btn-signup'>Create an account</button></div>
          </div>
         
      </div>
    </div>
  );
};

export default SignUpForm;
