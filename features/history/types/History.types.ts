type Type = 'eat' | 'sleep' | 'activity'

export interface HistoryType {
  id: string,
  type: Type,
  label: string,
  timeStart: Date,
  timeEnd: Date,
  date: Date,
}

export type HistoryTypes = HistoryType[]
