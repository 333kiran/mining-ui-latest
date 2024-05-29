import React from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/signin.css'
import { FaTimes } from 'react-icons/fa';

const SignInCard = ({visible, onCancel}) => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div style={{ display: visible ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 999,  }}>
      <div className='card-container'>
      <div className='cross-icon'  onClick={onCancel}><FaTimes/></div>
        <h2 className='heading'>Welcome to Kissan</h2>
        <div className='form-container'>
       
        <input className='input-box' type="text" name="email" required placeholder='Enter your email ' />
        <input className='input-box' type="text" name="password" required placeholder='enter your password' style={{marginBottom:1}}/>
        <a href="/forgot-password" className="forgot-password-link" style={{textAlign:'end',marginRight:110}}>Forgot password?</a>
        <div className='checkbox' style={{margin:0,padding:0}}>
            <input type="checkbox" id="agreeTerms" name="agreeTerms" />
            <label htmlFor="agreeTerms"> Remember email</label>
          </div>
        <div className='btn-box-login'> <button className='btn-login'>LogIn</button></div>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
