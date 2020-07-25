import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../firebase/init';

const Auth = ({ currentUser }) => {
  const isUserExist = currentUser;

  const [credentials, setCredentials] = React.useState({
    displayName: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const signup = async e => {
    e.preventDefault();

    const { displayName, email, password } = credentials;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setCredentials({
        displayName: '',
        email: '',
        password: '',
      });

      console.log('Signup');
    } catch (err) {
      console.error(err);
    }
  };

  const login = async e => {
    e.preventDefault();

    const { email, password } = credentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setCredentials({
        email: '',
        password: '',
      });

      console.log('Login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header isUserExist={isUserExist} />
      <Container>
        <Form onSubmit={!isUserExist ? signup : login}>
          {isUserExist ? null : (
            <Input
              type="text"
              name="displayName"
              placeholder="お名前"
              value={credentials.displayName}
              onChange={handleChange}
              required
            />
          )}
          <Input
            type="email"
            name="email"
            placeholder="メールアドレス"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="パスワード"
            value={credentials.password}
            onChange={handleChange}
            required
          />
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
  border-radius: 8px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

const LinkText = styled(Link)`
  text-decoration: underline;
`;
