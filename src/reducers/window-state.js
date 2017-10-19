import { REHYDRATE } from "redux-persist/constants";
import { WINDOW_RESIZE } from "../actions/action-types";

const win = typeof window === "undefined" ? null : window;
const doc = typeof document === "undefined" ? null : document;
const getWidth = () => {
  if (!win && !doc) {
    return 0;
  }
  return (
    win.innerWidth ||
    (doc && doc.documentElement.clientWidth) ||
    (doc && doc.body.clientWidth)
  );
};
const getHeight = () => {
  if (!win && !doc) {
    return 0;
  }
  return (
    win.innerHeight ||
    (doc && doc.documentElement.clientHeight) ||
    (doc && doc.body.clientHeight)
  );
};

const initialState = {
  windowHeight: win || doc ? getHeight() : 0,
  windowWidth: win || doc ? getWidth() : 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        ...state,
        windowHeight: action.windowHeight,
        windowWidth: action.windowWidth
      };

    case REHYDRATE:
      if (action.payload.windowState) {
        return {
          ...initialState,
          ...action.payload.windowState
        };
      }
      return state;

    default:
      return state;
  }
};
