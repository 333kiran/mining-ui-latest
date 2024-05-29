import React from "react";
import '../styles/referral.css'
import { Typography, Collapse, Divider } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { FaLaptop, FaScreenpal } from "react-icons/fa6";

const { Panel } = Collapse;

const ReferAFriend = () => {
    const step1 = "https://stormgain.com/sites/default/files/2020-03/registration.svg";
    const step2 = "https://stormgain.com/sites/default/files/2020-03/refer-friend_0.svg";
    const step3 = "https://stormgain.com/sites/default/files/2020-03/charts.svg";
    return (
       <div className="container">
        <div className="first-section">
            <div className="top-heading">Invite friends and earn!</div>
           
          <div className="second-div">   
             <p className="text-1">You'll get:</p>
            <p style={{fontSize:'1.3rem',color:'white',}}>- 10% of funds withdrawn from <span style={{color:"rgb(7, 195, 70)"}}>Cryptominer </span>by your referrals</p>
            <p style={{color:'rgb(7, 195, 70)',fontWeight:'bold',fontSize:'1.4rem'}}>Your friend will get:</p>
            <p style={{fontSize:'1.3rem',color:'white',}}>- 0.00723 KSN for registering</p>
            </div>

<div className="main-content">
<div className="steps">
<img src={step1} alt="step-1 image "/>
<p className="count">1</p>
<p className="step-text">Register</p>
<p className="step-para">Register and get your personal referral link.</p>
    </div>

    <div className="steps">
<img src={step2} alt="step-1 image "/>
<p className="count">2</p>
<p className="step-text">Share the link</p>
<p className="step-para">Start earning as soon as your friends register and begin trading!</p>
    </div>

    <div className="steps">
<img src={step3} alt="step-1 image "/>
<p className="count">3</p>
<p className="step-text">Track your results</p>
<p className="step-para">All payments are listed in your personal account.</p>
    </div>
    

</div>


<div className="btn-box">
        <button className='mining-btn'>
       Invite Now
        </button>
      </div>
            
        </div>

        <div className="second-section">
            <h1 className="faqHeading">Rules of participation in the Refer a Friend programme</h1>
            <div className="faq-container">
   <Collapse
        accordion
        expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{color:'rgb(7, 195, 70)',fontSize:'1.5rem',marginTop:10}}/> : <PlusOutlined style={{color:'rgb(7, 195, 70)',fontSize:'1.5rem',marginTop:10}}/>}
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

        <Panel
          header={<Typography.Text strong className="faq-question">What is MUI and Ant Design (AntD)?</Typography.Text>}
          key="5"
          className="faq-panel"
        >
          <Typography.Text className="faq-answer">
            Both MUI and Ant Design (AntD) are popular UI component libraries for React. MUI, short for Material-UI, follows Google's Material Design guidelines, while AntD provides a set of high-quality React components based on the Ant Design language.
          </Typography.Text>
        </Panel>
       
      </Collapse>
           </div>
          <div className="additional-info">
            <p className="text2">Additional provisions:</p>
            <ol className="ul-text">
                <li><strong>Kissan Limited</strong> reserves the right to change the terms of the programme at any time.</li>
                <li><strong>Kissan Limited</strong> reserves the right to exclude any client's account from participation in the programme without explanation and to remove any reward already earned by such client.</li>
                <li>A single client may not create multiple accounts to participate in the programme. In cases where it is discovered that one client has created several accounts with the intent to participate in the programme, such client shall be immediately disqualified from the <strong>'Refer a Friend'</strong> programme and all rewards earned by such client automatically forfeit.</li>
                <li>Please bear in mind that registration via the Refer a Friend Programme is available through the web version only. Links sent from the mobile app will not connect your account with a referral. If you want to invite a new user, invite them to register via the web version using your link. Make sure to copy the entire link without any extra characters or spaces. Using an incorrect link may result in an invited user not counting as your referral.</li>
            </ol>
          </div>
        </div>

        <div className="third-section">
            <h1 className="heading">Generate your referral link</h1>
            <button className="btn">Join Now</button>
        </div>

       </div>
    )
}

export default ReferAFriend;