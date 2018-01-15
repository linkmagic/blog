const initialState = {};

export default function loginUser(state = initialState, action) {

  switch (action.type ) {

    case 'LOGIN_USER' : {
      return action.action;
    }

    case 'LOGOUT_USER' : {
      return {};
    }

    default : return state;
  }

}