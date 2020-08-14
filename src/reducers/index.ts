import { combineReducers } from 'redux'
import gridReducer, { GridReducerInterface } from './grid'
import userInputReducer, { userInputStateInterface } from './userInput'

export interface ReducerStateInterface {
  gridReducer?: GridReducerInterface
  userInputReducer?: userInputStateInterface
}

export default combineReducers({
  gridReducer,
  userInputReducer,
})
