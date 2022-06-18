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

### vscode prettier 설치 및 설정

- vscode extentsions 에서 Prettier - Code formatter 찾아서 설치
- Preferences > Settings > 검색창에 formatter 검색 > Default Formatter 를 Prettier - Code formatter 로 설정 > Format On Save 체크
- Preferences > Settings > 검색창에 @ext:esbenp.prettier-vscode 검색 > Print Width 160 > Single Quote 체크

## css 못하니까 css framework 적용

### bootstrap 설치

참고 [10 Best React UI Library](https://usecode.pw/10-best-react-ui-library/).

```
npm i react-bootstrap bootstrap
```

### prop-types 설치

참고 [PropTypes와 함께 하는 타입 검사](https://ko.reactjs.org/docs/typechecking-with-proptypes.html).

- 컴포넌트의 props에 타입 검사를 하려면 다음과 같이 특별한 프로퍼티인 propTypes를 선언할 수 있음
- 코드안정성 up

```
npm i prop-types
```

### redux (상태관리 라이브러리) 설치

- redux 는 왜쓰지? 유지보수랑 디버깅하기 편함
- Action (어떤 이벤트를 정의) -> Dispatch (Action 을 실행) -> Reducer (state 를 변경)
- ex) Action (로그인) -> Dispatch (로그인 실행) -> Reducer (서버의 응답을 받아 로그인 사용자 객체의 state 를 변경)

```
npm i redux react-redux
```

### react redux 연결

- 이거 연결 왜 안되냐 개어렵네...

```
npm i redux react-redux next-redux-wrapper
```

### redux-devtools 설치 및 사용

```
npm i redux-devtools-extension
```

```
# _app.js

export default createWrapper((initState, options) => {
  log({
    initState,
    options,
  });
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares));
  const store = legacy_createStore(reducer, initState, enhancer);
  return store;
})(App);
```

- enhancer 부분을 작성해서 코드에 넣어줘야 동작함 (이거 안넣어서 삽질함)
- chrome > Apps > Web Store > 검색어 redux 로 검색 > "Redux DevTools" 설치
- 모든 Action 의 흐름이 다 보여서 개좋음
