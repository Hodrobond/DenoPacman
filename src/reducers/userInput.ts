import { SET_USER_DIRECTION } from '../actions/userInput';

const initialState = {
  direction: 'right',
}

export interface userInputStateInterface {
  direction: string
}

export interface userInputActionsInterface {
  type?: string
  payload?: {
    direction?: string
  }
}

const userInputReducer: (
  state: userInputStateInterface,
  action?: userInputActionsInterface
) => userInputStateInterface = (
  state = initialState,
  {
    type,
    payload: {
      direction = 'right',
    } = {},
 } = {}
) => {
    switch (type) {
      case SET_USER_DIRECTION:
        return {
            ...state,
            direction,
        }
      default:
        return state;
    }
};

export default userInputReducer;