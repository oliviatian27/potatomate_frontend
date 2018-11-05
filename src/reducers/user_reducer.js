export default function user(state={friendsList:[]},action){
  switch (action.type) {
    case "UPDATE_FRIENDS":
      return {...state,friendsList:action.payload}
    case 'USER_SIGN_UP':
      return {...state,currentUser:action.payload}
    default:
      return state
  }
}
