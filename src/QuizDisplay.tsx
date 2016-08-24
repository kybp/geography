// -*- typescript -*-
import * as React from 'react'
import { connect } from 'react-redux'
import Canada from './maps/na/ca'

const getScore = () => {
  // document.querySelectorAll('.right') gives 1 less than it should
  const wrong = document.querySelectorAll('.wrong').length
  const total = document.querySelectorAll('.province').length
  const right = total - wrong
  return right + '/' + total
}

const QuizDisplay = ({ targetProvince }) => (
  <div>
    <h1>{ targetProvince
          ? 'Click on ' + targetProvince.displayName
          : 'You got ' + getScore() + ' correct' }</h1>
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
