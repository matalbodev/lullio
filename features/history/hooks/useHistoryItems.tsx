import { HistoryType } from '@/features/history/types/History.types'
import fixtures from '../fixtures'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const { historyItems } = fixtures

export default function useHistoryItems() {
  const queryClient = useQueryClient()

  const getHistoryItems = (date: Date) => {
    // no db for now
    // !TODO implements react query
    return historyItems.filter(
      (item: HistoryType) =>
        item.date.toISOString().split('T')[0] === date.toISOString().split('T')[0]
    )
  }

  const queries = {
    getByDate: (date: Date) =>
      useQuery({
        queryKey: ['historyItems', date],
        queryFn: () => {
          return getHistoryItems(date) || []
        },
      }),
  }

  const mutations = {
    addHistoryItem: useMutation({
      mutationFn: (historyItem: HistoryType) => {
        historyItems.push(historyItem)
        return new Promise<HistoryType>(resolve => resolve(historyItem))
      },
      onSuccess: () => {
        return queryClient.invalidateQueries({ queryKey: ['historyItems'] })
      },
    }),
  }

  return {
    queries,
    mutations,
  }
}
