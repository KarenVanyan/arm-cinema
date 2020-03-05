import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import Logo from './../assets/logo.png';

const Header = () => {
  return <Row
      type='flex'
      justify='space-between'
      align='middle'
      style={{ backgroundColor: '#e5cb90', height: '80px', padding: '0 50px' }}>
    <Col>
      <Link to='/'>
        <img src={Logo} alt='Logo' style={{ width: '50px', height: '50px' }} />
      </Link>
    </Col>
    <Col>
      <Row>
        <Col style={{ padding: '0 10px'}}>
          <Link to='/sign-in'>
            <Button
            style={{
              borderRadius: '4px',
              border: '1px solid #cfb57a',
              backgroundColor: '#cfb57a',
              color: 'white',
              fontWeight: '600' }}>
                Sing In
            </Button>
          </Link>
        </Col>
        <Col style={{ padding: '0 10px' }}>
          <Link to='/sign-up'>
            <Button
              style={{
                borderRadius: '4px',
                border: '1px solid #cfb57a',
                backgroundColor: '#cfb57a',
                color: 'white',
                fontWeight: '600' }}>
              Sign Up
            </Button>
          </Link>
        </Col>
        </Row>
    </Col>
  </Row>
};

export default Header;
