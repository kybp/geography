import * as _ from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import { addQuestion, removeQuestion } from './actions'
import { selectClickable, stopTimer } from './actions'
import Question, { QuestionState } from './Question'
import { makePointString } from './Point'
import { QuizPhase } from './QuizDisplay'
import points from './points'
import { ProvinceQuizState } from './reducers'

interface ClickableProps {
  id:          string,
  displayName: string,
  xOffset:     number,
  yOffset:     number,
  dispatch?:   (action: any) => void,
  drawnState?: QuestionState,
}

class Clickable extends React.Component<ClickableProps, {}> {
  componentWillMount() {
    const question = new Question(this.props.displayName, this.props.id)
    this.props.dispatch(addQuestion(question))
  }

  componentWillUnmount() {
    this.props.dispatch(removeQuestion(this.props.id))
  }

  render() {
    const { id, xOffset, yOffset, dispatch, drawnState } = this.props

    if (drawnState === null) return null

    const className = "clickable " + QuestionState[drawnState].toLowerCase()

    const onClick = () => {
      if (drawnState === QuestionState.UNANSWERED) {
        dispatch(selectClickable(id))

        const right = document.querySelectorAll('.right').length
        const wrong = document.querySelectorAll('.wrong').length
        const total = document.querySelectorAll('.clickable').length
        if (right + wrong + 1 === total) {
          dispatch(stopTimer())
        }
      }
    }

    return (
      <g id={ id } onClick={ onClick } className={ className }>
        { points[id].map((points, index) => (
            <polygon points={ makePointString(xOffset, yOffset, points) } 
                     key={ id + index } />
        )) }
      </g>
    )
  }
}

const mapStateToProps =
    ({ provinceQuiz }: { provinceQuiz: ProvinceQuizState },
     ownProps:         ClickableProps):
    ClickableProps => {
  let drawnState: { [key: string]: string }

  if (provinceQuiz.phase === QuizPhase.RUNNING) {
    if (provinceQuiz.currentQuestion.elementId === ownProps.id) {
      return Object.assign({}, ownProps, {
        drawnState: QuestionState.UNANSWERED
      })
    }
  }

  const us = _.filter(provinceQuiz.otherQuestions, (question: Question) => (
    question.elementId === ownProps.id
  ))[0]

  return Object.assign({}, ownProps, {
    drawnState: us === undefined ? null : us.drawnState
  })
}

export default connect(mapStateToProps)(Clickable)
