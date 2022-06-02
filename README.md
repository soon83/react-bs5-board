# react-bs5-board

## Project setup

### node version 선택
```
nvm use 16.15.0
```

### 프로젝트 폴더 생성
```
mkdir react-bs-board
```

### package.json 생성
```
npm init
```

### react, next 설치
```
npm i react react-dom next
```

### webpack, nodemon, eslint 등 개발편의도구 설치
```
npm i --save-dev nodemon webpack eslint
```
- webpack: 번들링 도구
- nodemon: 코드 수정 시 자동 재시작
- eslint: 코드스타일 유지 도구

### eslint plugins 설치
```
npm i -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import
```

### eslint 설정파일 생성
- ${PROJ}/.eslintrc 파일 생성
- .eslintrc 에 아래의 내용 작성
```
{
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "node": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "import",
        "react-hooks"
    ]
}
```

### package.json 의 scripts 를 수정
- 아래의 내용으로 변경
```
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
},
```

### ${PROJ}/pages/index.js 파일 생성
- 아래의 내용 작성
```
import React from "react";

const Index = () => {
    return (
        <div>안녕하세요</div>
    );
};

export default Index;
```

### 프로젝트 실행
```
npm run dev
```