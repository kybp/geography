// -*- typescript -*-
import * as React from 'react'
import { render } from 'react-dom'
import NorthAmerica from './maps/na'

const SVG_HEIGHT = 1245
const SVG_WIDTH  = 1285

render(
  <svg height={ SVG_HEIGHT } width={ SVG_WIDTH } style={{
    background: 'lightblue'
  }}><NorthAmerica /></svg>,
  document.getElementById('app')
)
