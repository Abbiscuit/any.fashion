import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Auth = ({ currentUser }) => {
  const isUserExist = currentUser;

  return (
    <div>
      <Header isUserExist={isUserExist} />
      <Container>
        <Form>
          {isUserExist ? null : <Input type="text" placeholder="お名前" />}
          <Input type="email" placeholder="メールアドレス" />
          <Input type="password" placeholder="パスワード" />
          <Button>{isUserExist ? 'ログイン' : '次へ'}</Button>
        </Form>
        {isUserExist ? null : (
          <Text>
            <LinkText to="/terms">利用規約、プライバシーポリシー</LinkText>
            に同意
          </Text>
        )}
      </Container>
    </div>
  );
};

export default Auth;

const Container = styled.div`
  padding: 88px 20px 0;
`;

const Form = styled.form`
  margin-bottom: 32px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  color: #333333;
  background-color: #f2f2f2;
  padding: 16px;
  font-size: 16px;
  border: none;
`;

const Button = styled.button`
  width: 100%;
  background-color: #eb5757;
  border: none;
  font-size: 16px;
  color: #ffffff;
  height: 48px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

const LinkText = styled(Link)`
  text-decoration: underline;
`;
