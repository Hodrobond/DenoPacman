import Grid from '../grid'
import { BOARDS } from '../../constants/grid'
import { movePacman } from '../../actions/grid'

const initialBoard = {
  pacman: BOARDS.DEFAULT.PACMAN,
  ghosts: {
    blinky: BOARDS.DEFAULT.GHOSTS.BLINKY,
    inky: BOARDS.DEFAULT.GHOSTS.INKY,
    pinky: BOARDS.DEFAULT.GHOSTS.PINKY,
    clyde: BOARDS.DEFAULT.GHOSTS.CLYDE,
  },
  grid: BOARDS.DEFAULT.GRID,
}

it('Can Initialize', () => {
  const initialized = Grid()
  expect(initialized.pacman).toEqual(BOARDS.DEFAULT.PACMAN)
})

it('Can move Pacman', () => {
  const initialized = Grid(initialBoard, movePacman('right'))
  expect(initialized.pacman).toEqual([0, 1])
})
