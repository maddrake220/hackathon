import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const MyUser = {
  id: 1234,
  username: "maddrake",
  favorites: [],
  jobfavorites: [],
};
const initialState = {
  loading: false,
  error: null,
  user: MyUser,
  ok: false,
};

export const VALIDATION_CHECK = "VALIDATION_CHECK";
export const SET_USER_FAVORITE = "SET_USER_FAVORITE";
export const SET_USER_JOB_FAVORITE = "SET_USER_JOB_FAVORITE";
export const UNSET_USER_FAVORITE = "UNSET_USER_FAVORITE";
export const UNSET_USER_JOB_FAVORITE = "UNSET_USER_JOB_FAVORITE";

export const validationCheck = (payload) => {
  return {
    type: VALIDATION_CHECK,
    payload,
  };
};
export const setUserFavorite = (payload) => {
  return {
    type: SET_USER_FAVORITE,
    payload,
  };
};
export const setUserJobFavorite = (payload) => {
  return {
    type: SET_USER_JOB_FAVORITE,
    payload,
  };
};
export const unSetUserFavorite = (payload) => {
  return {
    type: UNSET_USER_FAVORITE,
    payload,
  };
};

export const unSetUserJobFavorite = (payload) => {
  return {
    type: UNSET_USER_JOB_FAVORITE,
    payload,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATION_CHECK: {
      return {
        ...state,
        ok: true,
      };
    }
    case SET_USER_FAVORITE: {
      const newFavorites = [...state.user.favorites, action.payload];
      return {
        ...state,
        user: {
          id: 1234,
          username: "maddrake",
          favorites: newFavorites,
        },
      };
    }
    case SET_USER_JOB_FAVORITE: {
      const newFavorites = [...state.user.jobfavorites, action.payload];
      return {
        ...state,
        user: {
          id: 1234,
          username: "maddrake",
          favorites: state.user.favorites,
          jobfavorites: newFavorites,
        },
      };
    }
    case UNSET_USER_FAVORITE: {
      const newFavirites = state.user.favorites.filter(
        (o) => o.id !== action.payload.id
      );
      return {
        ...state,
        user: {
          id: 1234,
          username: "maddrake",
          favorites: newFavirites,
          jobfavorites: state.user.favorites,
        },
      };
    }
    case UNSET_USER_JOB_FAVORITE: {
      const newFavirites = state.user.jobfavorites.filter(
        (o) => o.id !== action.payload.id
      );
      return {
        ...state,
        user: {
          id: 1234,
          username: "maddrake",
          jobfavorites: newFavirites,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, reducer);

export default enhancedReducer;
