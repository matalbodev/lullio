import { convertDateToReadableTime } from '../dateTime'

describe('dateTime from date to formatted time', () => {
  it('should take a Date constructor and return formatted time', () => {
    // Given
    const midnight = new Date('August 19, 1975 00:00:30 GMT+01:00')

    // When
    const result = convertDateToReadableTime(midnight)

    // Then
    expect(result).toBe('00:00')
  })

  it.each`
    dateString                              | dateFormat
    ${'August 19, 1975 00:00:30 GMT+01:00'} | ${'00:00'}
    ${'August 19, 1975 14:30:30 GMT+01:00'} | ${'14:30'}
    ${'August 19, 1975 22:30:30 GMT+01:00'} | ${'22:30'}
    ${'August 19, 1975 01:30:30 GMT+01:00'} | ${'01:30'}
  `(
    'should take a Date constructor and return formatted time : $expected',
    ({ dateString, dateFormat }) => {
      // Given
      const date = new Date(dateString)

      // When
      const result = convertDateToReadableTime(date)

      // Then
      expect(result).toBe(dateFormat)
    }
  )
})
