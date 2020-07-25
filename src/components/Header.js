import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = ({ isSearch, isUserExist }) => {
  return (
    <React.Fragment>
      <Container>
        <Icon>=</Icon>
        <Title to="/">Any.Fashion</Title>
        {!isUserExist ? (
          <Div>
            <LinkText to="/auth">ログイン</LinkText>
            <NotificationIcon>No</NotificationIcon>
          </Div>
        ) : null}
      </Container>
      {isSearch ? <Search /> : null}
    </React.Fragment>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 18px 24px;
  height: 80px;
  width: 100%;
  background-color: #333333;
  margin-bottom: 8px;
`;

const Title = styled(Link)`
  color: #f2f2f2;
  font-size: 24px;
  font-family: 'Titillium Web', sans-serif;
  flex: 1;
`;

// Temporary
const Icon = styled.span`
  color: #f2f2f2;
  margin-right: 16px;
`;

/************* */

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const LinkText = styled(Link)`
  display: inline-block;
  color: #f2f2f2;
  font-size: 14px;
  line-height: 1.5;
  margin-right: 16px;
`;

const NotificationIcon = styled.span`
  color: #f2f2f2;
  width: 24px;
  height: 24px;
`;
