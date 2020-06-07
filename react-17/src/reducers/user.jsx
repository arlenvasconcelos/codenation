import {TYPES_USER} from '../actions';

const initialValue = {
  email: "arlen.vasconcelos@gmail.com",
  errorMessage: "",
  name: "",
  status: "",
  thumb: "https://media-exp1.licdn.com/dms/image/C5603AQHoaVbHCT5cPw/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=NuswoHaFRwcCXlU2AGoJDsAlZGuskJ8FTb-OtacTrDk"
}

const user = (state = initialValue, action) => {
  switch (action.type) {
    case TYPES_USER.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
export default user;