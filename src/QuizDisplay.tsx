// -*- web -*-
import * as React from 'react'
import { connect } from 'react-redux'
import Canada from './maps/na/ca'

const QuizDisplay = ({ targetProvince }) => (
  <div>
    <h1>{ targetProvince
          ? 'Click on ' + targetProvince.displayName
          : 'The end' }</h1>
    <svg viewBox="0 0 1285 1245" height={ 300 } width={ 300 } 
         style={{ background: 'lightblue' }}>
      <Canada xOffset={ 0 } yOffset={ 0 } provinceStates={ [] } />
    </svg>
  </div>
)


const mapStateToProps = ({ provinceQuiz }) => ({
  targetProvince: provinceQuiz.answer
})

export default connect(mapStateToProps)(QuizDisplay)
