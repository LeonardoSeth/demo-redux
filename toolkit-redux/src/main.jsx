import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { TodoApp } from './TodoApp'
// import { PokemonApp } from './PokemonApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
      {/* <PokemonApp /> */}
    </Provider>

  </React.StrictMode>,
)
