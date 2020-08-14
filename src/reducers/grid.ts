import { MOVE_PACMAN } from '../actions/grid'
import { BOARDS } from '../constants/grid'
import { hasCollided, getNextPosition, isWall } from '../util/grid'

const initialState = {
  pacman: BOARDS.DEFAULT.PACMAN,
  ghosts: {
    blinky: BOARDS.DEFAULT.GHOSTS.BLINKY,
    inky: BOARDS.DEFAULT.GHOSTS.INKY,
    pinky: BOARDS.DEFAULT.GHOSTS.PINKY,
    clyde: BOARDS.DEFAULT.GHOSTS.CLYDE,
  },
  grid: BOARDS.DEFAULT.GRID,
}

export interface GridReducerInterface {
  pacman: number[]
  ghosts: {
    blinky: number[]
    inky: number[]
    pinky: number[]
    clyde: number[]
  }
  grid: number[][]
}

export interface GridReducerActionInterface {
  type?: string
  payload?: {
    direction?: string
  }
}

const userInputReducer: (state: GridReducerInterface, action?: GridReducerActionInterface) => GridReducerInterface = (
  state = initialState,
  { type, payload: { direction = 'right' } = {} } = {},
) => {
  const { pacman, grid } = state
  switch (type) {
    case MOVE_PACMAN:
      const newPosition = getNextPosition(pacman, direction)
      if (isWall(newPosition, grid)) {
        // block movement
        return state
      }
      Object.entries(state.ghosts).forEach(ghost => {
        const [name, position] = ghost
        if (hasCollided(newPosition, position)) {
          // Pacman ate a ghost, reset it
        }
      })
      return {
        ...state,
        pacman: newPosition,
      }
    default:
      return state
  }
}

export default userInputReducer
