import { HistoryTypes, HistoryType } from '@/features/history/types/History.types'

const historyItems: HistoryTypes = [
  {
    id: '1-1',
    type: 'eat',
    label: 'Eat',
    timeStart: new Date(),
    timeEnd: new Date(new Date().setHours(new Date().getHours() + 1)),
    date: new Date()
  },
  {
    id: '1-2',
    type: 'sleep',
    label: 'Sleep',
    timeStart: new Date(new Date().setHours(new Date().getHours() + 1)),
    timeEnd: new Date(new Date().setHours(new Date().getHours() + 2)),
    date: new Date()
  },
  {
    id: '1-3',
    type: 'activity',
    label: 'Activity',
    timeStart: new Date(new Date().setHours(new Date().getHours() + 2)),
    timeEnd: new Date(new Date().setHours(new Date().getHours() + 4)),
    date: new Date()
  },
]

const randomHistoryItem: HistoryType = {
  id: '1-4',
  type: 'activity',
  label: 'Activity',
  timeStart: new Date(new Date().setHours(new Date().getHours() + 4)),
  timeEnd: new Date(new Date().setHours(new Date().getHours() + 8)),
  date: new Date()
}

export default {
  historyItems,
  randomHistoryItem
}