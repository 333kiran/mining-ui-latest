import React from 'react';
import '../styles/HomePage.css'; // Import CSS file for styling
import { FaArrowAltCircleRight, FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Typography, Collapse, Divider } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';

const { Panel } = Collapse;

const HomePage = () => {
    const video = "https://media.istockphoto.com/id/1128952607/video/beautiful-spaceship-tunnel-with-opening-metal-gates-and-flight-out-through-it-to-white-light.mp4?s=mp4-640x640-is&k=20&c=7L1ZC60IyEhIDfhSqyIn9eSRp3b5-s66omR-Pve3cpw=";
  return (
    <div className="home-container">
      <div className="video-bg">
        {/* Video element with cover */}
        <video src={video} autoPlay loop muted />
        {/* Overlay with blue linear gradient */}
        <div className="overlay" />
        {/* Text content */}
        <div className="text-container">
            <p style={{fontSize:'3rem',fontWeight:'bold'}}>KSN Cloud Miner<br/> Mine your first crypto in 4 hours</p>
       
          <p className="sub-heading-grey">Earn free KSN daily by reaching certain trading volumes and increasing your mining speed.</p>
          <p className="bold-text">Mine up to 0.009 KSN a day.</p>
          <p className="sub-heading-grey">Use our free KSN cloud mining feature in our app to make more profit!</p>
          {/* Button */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button className="start-mining-button">
        Start Mining <FaArrowRight style={{ verticalAlign: 'middle' }} />
      </button>
    </div>
        </div>

        <div className="mining-details">
        <h2 style={{color:'skyblue',fontSize:'2rem',textAlign:'left',marginLeft:'5vmax'}}>KSN PRICE:<span style={{color:'white'}}>0.038978</span></h2>
        <Divider style={{ backgroundColor: 'white' }}/>
        <div className="details">
        <div className="detail-item">
        <p style={{color:"grey",fontSize:'0.7rem',padding:0,margin:0}}>Daily Income:</p>
        <p style={{color:"white",fontSize:'2rem',padding:0,margin:0}}>0.0012 KSN</p>
        <p style={{color:'white',opacity:0.8}}>=098BTC</p>
      </div>
      <div className="detail-item">
        <p style={{color:"grey",fontSize:'0.7rem',padding:0,margin:0}}>Weekly Income:</p>
        <p style={{color:"white",fontSize:'2rem',padding:0,margin:0}}>0.0084 KSN</p>
        <p style={{color:'white',opacity:0.8}}>=098BTC</p>
      </div>
      <div className="detail-item">
        <p style={{color:"grey",fontSize:'0.7rem',padding:0,margin:0}}>30-days Income:</p>
        <p style={{color:"white",fontSize:'2rem',padding:0,margin:0}}>0.036 KSN</p>
        <p style={{color:'white',opacity:0.8}}>=098BTC</p>
      </div>
        </div>
      </div>
      </div>
      {/* Mining working details box */}
<div className="mining-workflow">
  <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>How does KSN cloud mining work?</h1>
  <div className='workflow-count'>
    <div className="circle">1</div> 
    <p>-------------</p>
    <div className="circle">2</div> -------------
    <div className="circle">3</div> -------------
    <div className="circle">4</div>
  </div>
  <div className='workflow-content'>
   <div style={{textAlign:'center',width:'20%'}}> Sign up at kissanTOken.io to start mining KSN.</div>
    <div style={{textAlign:'center',width:'20%'}}>After you register, go to the dedicated ksn Miner page.</div>
    <div style={{textAlign:'center',width:'20%'}}> Hit the big blue 'start mining' button to get your mining start till 12 hours</div>
    <div style={{textAlign:'center',width:'30%'}}> Repeat the operation to get daily basis ksn </div>
  </div>
</div>

<div className='faq-section'>
   <div >  <p className='faq-heading'>FAQ</p></div>
   <div className="faq-container">
   <Collapse
        accordion
        expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{color:'rgb(8, 220, 79)',fontSize:'1.5rem',marginTop:10}}/> : <PlusOutlined style={{color:'rgb(8, 220, 79)',fontSize:'1.5rem',marginTop:10}}/>}
        bordered={false}
        style={{borderBottom:'1px solid white'}}
      >
        <Panel
          header={<Typography.Text strong className="faq-question">What is KSN TOKEN?</Typography.Text>}
          key="1"
          className="faq-panel"
        >
          <Typography.Text className="faq-answer">
            Both MUI and Ant Design (AntD) are popular UI component libraries for React. MUI, short for Material-UI, follows Google's Material Design guidelines, while AntD provides a set of high-quality React components based on the Ant Design language.
          </Typography.Text>
        </Panel>

        <Panel
          header={<Typography.Text strong className="faq-question">How to initiate Mining?</Typography.Text>}
          key="2"
          className="faq-panel"
        >
          <Typography.Text className="faq-answer">
            Both MUI and Ant Design (AntD) are popular UI component libraries for React. MUI, short for Material-UI, follows Google's Material Design guidelines, while AntD provides a set of high-quality React components based on the Ant Design language.
          </Typography.Text>
        </Panel>

        <Panel
          header={<Typography.Text strong className="faq-question">Is there need  any specific application to do mining?</Typography.Text>}
          key="3"
          className="faq-panel"
        >
          <Typography.Text className="faq-answer">
            Both MUI and Ant Design (AntD) are popular UI component libraries for React. MUI, short for Material-UI, follows Google's Material Design guidelines, while AntD provides a set of high-quality React components based on the Ant Design language.
          </Typography.Text>
        </Panel>

        <Panel
          header={<Typography.Text strong className="faq-question">How can i make referrals?</Typography.Text>}
          key="4"
          className="faq-panel"
        >
          <Typography.Text className="faq-answer">
            Both MUI and Ant Design (AntD) are popular UI component libraries for React. MUI, short for Material-UI, follows Google's Material Design guidelines, while AntD provides a set of high-quality React components based on the Ant Design language.
          </Typography.Text>
        </Panel>

        {/* <Panel
          header={<Typography.Text strong className="faq-question">What is MUI and Ant Design (AntD)?</Typography.Text>}
          key="5"
          className="faq-panel"
        >
          <Typography.Text className="faq-answer">
            Both MUI and Ant Design (AntD) are popular UI component libraries for React. MUI, short for Material-UI, follows Google's Material Design guidelines, while AntD provides a set of high-quality React components based on the Ant Design language.
          </Typography.Text>
        </Panel> */}
       
      </Collapse>
   </div>
    
     </div>

     <div className='mining-box'>
      <div className='text-box'>
        <p className='text1'>KSN mining Rewards</p>
        <p className='text2'>Here’s one example: you can earn up to 6,000 KSN every day By making direct referrals and then get team minings percentage accordingly</p>
      </div>
      <div className='buttob-box'>
        <button className='mining-btn'>
        Start mining
        </button>
      </div>
     </div>

    </div>
  );
};

export default HomePage;
