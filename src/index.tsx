// -*- web -*-
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import QuizDisplay from './QuizDisplay'

render(
  <Provider store={ createStore(reducer) }>
    <QuizDisplay targetProvince="" />
  </Provider>,
  document.getElementById('app')
)
