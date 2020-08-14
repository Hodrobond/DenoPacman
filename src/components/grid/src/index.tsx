import React, { FunctionComponent, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReducerStateInterface } from '../../../reducers';

export interface GridProps {
  grid: number[][]
}

const mapStateToProps: (input: ReducerStateInterface) => GridProps = ({
  gridReducer: {
    grid = [[]],
  } = {},
}) => ({
  grid,
});

const PlaceholderBox = styled.div`
  width: 100px;
  height: 100px;
  background: blue;
`;

const Column = styled.div`
  width: 500px;
`;

const Row = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const getComponent = (elem: number) => {
  // if (elem === 'Pacman') return <PacmanWrapper><Pacman/></PacmanWrapper>
  if (elem) {
    return <PlaceholderBox>placeholder</PlaceholderBox>
  }
  return <PlaceholderBox>placeholder</PlaceholderBox>
}

export interface GridComponentProps extends GridProps {
  dispatch: React.Dispatch<any>;
}

const Grid: FunctionComponent<GridComponentProps> = ({
  dispatch,
  grid,
}) => (
  <div>
    {grid.map(elem => (
      <Column>
        {elem.map(nestedElem => (
          <Row>
            {getComponent(nestedElem)}
          </Row>
        ))}
      </Column>
    )
    )}
  </div>
);

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired).isRequired).isRequired,
};

export default connect(mapStateToProps)(Grid);
