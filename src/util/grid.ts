import { STATES } from '../constants/grid';

export const getNextPosition = (position: number[], direction: string) => {
  let newPosition
  switch(direction) {
    case STATES.UP:
      // eventually generalize with a board looping function
      newPosition = [position[0] - 1, position[1]];
      break;
    case STATES.LEFT:
      newPosition = [position[0], position[1] - 1];
      break;
    case STATES.DOWN:
      newPosition = [position[0] + 1, position[1]];
      break;
    case STATES.RIGHT:
      newPosition = [position[0], position[1] + 1];
      break;
    default:
      newPosition = position;
  }
  return newPosition
}

export const isWall = (position: number[], grid: number[][]) => {
  // eventually move this into board looping logic
  if (position[0] < 0
    || position[1] < 0
    || position[0] > (grid.length - 1)
    || position[1] > (grid[0].length - 1)) {
    return true;
  }
  return false;
};

export const hasCollided = (aPos: number[], bPos: number[]) => {
  if (aPos && bPos) {
    return false;
  }
  return false;
};
