export const CHANGE_STYLE = "CHANGE_STYLE";

export const changeStyle = (payload) => {
  return {
    type: CHANGE_STYLE,
    payload,
  };
};
