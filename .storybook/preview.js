import * as React from 'react';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';

import configureStore from '../src/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
addDecorator(storyFn => (
  <Provider store={store}>
    {storyFn()}
  </Provider>
));
