import Utils from '../Utils';

import initialState from '.././data/users.json';

export default function listUsers(state = initialState, action) {

  switch(action.type) {

    case 'ADD_USER' : {
      return [
        ...state,
        {
          userid: Utils.getId(),
          login: action.userInfo.login,
          password: action.userInfo.password,
          name: 'noname',
          surname: 'nosurname',
          birthdate: '1900.01.01',
          regdate: Utils.getDateNow(),
          nickname: 'new user',
          email: action.userInfo.login,
          rating: '0',
          avatar: 'img/avatar-default.png',
        }
      ];
    }

    case 'REMOVE_USER' : {
      return state;
    }

    case 'EDIT_USER' : {
      let userData;

      for (let i = 0; i < state.length; i++) {
        if (state[i].userid === action.userInfo.userid) {
          userData = state[i];
          break;
        }
      }

      userData.name = action.userInfo.name;
      userData.surname = action.userInfo.surname;
      userData.birthdate = action.userInfo.birthdate;
      userData.nickname = action.userInfo.nickname;
      userData.email = action.userInfo.email;
      userData.avatar = action.userInfo.avatar;

      return state;
    }

    case 'CHANGE_PASSWORD' : {
      return state;
    }

    default : return state;
  }
}
