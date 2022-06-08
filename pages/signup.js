import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Form, Button, Spinner } from 'react-bootstrap';

const log = console.log;

const Signup = () => {
  // local state
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [memberTerms, setMemberTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  // validation
  const userIdInput = {
    regex: /^[a-zA-Z0-9]{5,}$/, // /[a-zA-Z]+[a-zA-Z0-9]{4,}$/; // 5자리 이상의 영문자로 시작하는 문자열 (영문자, 숫자만 가능)
    errorMessage: '5자리 이상의 영문자 또는 숫자를 포함한 문자열',
  };
  const userNameInput = {
    regex: /^.{1,}$/, // 최소 1자리 이상의 문자열
    errorMessage: '비어있을 수 없습니다',
  };
  const userPasswordInput = {
    regex: /^.{6,}$/, // 최소 6자리 이상의 문자열
    errorMessage: '6자리 이상의 문자열',
  };
  const userPasswordCheckInput = {
    regex: /^.{1,}$/, // 최소 1자리 이상의 문자열
    errorMessage: '',
  };

  // validation state
  const [userIdError, setUserIdError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [userPasswordError, setUserPasswordError] = useState(false);
  const [userPasswordCheckError, setUserPasswordCheckError] = useState(false);
  const [memberTermsError, setMemberTermsError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);

  // event
  // TODO useCallback 사용하기
  const onSubmit = (e) => {
    setLoading(true);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();

      return setRequiredError(true);
    }

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
        <h1 className="my-3">회원가입</h1>

        <Form noValidate onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUserId">
            <Form.Label>
              아이디 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디를 입력하세요"
              className={userIdError ? 'is-invalid' : ''}
              value={userId}
              onChange={onChangeUserId}
              required
            />
            <Form.Text className={userIdError ? 'text-danger' : 'text-muted'}>{userIdInput.errorMessage}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>
              이름 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="이름을 입력하세요"
              className={userNameError ? 'is-invalid' : ''}
              value={userName}
              onChange={onChangeUserName}
              required
            />
            <Form.Text className={userNameError ? 'text-danger' : 'text-muted'}>{userNameInput.errorMessage}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserPassword">
            <Form.Label>
              비밀번호 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력하세요"
              className={userPasswordError ? 'is-invalid' : ''}
              value={userPassword}
              onChange={onChangeUserPassword}
              required
            />
            <Form.Text className={userPasswordError ? 'text-danger' : 'text-muted'}>{userPasswordInput.errorMessage}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserPasswordCheck">
            <Form.Label>
              비밀번호확인 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 한번 더 입력하세요"
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

          <div className="d-grid">
            <Button type="submit" variant="primary">
              {loading && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />}
              회원가입
            </Button>
            <Form.Group>{requiredError && <Form.Text className="text-danger">필수 항목을 모두 입력해주세요</Form.Text>}</Form.Group>
          </div>
        </Form>
      </Container>
      <div className="text-center mt-3">
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </div>
    </>
  );
};

export default Signup;
