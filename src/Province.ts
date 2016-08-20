export const RIGHT      = 'RIGHT'
export const WRONG      = 'WRONG'
export const UNANSWERED = 'UNANSWERED'

class Province {
  drawnState: string

  constructor(public displayName: string, public elementId: string,
              drawnState = UNANSWERED) {
    this.drawnState = drawnState
  }

  getRight() {
    return new Province(this.displayName, this.elementId, RIGHT)
  }

  getWrong() {
    return new Province(this.displayName, this.elementId, WRONG)
  }
}

export const fullProvinceList = () => [
  new Province('Alberta',                   'ab'),
  new Province('British Columbia',          'bc'),
  new Province('Manitoba',                  'mb'),
  new Province('Ontario',                   'on'),
  new Province('New Brunswick',             'nb'),
  new Province('Newfoundland and Labrador', 'nl'),
  new Province('Northwest Territories',     'nt'),
  new Province('Nova Scotia',               'ns'),
  new Province('Nunavut',                   'nu'),
  new Province('Prince Edward Island',      'pe'),
  new Province('Québec',                    'qc'),
  new Province('Saskatchewan',              'sk'),
  new Province('Yukon',                     'yt')
]

export default Province
