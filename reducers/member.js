const initState = {
  member: {},
  isLoggedIn: false,
};

const LOG_IN = 'LOG_IN'; // 로그인
const LOG_OUT = 'LOG_OUT'; // 로그아웃
const SIGN_UP = 'SIGN_UP'; // 회원가입

const loginAction = {
  type: LOG_IN,
  data: {
    loginId: 'chu',
    password: '123456',
  },
};
const logoutAction = {
  type: LOG_OUT,
};
const signupAction = {
  type: SIGN_UP,
  data: {
    loginId: 'chu',
    password: '123456',
    memberName: '사랑의하츄핑',
    memberEmail: '2601948@gmail.com',
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        member: action.data,
        isLoggedIn: true,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        member: action.data,
        isLoggedIn: false,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        member: action.data,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};
