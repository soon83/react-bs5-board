import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signupAction, loginAction, logoutAction } from '../reducers/member';

const log = console.log;
const Login = () => {
  const dispatch = useDispatch();
  const { member, isLoggedIn } = useSelector((state) => state.member);

  // local state
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onSubmit = (e) => {
    dispatch(signupAction);
    dispatch(loginAction);
    //dispatch(logoutAction);

    e.preventDefault();
    e.stopPropagation();

    log('onSubmit: ', {
      userId,
      userPassword,
    });
  };

  // event
  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="my-3">로그인</h1>

        <Form noValidate onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUserId">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" placeholder="아이디를 입력하세요" value={userId} onChange={onChangeUserId} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="비밀번호를 입력하세요" value={userPassword} onChange={onChangeUserPassword} required />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" variant="primary">
              로그인
            </Button>
          </div>
        </Form>
      </Container>
      <div className="text-center mt-3">
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      <div className="text-center mt-3">{isLoggedIn ? `'${member.loginId}' 님이 로그인 함` : ''}</div>
    </>
  );
};

export default Login;
