import React, { useState } from 'react';
import { Layout, Button, Dropdown, Menu,Modal } from 'antd';
import { FaBlog, FaCoins, FaCopy, FaCrow, FaCrown, FaGifts, FaHammer, FaInfo, FaNewspaper, FaProcedures, FaQuestion, FaRegistered, FaStepForward, FaUser, FaUserCheck } from 'react-icons/fa';
import logo from '../assets/images/sitelogo.png';
import '../styles/HeaderMenu.css';
import SignInModal from './SigninModel';
import { FaBagShopping, FaForwardStep, FaShield } from 'react-icons/fa6';
import { FcDataEncryption } from 'react-icons/fc';
import CreateAccountCard from './SignUp';
import SignUpForm from './SignUp';
import SignInCard from './SignIn';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderMenu = () => {
  const [showDropdowns, setShowDropdowns] = useState({
    products: false,
    earn: false,
    easyStart: false,
    academy: false,
    company: false,
  });

  const [openSignUpModel,setOpenSignUpModel] = useState(false);
  const [openSignInModel,setOpenSignInModel] = useState(false);

 
const handleSignIn = () => {
  setOpenSignInModel(true)
}

const handleGetStartedButton = () => {
  setOpenSignUpModel(true)
}

const handleCancelSignUp = () => {
  setOpenSignUpModel(false);
};

const handleCancelSignIn = () => {
  setOpenSignInModel(false);
};

  const handleDropdownVisibleChange = (dropdown, flag) => {
    setShowDropdowns({ ...showDropdowns, [dropdown]: flag });
  };

  const renderProductsMenu = () => (
    <Menu className="dropdown-menu" style={{ background: '#041e3b', marginTop: '13px' }}>
      <Menu.Item key="1" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Product 1</span>
      </Menu.Item>
      <Menu.Item key="2" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Product 2</span>
      </Menu.Item>
      {/* Add more menu items as needed */}
    </Menu>
  );

  const renderEarnMenu = () => (
    <Menu className="dropdown-menu" style={{ background: '#041e3b', marginTop: '13px' }}>
      <Menu.Item key="1" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box hammer"><FaHammer /></div>
        <Link to="/">   <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>KSN Mining</span></Link>
      </Menu.Item>
      <Menu.Item key="2" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaUser /></div>
      <Link to="refer-a-friend">  <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Refer a Friend</span></Link>
      </Menu.Item>
      {/* Add more menu items as needed */}
    </Menu>
  );

  const renderEasyStartMenu = () => (
    <Menu className="dropdown-menu" style={{ background: '#041e3b', marginTop: '13px' }}>
      <Menu.Item key="1" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box hammer"><FaUserCheck /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Registration & Features</span>
      </Menu.Item>
      <Menu.Item key="2" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaForwardStep /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Mining Process</span>
      </Menu.Item>
      <Menu.Item key="3" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaCoins /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Claim Crypto</span>
      </Menu.Item>
      <Menu.Item key="4" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaGifts /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Claim Rewards</span>
      </Menu.Item>
    </Menu>
  );

  const renderAcademyMenu = () => (
    <Menu className="dropdown-menu" style={{ background: '#041e3b', marginTop: '13px' }}>
      <Menu.Item key="1" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box hammer"><FaCopy /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Education Lessons</span>
      </Menu.Item>
      <Menu.Item key="2" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaBlog /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Blog</span>
      </Menu.Item>
      <Menu.Item key="3" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaCrown /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Loyalty Programme</span>
      </Menu.Item>
    </Menu>
  );



  const renderCompanyMenu = () => (
    <Menu className="dropdown-menu" style={{ background: '#041e3b', marginTop: '13px' }}>
      <Menu.Item key="1" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box hammer"><FaInfo /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>About Us</span>
      </Menu.Item>
      <Menu.Item key="2" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaNewspaper /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>News</span>
      </Menu.Item>
     
      <Menu.Item key="3" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaBagShopping /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Career</span>
      </Menu.Item>
      <Menu.Item key="4" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaShield /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Security</span>
      </Menu.Item>

      <Menu.Item key="5" style={{ fontWeight: 'bold', padding: '10px 20px' }}>
        <div className="icon-box user"><FaQuestion /></div>
        <span style={{ color: 'rgb(8, 220, 79)', opacity: 0.8 }}>Help & Support</span>
      </Menu.Item>
         </Menu>
  );

  // Define render functions for other dropdowns (easyStart, academy, company) similarly

  return (
    <Header style={{ background: '#041e3b', color: '#00FF00', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-around',height:80 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="" style={{ width: '50px', marginRight: '10px' }} />
        <Dropdown overlay={renderProductsMenu()} onVisibleChange={(flag) => handleDropdownVisibleChange('products', flag)}>
          <Button type="link" style={{ color: 'rgb(8, 220, 79)', fontWeight: 'bold', borderBottom: showDropdowns.products ? '2px solid blue' : 'none',opacity:0.8 }}>Products</Button>
        </Dropdown>
        <Dropdown overlay={renderEarnMenu()} onVisibleChange={(flag) => handleDropdownVisibleChange('earn', flag)}>
          <Button type="link" style={{ color: 'rgb(8, 220, 79)', fontWeight: 'bold', borderBottom: showDropdowns.earn ? '2px solid blue' : 'none',opacity:0.8 }}>Earn</Button>
        </Dropdown>
        <Dropdown overlay={renderEasyStartMenu()} onVisibleChange={(flag) => handleDropdownVisibleChange('easyStart', flag)}>
          <Button type="link" style={{ color: 'rgb(8, 220, 79)', fontWeight: 'bold', borderBottom: showDropdowns.easyStart ? '2px solid blue' : 'none',opacity:0.8 }}>Easy Start</Button>
        </Dropdown>

        <Dropdown overlay={renderAcademyMenu()} onVisibleChange={(flag) => handleDropdownVisibleChange('academy', flag)}>
          <Button type="link" style={{ color: 'rgb(8, 220, 79)', fontWeight: 'bold', borderBottom: showDropdowns.academy ? '2px solid blue' : 'none',opacity:0.8 }}>Academy</Button>
        </Dropdown>

        <Dropdown overlay={renderCompanyMenu()} onVisibleChange={(flag) => handleDropdownVisibleChange('company', flag)}>
          <Button type="link" style={{ color: 'rgb(8, 220, 79)', fontWeight: 'bold', borderBottom: showDropdowns.company ? '2px solid blue' : 'none',opacity:0.8 }}>Company </Button>
        </Dropdown>

        {/* Render other dropdown buttons similarly */}
        <Button 
        onClick={handleSignIn}
        shape="round" 
        type="outline" 
        style={{ color: 'rgb(8, 220, 79)', borderColor: 'rgb(8, 220, 79)', fontWeight: 'bold',opacity:0.8 }}
        >Sign In</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button 
        onClick={handleGetStartedButton}
        shape="round" style={{ color: 'black', background: 'rgb(8, 220, 79)', outline: 'none', border: 'none', fontWeight: 'bold', marginRight: '20px', transition: 'transform 0.3s',}}>Get Started</Button>
      </div>

      

      {openSignUpModel && (
         <SignUpForm   visible={openSignUpModel} onCancel={handleCancelSignUp}
         /> 
      )}

      {openSignInModel && (
        <SignInCard visible={openSignInModel} onCancel={handleCancelSignIn}/>
      )}
  

    </Header>
  );
};

export default HeaderMenu;
