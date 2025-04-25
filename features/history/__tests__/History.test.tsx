import History from '../components/History'
import { render } from '@testing-library/react-native'
import { HistoryTypes } from '../types/History.types'
import fixtures from '../fixtures'

describe('History', () => {
  it('Should render one history item', () => {
    const historyItems: HistoryTypes = fixtures.historyItems
    const { getByText } = render(<History items={historyItems} />)
    expect(getByText('A mangé')).toBeOnTheScreen()
  })

  it('Should display a default fallback if not items', () => {
    const historyItems: HistoryTypes = []

    const { getByText } = render(<History items={historyItems} />)

    expect(getByText('There is not history yet...')).toBeOnTheScreen()
  })

  it('Should render x history item', () => {
    const historyItems: HistoryTypes = fixtures.historyItems
    const { getByText } = render(<History items={historyItems} />)
    expect(getByText('Eat')).toBeOnTheScreen()
    expect(getByText('Sleep')).toBeOnTheScreen()
  })
})
