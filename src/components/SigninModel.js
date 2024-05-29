import React, { useState } from 'react';
import { Modal, Card, Tabs } from 'antd';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateAccountCard from './SignUp';

const { TabPane } = Tabs;

const SignInModal = ({ onCancel }) => {
  const [activeTab, setActiveTab] = useState('signin');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const onFinishSignIn = (values) => {
    console.log('Sign In Values:', values);
    // Logic for signing in
  };

  const onFinishSignUp = (values) => {
    console.log('Sign Up Values:', values);
    // Logic for signing up
  };

  return (
    <Modal
      visible={true} // Set to true when modal should be visible
      onCancel={onCancel}
      style={{ background: '#041e3b',}}
    >
      <Card style={{ background: '#041e3b',padding:30 }}>
        <Tabs activeKey={activeTab} onChange={handleTabChange} centered>
          <TabPane tab="Sign In" key="signin">
            <SignIn onFinish={onFinishSignIn} />
          </TabPane>
          <TabPane tab="Sign Up" key="signup">
            <CreateAccountCard onFinish={onFinishSignUp} />
          </TabPane>
        </Tabs>
      </Card>
    </Modal>
  );
};

export default SignInModal;
