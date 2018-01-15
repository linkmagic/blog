const initialState = {};

export default function loginUser(state = initialState, action) {

  switch (action.type) {

    case 'LOGIN_USER' : {
      return action.userInfo;
    }

    case 'LOGOUT_USER' : {
      return {};
    }

    default : return state;
  }

}