// -*- typescript -*-
import * as React from 'react'
import { connect } from 'react-redux'
import Canada from './Canada'

const getScore = () => {
  // document.querySelectorAll('.right').length gives 1 less than it should
  const wrong = document.querySelectorAll('.wrong').length
  const total = document.querySelectorAll('.clickable').length
  const right = total - wrong
  return right + '/' + total
}

const QuizDisplay = (state: any) => {
  const { targetProvince, finished } = state
  return (
    <div>
      <h1>{ finished
            ? 'You got ' + getScore() + ' correct'
            : 'Click on ' + targetProvince.displayName }</h1>
      <svg viewBox="0 0 1285 1245" height={ 300 } width={ 300 }
           style={{ background: 'lightblue' }}>
        <Canada xOffset={ 0 } yOffset={ 0 } provinceStates={ [] } />
      </svg>
    </div>
  )
}

const mapStateToProps = ({ provinceQuiz }) => ({
  targetProvince: provinceQuiz.currentQuestion,
  finished:       provinceQuiz.finished
})

export default connect(mapStateToProps)(QuizDisplay)
