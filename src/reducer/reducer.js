import { CHANGE_STYLE } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_STYLE:
      return action.payload;

    default:
      return state;
  }
};
