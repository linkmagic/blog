const initialState = require('.././data/users.json');

export default function listUsers(state = initialState, action) {

  switch(action.type) {

    case 'ADD' : {
      return state;
    }

    case 'REMOVE' : {
      return state;
    }

    default : return state;
  }
}
