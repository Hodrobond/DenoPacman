export const SET_USER_DIRECTION = 'USER_INPUT/SET_USER_DIRECTION'

export interface SetUserDirectionInterface {
  type: typeof SET_USER_DIRECTION
  payload: {
    direction: string
  }
}

export type UserInterfaceTypes = SetUserDirectionInterface // | OtherAction

export const setUserDirection: (direction: string) => SetUserDirectionInterface = direction => ({
  type: SET_USER_DIRECTION,
  payload: { direction },
})
