import React, { FunctionComponent, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KeypressRotationWrapper from '../../../../wrappers/KeypressRotationWrapper/src';
import RotationWrapper from '../../../../wrappers/RotationWrapper/src';
import Pacman from './pacman';
import { movePacman } from '../../../../../actions/grid';
import { hasCollided, getNextPosition, isWall } from '../../../../../util/grid';
import { ReducerStateInterface } from '../../../../../reducers';

export interface PacmanProps {
  direction: string
  position: number[]
  grid: number[][]
}

const mapStateToProps: (state: ReducerStateInterface) => PacmanProps = ({
  gridReducer: {
    pacman: position = [0,0],
    grid = [[]],
  } = {},
  userInputReducer: {
    direction = 'right',
  } = {},
}) => ({
  direction,
  position,
  grid,
});

const chomp = keyframes`
  from {
    stroke-dasharray: 157,100;
    stroke-dashoffset: 0;
  }
  to {
    stroke-dasharray: 126,100;
    stroke-dashoffset: -15;
  }
`;

// fill: ${(props: PacmanProps) => (props.fill ? props.fill : 'var(--primary-color)')};
const PacmanStyle = styled.svg<PacmanProps>`
  stroke: yellow;
  stroke-width: 50%;
  fill: none;
  animation: ${chomp} 0.15s linear infinite alternate;
`;

const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export interface PositionGridInterface {
  position: number[]
  grid: number[][]
}

const getTranslatePercent = ({ position, grid }: PositionGridInterface) => {
  const [y, x] = position || [];
  const stepSizeY = grid.length - 1;
  const stepSizeX = grid[0].length - 1;
  const xTranslate = 100 * stepSizeX * (x);
  const yTranslate = 100 * stepSizeY * (y)
  return {
    xTranslate,
    yTranslate,
  }
}

const getTranslate = ({ position, grid }: PositionGridInterface) => {
  const { xTranslate, yTranslate } = getTranslatePercent({ position, grid });
  return `translate(${xTranslate}%, ${yTranslate}%)`;
  // return `translate(${xTranslate}%, ${yTranslate}%)`;
}

interface SlideInterface extends PositionGridInterface {
  direction: string
}

const getSlide = ({ position, grid, direction }: SlideInterface) => {
  if (isWall(getNextPosition(position, direction), grid)) {
    return 'none';
  }
  const {
    xTranslate: startX,
    yTranslate: startY,
  } = getTranslatePercent({ position, grid });

  const plusOne = getTranslatePercent({
    position: [position[0] + 1, position[1] + 1],
    grid,
  });
  const minusOne = getTranslatePercent({
    position: [position[0] - 1, position[1] - 1],
    grid,
  });
  const endY = direction === 'left' || direction === 'right'
    ? startY
    : direction === 'up'
      ? minusOne.yTranslate
      : plusOne.yTranslate;
  const endX = direction === 'up' || direction === 'down'
    ? startX
    : direction === 'left'
      ? minusOne.xTranslate
      : plusOne.xTranslate;
  const slide = keyframes`
    from {
      transform: translate(${startX}%, ${startY}%);
    }
    to {
      transform: translate(${endX}%, ${endY}%);
    }
  `;
  return slide;
}

const PacmanWrapper = styled.div<PacmanProps>`
  width: ${(props: PacmanProps) => `${100 / props.grid.length}%` };
  height: ${(props: PacmanProps) => `${100 / props.grid[0].length}%` };
  transform: ${(props: PacmanProps) => getTranslate({
    position: props.position,
    grid: props.grid
  })};
  animation: ${(props: PacmanProps) => getSlide({
    position: props.position,
    grid: props.grid,
    direction: props.direction
  })} 1s linear infinite;
`;

interface PacmanGridComponentInterface extends PacmanProps {
  dispatch: React.Dispatch<any>;
}

const PacmanOnGrid: FunctionComponent<PacmanGridComponentInterface> = ({
  dispatch,
  direction,
  grid,
  position,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(movePacman(direction));
    }, 1000);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <KeypressRotationWrapper>
      <GridWrapper>
        <PacmanWrapper
          grid={grid}
          position={position}
          direction={direction}
        >
          <RotationWrapper>
            <Pacman />
          </RotationWrapper>
        </PacmanWrapper>
      </GridWrapper>
    </KeypressRotationWrapper>
  );
};

PacmanOnGrid.defaultProps = {
  grid: [[0,0],[0,0]]
}

PacmanOnGrid.propTypes = {
  direction: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired).isRequired).isRequired,
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default connect(mapStateToProps)(PacmanOnGrid);
