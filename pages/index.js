import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

const Index = () => {
  return (
    <>
      <Container>
        <h1>안녕하세요 ㅋㅋㅋ</h1>
        <div>
          <Link href="/login">
            <a>로그인 페이지로</a>
          </Link>
        </div>
        <div>
          <Link href="/signup">
            <a>회원가입 페이지로</a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Index;
