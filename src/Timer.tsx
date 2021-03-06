import * as React from 'react'
import { connect } from 'react-redux'

export interface TimerProps {
  startTime?: number,
  stopTime?:  number,
}

class Timer extends React.Component<TimerProps, {}> {
  private timer: number

  componentDidMount() {
    this.timer = setInterval(this.forceUpdate.bind(this), 10)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const stop  = this.props.stopTime  || Date.now()
    const start = this.props.startTime || stop
    const total = ((stop - start) / 1000).toFixed(2)
    return <div className="unselectable timer">Time: { total }</div>
  }
}

const mapStateToProps = ({ timer }: { timer: TimerProps }): TimerProps => ({
  startTime: timer.startTime,
  stopTime:  timer.stopTime
})

export default connect(mapStateToProps)(Timer)
