// -*- typescript -*-
import * as React from 'react'
import * as provinces from './provinces'

const Canada = ({ xOffset, yOffset }) => (
  <g>
    <provinces.BC xOffset={ xOffset } yOffset={ yOffset + 577.129 }
                  fill="goldenrod"    />
    <provinces.AB xOffset={ xOffset + 188.657 } yOffset={ yOffset + 697.656 }
                  fill="mediumpurple" />
    <provinces.SK xOffset={ xOffset + 307.102 } yOffset={ yOffset + 737.73 }
                  fill="lightgreen"   />
    <provinces.MB xOffset={ xOffset + 455.157 } yOffset={ yOffset + 757.181 }
                  fill="lightpink"    />
    <provinces.ON xOffset={ xOffset + 558.263 } yOffset={ yOffset + 853.837 }
                  fill="orange"       />
    <provinces.QC xOffset={ xOffset + 793.343 } yOffset={ yOffset + 674.36 }
                  fill="darkgreen"    />
    <provinces.NU xOffset={ xOffset + 323.649 } yOffset={ yOffset + 0 }
                  fill="salmon"       />
    <provinces.NB xOffset={ xOffset + 1019.415 } yOffset={ yOffset + 1026.587 }
                  fill="blue"         />
    <provinces.NS xOffset={ xOffset + 1080.608 } yOffset={ yOffset + 1023.337 }
                  fill="darkmagenta"  />
    <provinces.NL xOffset={ xOffset + 982.067 } yOffset={ yOffset + 703.593 }
                  fill="hotpink"      />
    <provinces.YT xOffset={ xOffset + 3.118 } yOffset={ yOffset + 329.488 }
                  fill="indianred"    />
    <provinces.NT xOffset={ xOffset + 152.095 } yOffset={ yOffset + 169.293 }
                  fill="lightyellow" />
    <provinces.PE xOffset={ xOffset + 1094.626 } yOffset={ yOffset + 1045.337 }
                  fill="grey"         />
  </g>
)

export default Canada
