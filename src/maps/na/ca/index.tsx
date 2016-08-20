// -*- typescript -*-
import * as _ from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import * as provinces from './provinces'
import Province from '../../../Province'

const Canada = ({ provinceStates, xOffset, yOffset }) => (
  <g>
    <provinces.BC xOffset={ xOffset }
                  yOffset={ yOffset + 577.129  }
                  drawnState={ provinceStates.bc } />
    <provinces.AB xOffset={ xOffset + 188.657  }
                  yOffset={ yOffset + 697.656  }
                  drawnState={ provinceStates.ab } />
    <provinces.SK xOffset={ xOffset + 307.102  }
                  yOffset={ yOffset + 737.73   }
                  drawnState={ provinceStates.sk } />
    <provinces.MB xOffset={ xOffset + 455.157  }
                  yOffset={ yOffset + 757.181  }
                  drawnState={ provinceStates.mb } />
    <provinces.ON xOffset={ xOffset + 558.263  }
                  yOffset={ yOffset + 853.837  }
                  drawnState={ provinceStates.on } />
    <provinces.QC xOffset={ xOffset + 793.343  }
                  yOffset={ yOffset + 674.36   }
                  drawnState={ provinceStates.qc } />
    <provinces.NU xOffset={ xOffset + 323.649  }
                  yOffset={ yOffset + 0        }
                  drawnState={ provinceStates.nu } />
    <provinces.NL xOffset={ xOffset + 982.067  }
                  yOffset={ yOffset + 703.593  }
                  drawnState={ provinceStates.nl } />
    <provinces.YT xOffset={ xOffset + 3.118    }
                  yOffset={ yOffset + 329.488  }
                  drawnState={ provinceStates.yt } />
    <provinces.NT xOffset={ xOffset + 152.095  }
                  yOffset={ yOffset + 169.293  }
                  drawnState={ provinceStates.nt } />
    <provinces.NB xOffset={ xOffset + 1019.415 }
                  yOffset={ yOffset + 1026.587 }
                  drawnState={ provinceStates.nb } />
    <provinces.NS xOffset={ xOffset + 1080.608 }
                  yOffset={ yOffset + 1023.337 }
                  drawnState={ provinceStates.ns } />
    <provinces.PE xOffset={ xOffset + 1094.626 }
                  yOffset={ yOffset + 1045.337 }
                  drawnState={ provinceStates.pe } />
  </g>
)

const mapStateToProps = ({ provinceQuiz }) => {
  interface Result {
    [key: string]: string
  }

  const result: Result = {}
  _.forEach(provinceQuiz.provinces, (province: Province) => {
    result[province.elementId] = province.drawnState
  })

  return { provinceStates: result }
}

export default connect(mapStateToProps)(Canada)
