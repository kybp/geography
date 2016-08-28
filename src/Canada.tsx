// -*- typescript -*-
import * as React from 'react'
import { connect } from 'react-redux'
import Clickable from './Clickable'
import { startQuiz, startTimer } from './actions'

interface Props {
  xOffset:   number,
  yOffset:   number,
  dispatch?: (action: any) => void,
}

class Canada extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.dispatch(startQuiz())
    this.props.dispatch(startTimer())
  }

  render() {
    const { xOffset, yOffset } = this.props
    return (
      <g>
        <Clickable xOffset={ xOffset + 0.0 } yOffset={ yOffset + 577.129 }
                   id="bc" displayName="British Columbia" />
        <Clickable xOffset={ xOffset + 188.657 } yOffset={ yOffset + 697.656 }
                   id="ab" displayName="Alberta" />
        <Clickable xOffset={ xOffset + 307.102 } yOffset={ yOffset + 737.73 }
                   id="sk" displayName="Saskatchewan"/>
        <Clickable xOffset={ xOffset + 455.157 } yOffset={ yOffset + 757.181 }
                   id="mb" displayName="Manitoba" />
        <Clickable xOffset={ xOffset + 558.263 } yOffset={ yOffset + 853.837 }
                   id="on" displayName="Ontario" />
        <Clickable xOffset={ xOffset + 793.343 } yOffset={ yOffset + 674.36 }
                   id="qc" displayName="Québec" />
        <Clickable xOffset={ xOffset + 323.649 } yOffset={ yOffset + 0.0 }
                   id="nu" displayName="Nunavut" />
        <Clickable xOffset={ xOffset + 982.067 } yOffset={ yOffset + 703.593 }
                   id="nl" displayName="Newfoundland and Labrador" />
        <Clickable xOffset={ xOffset + 3.118 } yOffset={ yOffset + 329.488 }
                   id="yt" displayName="Yukon" />
        <Clickable xOffset={ xOffset + 152.095 } yOffset={ yOffset + 169.293 }
                   id="nt" displayName="Northwest Territories" />
        <Clickable xOffset={ xOffset + 1019.415 } yOffset={ yOffset + 1026.587 }
                   id="nb" displayName="New Brunswick" />
        <Clickable xOffset={ xOffset + 1080.608 } yOffset={ yOffset + 1023.337 }
                   id="ns" displayName="Nova Scotia" />
        <Clickable xOffset={ xOffset + 1094.626 } yOffset={ yOffset + 1045.337 }
                   id="pe" displayName="Prince Edward Island" />
      </g>
    )
  }
}

export default connect()(Canada)
