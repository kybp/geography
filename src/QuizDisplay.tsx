import * as React from 'react'
import { connect } from 'react-redux'
import { loadQuiz, resetQuiz, resetTimer } from './actions'
import Question from './Question'
import Timer from './Timer'

export const NOT_STARTED = 'NOT_STARTED'
export const LOADING     = 'LOADING'
export const RUNNING     = 'RUNNING'
export const FINISHED    = 'FINISHED'

const getScore = () => {
  // document.querySelectorAll('.right').length gives 1 less than it should
  const wrong   = document.querySelectorAll('.wrong').length
  const total   = document.querySelectorAll('.clickable').length
  const right   = total - wrong
  const percent = (right * 100 / total).toFixed(2)
  return right + '/' + total + ' (' + percent + '%)'
}

interface Props {
  phase?:          string,
  targetProvince?: Question,
  dispatch?:       (action: any) => void,
}

const UnstartedQuiz = ({ dispatch }) => (
  <div className="unselectable map"
       onClick={ () => dispatch(loadQuiz()) } style={{
    fontSize:      '20pt',
    lineHeight:    '600px',
    textAlign:     'center',
    verticalAlign: 'middle'
  }}>Click here to start quiz</div>
)

const ResetButton = ({ resetFunction }) => (
  <div className="unselectable reset-button" onClick={ resetFunction }>
    Reset
  </div>
)

const StartedQuiz = ({ clickables, dispatch }) => {
  const reset = () => {
    dispatch(resetQuiz())
    dispatch(resetTimer())
  }

  return (
    <div className="flex-column">
      <svg className="map" viewBox="0 0 1285 1245">
        { clickables }
      </svg>
      <ResetButton resetFunction={ reset } />
    </div>
  )
}

class QuizDisplay extends React.Component<Props, {}> {
  render() {
    const { targetProvince, phase, dispatch, children } = this.props
    const displayName = targetProvince ? targetProvince.displayName : null

    const messages: { [key: string]: string } = {
      FINISHED:    'You got ' + getScore() + ' correct',
      LOADING:     'Loading',
      NOT_STARTED: 'Canadian Province Quiz',
      RUNNING:     'Click on ' + displayName
    }

    return (
      <div className="flex-column">
        <h1 className="unselectable header">{ messages[phase] }</h1>
        <Timer />
        { phase === NOT_STARTED
          ? <UnstartedQuiz dispatch={ dispatch } />
          : <StartedQuiz   dispatch={ dispatch } clickables={ children } />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ provinceQuiz }) => ({
  targetProvince: provinceQuiz.currentQuestion,
  phase:          provinceQuiz.phase
})

export default connect(mapStateToProps)(QuizDisplay)
