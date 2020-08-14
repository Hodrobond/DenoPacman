export const MOVE_PACMAN = 'GRID/MOVE_PACMAN'

export interface MovePacmanAction {
  type: typeof MOVE_PACMAN
  payload: {
    direction: string
  }
}

export type GridActionTypes = MovePacmanAction // | OtherAction

export const movePacman: (direction: string) => MovePacmanAction = direction => ({
  type: MOVE_PACMAN,
  payload: { direction },
})
