import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Form, Button } from 'react-bootstrap';

const log = console.log;

const Signup = () => {
  // local state
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [memberTerms, setMemberTerms] = useState(false);

  // form
  const userIdInput = {
    label: '아이디',
    placeholder: '아이디를 입력하세요',
    regex: /^[a-zA-Z0-9]{5,}$/, // /[a-zA-Z]+[a-zA-Z0-9]{4,}$/; // 5자리 이상의 영문자로 시작하는 문자열 (영문자, 숫자만 가능)
    errorMessage: '5자리 이상의 영문자 또는 숫자를 포함한 문자열',
  };
  const userNameInput = {
    label: '이름',
    placeholder: '이름을 입력하세요',
    regex: /^.{1,}$/, // 최소 1자리 이상의 문자열
    errorMessage: '비어있을 수 없습니다',
  };
  const userPasswordInput = {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    regex: /^.{6,}$/, // 최소 6자리 이상의 문자열
    errorMessage: '6자리 이상의 문자열',
  };
  const userPasswordCheckInput = {
    label: '비밀번호확인',
    placeholder: '비밀번호를 한번 더 입력하세요',
    regex: /^.{1,}$/, // 최소 1자리 이상의 문자열
    errorMessage: '',
  };

  // validation
  const [userIdError, setUserIdError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [userPasswordError, setUserPasswordError] = useState(false);
  const [userPasswordCheckError, setUserPasswordCheckError] = useState(false);
  const [memberTermsError, setMemberTermsError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    log('onSubmit: ', {
      userId,
      userName,
      userPassword,
      userPasswordCheck,
      memberTerms,
    });
  };

  const onChangeUserId = (e) => {
    setUserIdError(!userIdInput.regex.test(e.target.value));
    setUserId(e.target.value);
  };

  const onChangeUserName = (e) => {
    setUserNameError(!userNameInput.regex.test(e.target.value));
    setUserName(e.target.value);
  };

  const onChangeUserPassword = (e) => {
    setUserPasswordError(!userPasswordInput.regex.test(e.target.value));
    setUserPassword(e.target.value);
  };

  const onChangeUserPasswordCheck = (e) => {
    setUserPasswordCheckError(!userPasswordCheckInput.regex.test(e.target.value));
    setUserPasswordCheckError(e.target.value !== userPassword);
    setUserPasswordCheck(e.target.value);
  };

  const onChangeMemberTerms = (e) => {
    setMemberTermsError(!e.target.checked);
    setMemberTerms(e.target.checked);
  };

  return (
    <>
      <Container>
        <h1>SIGN UP</h1>

        <Form noValidate onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUserId">
            <Form.Label>
              {userIdInput.label} <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={userIdInput.placeholder}
              className={userIdError ? 'is-invalid' : ''}
              value={userId}
              onChange={onChangeUserId}
              required
            />
            <Form.Text className={userIdError ? 'text-danger' : 'text-muted'}>{userIdInput.errorMessage}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>
              {userNameInput.label} <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={userNameInput.placeholder}
              className={userNameError ? 'is-invalid' : ''}
              value={userName}
              onChange={onChangeUserName}
              required
            />
            <Form.Text className={userNameError ? 'text-danger' : 'text-muted'}>{userNameInput.errorMessage}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserPassword">
            <Form.Label>
              {userPasswordInput.label} <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder={userPasswordInput.placeholder}
              className={userPasswordError ? 'is-invalid' : ''}
              value={userPassword}
              onChange={onChangeUserPassword}
              required
            />
            <Form.Text className={userPasswordError ? 'text-danger' : 'text-muted'}>{userPasswordInput.errorMessage}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserPasswordCheck">
            <Form.Label>
              {userPasswordCheckInput.label} <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder={userPasswordCheckInput.placeholder}
              className={userPasswordCheckError ? 'is-invalid' : ''}
              value={userPasswordCheck}
              onChange={onChangeUserPasswordCheck}
              required
            />
            {userPasswordCheckError && <Form.Text className="text-danger">비밀번호가 일치하지 않습니다</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="똑바로 입력할 것을 동의합니다"
              className={memberTermsError ? 'is-invalid' : ''}
              value={memberTerms}
              onChange={onChangeMemberTerms}
              required
            />
            {memberTermsError && <Form.Text className="text-danger">똑바로 입력할 것을 동의하셔야 합니다</Form.Text>}
          </Form.Group>

          <Button variant="primary" type="submit">
            회원가입
          </Button>
        </Form>

        <Link href="/">
          <a>홈으로</a>
        </Link>
      </Container>
    </>
  );
};

export default Signup;
