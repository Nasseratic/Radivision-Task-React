import { CHANGE_IMAGE } from "./types";

const INITIAL_STATE = {
  imageURL: "https://via.placeholder.com/300x300.png?text=Radivision Task"
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_IMAGE:
      return { ...state, imageURL: action.payload };
    default:
      return state;
  }
}
