const initialState = {};

export default function loginUser(state = initialState, action) {

  switch (action.type) {

    case 'LOGIN_USER' : {
      return action.userInfo;
    }

    case 'LOGOUT_USER' : {
      return {};
    }

    case 'UPDATE_DATA_USER' : {
      const fields = Object.keys(action.userInfo);

      for (let i = 0; i < fields.length; i++) {
        if (fields[i] in state) {
          if (state[fields[i]] !== action.userInfo[fields[i]]) {
            state[fields[i]] = action.userInfo[fields[i]];
          }
        }
      }

      return state;
    }

    default : return state;
  }

}