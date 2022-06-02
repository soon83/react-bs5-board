import React from "react";
import Link from "next/link";

const Login = () => {
    return (
        <>
            <div>나는 로그인이다.</div>
            <Link href="/"><a>인덱스 페이지로</a></Link>
        </>
    );
};

export default Login;