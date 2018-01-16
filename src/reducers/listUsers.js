import Utils from '../Utils';

const initialState = require('.././data/users.json');

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
      return state;
    }

    default : return state;
  }
}
