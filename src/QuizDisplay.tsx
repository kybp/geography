// -*- typescript -*-
import * as React from 'react'
import { connect } from 'react-redux'
import { loadQuiz } from './actions'
import Question from './Question'

export const NOT_STARTED = 'NOT_STARTED'
export const LOADING     = 'LOADING'
export const RUNNING     = 'RUNNING'
export const FINISHED    = 'FINISHED'

const getScore = () => {
  // document.querySelectorAll('.right').length gives 1 less than it should
  const wrong = document.querySelectorAll('.wrong').length
  const total = document.querySelectorAll('.clickable').length
  const right = total - wrong
  return right + '/' + total
}

interface Props {
  phase?:          String,
  targetProvince?: Question,
  dispatch?:       (action: any) => void,
}

class QuizDisplay extends React.Component<Props, {}> {
  render() {
    const { targetProvince, phase, dispatch } = this.props

    if (phase === NOT_STARTED) {
      return (
        <button onClick={ () => dispatch(loadQuiz()) }>
          Start Quiz
        </button>
      )
    }

    let message: string
    switch (phase) {
    case FINISHED:
      message = 'You got ' + getScore() + ' correct'
      break
    case LOADING:
      message = 'Loading'
      break
    case RUNNING:
      message = 'Click on ' + targetProvince.displayName
      break
    }

    return (
      <div>
        <h1>{ message }</h1>
        <svg viewBox="0 0 1285 1245" height={ 300 } width={ 300 }
             style={{ background: 'lightblue' }}>
          { this.props.children }
        </svg>
      </div>
    )
  }
}

const mapStateToProps = ({ provinceQuiz }) => ({
  targetProvince: provinceQuiz.currentQuestion,
  phase:          provinceQuiz.phase
})

export default connect(mapStateToProps)(QuizDisplay)
