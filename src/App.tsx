import React from 'react'
import Pacman from './components/characters/Pacman/src/components/pacman'
import configureStore from './configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <p>Deno + React = ❤️</p>
      <Pacman />
    </Provider>
  )
}
