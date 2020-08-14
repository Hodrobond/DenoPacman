import { SET_USER_DIRECTION } from '../actions/userInput'

const initialState = {
  direction: 'right',
}

export interface UserInputStateInterface {
  direction: string
}

export interface UserInputActionsInterface {
  type?: string
  payload?: {
    direction?: string
  }
}

const userInputReducer: (
  state: UserInputStateInterface,
  action?: UserInputActionsInterface,
) => UserInputStateInterface = (state = initialState, { type, payload: { direction = 'right' } = {} } = {}) => {
  switch (type) {
    case SET_USER_DIRECTION:
      return {
        ...state,
        direction,
      }
    default:
      return state
  }
}

export default userInputReducer
