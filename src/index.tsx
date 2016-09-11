import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import QuizDisplay from './QuizDisplay'
import Canada from './Canada'
import './style.css'

render(
  <Provider store={ createStore(reducer) }>
    <QuizDisplay>
      <Canada xOffset={ 0 } yOffset={ 0 } />
    </QuizDisplay>
  </Provider>,
  document.getElementById('app')
)
