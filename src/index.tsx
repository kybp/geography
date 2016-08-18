// -*- typescript -*-
import * as React from 'react'
import { render } from 'react-dom'
import Canada from './maps/na/ca'

render(
  <svg viewBox="0 0 1285 1245" height={ 300 } width={ 300 } 
       style={{ background: 'lightblue' }}><Canada /></svg>,
  document.getElementById('app')
)
