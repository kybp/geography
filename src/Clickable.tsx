// -*- typescript -*-
import * as _ from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import { addQuestion, selectClickable } from './actions'
import Question, { UNANSWERED } from './Question'
import { makePointString } from './Point'
import { RUNNING } from './QuizDisplay'
import points from './points'

interface Props {
  id:              string,
  displayName:     string,
  xOffset:         number,
  yOffset:         number,
  dispatch?:       (action: any) => void,
  provinceStates?: { [key: string]: string },
}

class Clickable extends React.Component<Props, {}> {
  componentWillMount() {
    const question = new Question(this.props.displayName, this.props.id)
    this.props.dispatch(addQuestion(question))
  }

  render() {
    const { id, xOffset, yOffset, dispatch, provinceStates } = this.props

    const drawnState = provinceStates[id]
    if (drawnState === undefined) return null

    const className  = "clickable " + drawnState.toLowerCase()

    const onClick = () => {
      if (drawnState === UNANSWERED) {
        dispatch(selectClickable(id))
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

const mapStateToProps = ({ provinceQuiz }) => {
  let allQuestions = provinceQuiz.otherQuestions.slice()
  if (provinceQuiz.phase === RUNNING) {
    allQuestions.push(provinceQuiz.currentQuestion)
  }

  const result: { [key: string]: string } = {}

  _.forEach(allQuestions, (question: Question) => {
    result[question.elementId] = question.drawnState
  })

  return { provinceStates: result }
}

export default connect(mapStateToProps)(Clickable)
