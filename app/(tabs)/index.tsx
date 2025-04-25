import History from '@/features/history/components/History'
import CalendarNavBar from '@/features/history/components/CalendarNavBar'
import useDateObject from '@/features/history/hooks/useDateObject'
import useHistoryItems from '@/features/history/hooks/useHistoryItems'

export default function Index() {
  const { dateObject, updateDateObject } = useDateObject()
  const { queries} = useHistoryItems()
  const { data: historyItems, status } = queries.getByDate(dateObject.constructor)
  return (
    <>
      <CalendarNavBar {...{ dateObject, updateDateObject }} />
      {status !== 'pending' ? <History items={historyItems} /> : null}
    </>
  )
}
