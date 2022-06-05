import React, { useState } from 'react';
import Link from 'next/link';
import App from '../components/App';
import { Container, Form, Button } from 'react-bootstrap';

const Signup = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [userPasswordError, setUserPasswordError] = useState(false);
  const [memberTerms, setMemberTerms] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (userPassword !== userPasswordCheck) {
      return setUserPasswordError(true);
    }

    console.log('onSubmit: ', {
      userId,
      userName,
      userPassword,
      userPasswordCheck,
      memberTerms,
    });
  };

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const onChangeUserPasswordCheck = (e) => {
    setUserPasswordError(e.target.value !== userPassword);
    setUserPasswordCheck(e.target.value);
  };

  const onChangeMemberTerms = (e) => {
    setMemberTerms(e.target.checked);
  };

  return (
    <>
      <App>
        <Container>
          <h1>SIGN UP</h1>

          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label for="user-id">아이디</Form.Label>
              <Form.Control id="user-id" type="text" placeholder="아이디를 입력하세요." value={userId} required onChange={onChangeUserId} />
              <Form.Text className="text-muted">6자리 이상의 영문자와 숫자만 가능합니다.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label for="user-name">이름</Form.Label>
              <Form.Control id="user-name" type="text" placeholder="이름을 입력하세요." value={userName} required onChange={onChangeUserName} />
              <Form.Text className="text-muted">똑바로 쓰세요 까불지말고.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label for="user-password">비밀번호</Form.Label>
              <Form.Control
                id="user-password"
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={userPassword}
                required
                onChange={onChangeUserPassword}
              />
              <Form.Text className="text-muted">6자리 이상의 영문자, 숫자, 특수문자의 조합만 가능합니다.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label for="user-password-check">비밀번호 확인</Form.Label>
              <Form.Control
                id="user-password-check"
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={userPasswordCheck}
                required
                onChange={onChangeUserPasswordCheck}
              />
              {userPasswordError && <Form.Text className="text-danger">비밀번호를 똑바로 쓰세요 까불지말고.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="입력폼에 똑바로 입력할 것을 동의합니다." value={memberTerms} required onChange={onChangeMemberTerms} />
            </Form.Group>

            <Button variant="primary" type="submit">
              회원가입
            </Button>
          </Form>

          <Link href="/">
            <a>홈으로</a>
          </Link>
        </Container>
      </App>
    </>
  );
};

export default Signup;
