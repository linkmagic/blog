const initialState = require('.././data/users.json');

function getId() {
  let dateNow = new Date();
  return (
    String(dateNow.getFullYear()) +
    String(((dateNow.getMonth() + 1) < 10 ? '0' : '') + (dateNow.getMonth() + 1)) +
    String(dateNow.getDate() < 10 ? '0' : '') + dateNow.getDate() +
    String(dateNow.getHours() < 10 ? '0' : '') + dateNow.getHours() +
    String(dateNow.getMinutes() < 10 ? '0' : '') + dateNow.getMinutes() +
    String(dateNow.getSeconds() < 10 ? '0' : '') + dateNow.getSeconds()
  );
}

function getDateNow() {
  let dateNow = new Date();
  return (
    String(dateNow.getFullYear()) + '.' +
    String(((dateNow.getMonth() + 1) < 10 ? '0' : '') + (dateNow.getMonth() + 1)) + '.' +
    String(dateNow.getDate() < 10 ? '0' : '') + dateNow.getDate()
  );
}

export default function listUsers(state = initialState, action) {

  switch(action.type) {

    case 'ADD_USER' : {
      return [
        ...state,
        {
          userid: getId(),
          login: action.userInfo.login,
          password: action.userInfo.password,
          name: 'noname',
          surname: 'nosurname',
          birthdate: '1900.01.01',
          regdate: getDateNow(),
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
