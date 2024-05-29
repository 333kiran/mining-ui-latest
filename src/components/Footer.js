// import React from 'react';
// import { Layout, Row, Col, Divider } from 'antd';
// import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
// import logo from '../assets/images/sitelogo.png'

// const { Footer } = Layout;

// const MyFooter = () => {
//   return (
//     <Footer style={{ backgroundColor: '#001529', color: 'white', padding: '20px', height: 'auto' }}>
//       <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
//         <Row align="middle" justify="center" gutter={16}>
//           <Col style={{marginLeft:100}}>
//             <img src={logo} alt="Company Logo" style={{ height: '80px' }} />
//           </Col>
//           <Col>
//           </Col>
//           <Col flex="auto" justify="center" style={{marginRight:100}}/>
//           <Col>
//             <a href="https://facebook.com"><FacebookOutlined style={{ fontSize: '20px', marginRight: '10px' }} /></a>
//             <a href="https://twitter.com"><TwitterOutlined style={{ fontSize: '20px', marginRight: '10px' }} /></a>
//             <a href="https://linkedin.com"><LinkedinOutlined style={{ fontSize: '20px', marginRight: '10px' }} /></a>
//             <a href="https://instagram.com"><InstagramOutlined style={{ fontSize: '20px' }} /></a>
//           </Col>
//         </Row>
//         <Row gutter={[16, 16]} justify="center">
//           <Col span={4}>
//             <h3>Product</h3>
//             <p ><a href="/product">Product Page</a></p>
//             <p><a href="/pricing">Pricing</a></p>
//           </Col>
//           <Col span={4}>
//             <h3>Company</h3>
//             <p style={{color:'green'}}><a href="/about">About Us</a></p>
//             <p><a href="/careers">Careers</a></p>
//           </Col>
//           <Col span={4}>
//             <h3>Resources</h3>
//             <p><a href="/blog">Blog</a></p>
//             <p><a href="/faq">FAQs</a></p>
//           </Col>
//           <Col span={4}>
//             <h3>Learn</h3>
//             <p><a href="/docs">Documentation</a></p>
//             <p><a href="/tutorials">Tutorials</a></p>
//           </Col>
//           <Col span={4}>
//             <h3>Contact</h3>
//             <p><a href="/contact">Contact Us</a></p>
//             <p><a href="/support">Support</a></p>
//           </Col>
//         </Row>
//       </div>
//       <div style={{ textAlign: 'center', padding: '20px 0' }}>
//         <p>© 2024 Company Name. All rights reserved.</p>
//       </div>
//     </Footer>
//   );
// };

// export default MyFooter;


import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import logo from '../assets/images/sitelogo.png';

const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#001529', color: 'white', padding: '20px', height: 'auto' }}>
      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Row align="middle" justify="center" gutter={16}>
          <Col style={{marginLeft:100}}>
            <img src={logo} alt="Company Logo" style={{ height: '80px' }} />
          </Col>
          <Col>
          </Col>
          <Col flex="auto" justify="center" style={{marginRight:100}}/>
          <Col>
            <a href="https://facebook.com"><FacebookOutlined style={{ fontSize: '20px', marginRight: '10px' }} /></a>
            <a href="https://twitter.com"><TwitterOutlined style={{ fontSize: '20px', marginRight: '10px' }} /></a>
            <a href="https://linkedin.com"><LinkedinOutlined style={{ fontSize: '20px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com"><InstagramOutlined style={{ fontSize: '20px' }} /></a>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={4}>
            <h3>Product</h3>
            <p><a href="/product" style={{ color: 'rgb(8, 220, 79)' }}>Product Page</a></p>
            <p><a href="/pricing" style={{ color: 'rgb(8, 220, 79)' }}>Pricing</a></p>
          </Col>
          <Col span={4}>
            <h3>Company</h3>
            <p><a href="/about" style={{ color: 'rgb(8, 220, 79)' }}>About Us</a></p>
            <p><a href="/careers" style={{ color: 'rgb(8, 220, 79)' }}>Careers</a></p>
          </Col>
          <Col span={4}>
            <h3>Resources</h3>
            <p><a href="/blog" style={{ color: 'rgb(8, 220, 79)' }}>Blog</a></p>
            <p><a href="/faq" style={{ color: 'rgb(8, 220, 79)' }}>FAQs</a></p>
          </Col>
          <Col span={4}>
            <h3>Learn</h3>
            <p><a href="/docs" style={{ color: 'rgb(8, 220, 79)' }}>Documentation</a></p>
            <p><a href="/tutorials" style={{ color: 'rgb(8, 220, 79)' }}>Tutorials</a></p>
          </Col>
          <Col span={4}>
            <h3>Contact</h3>
            <p><a href="/contact" style={{ color: 'rgb(8, 220, 79)' }}>Contact Us</a></p>
            <p><a href="/support" style={{ color: 'rgb(8, 220, 79)' }}>Support</a></p>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <p style={{ color: 'black' }}>© 2024 Company Name. All rights reserved.</p>
      </div>
    </Footer>
  );
};

export default MyFooter;
