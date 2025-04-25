import React, { useEffect } from 'react'
import { DateObject } from '@/features/history/types/Date.types'

export default function useDateObject() {

  const date = new Date()
  const [month, day, year] = date.toLocaleDateString('en-US').split('/')

  const defaultDateObject: DateObject = {
    constructor: date,
    string: date.toLocaleDateString(),
    day,
    month,
    year
  }

  const [dateObject, setDateObject] = React.useState<DateObject>({ ...defaultDateObject })

  const updateDateObject = (date: Date) => {
    const [month, day, year] = date.toLocaleDateString('en-US').split('/')
    setDateObject({
      constructor: date,
      string: date.toLocaleDateString(),
      day,
      month,
      year
    })
  }



  return {
    dateObject,
    updateDateObject
  }
}