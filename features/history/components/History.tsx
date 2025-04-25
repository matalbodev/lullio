import React from 'react'
import { HistoryTypes } from '@/features/history/types/History.types'
import { Text } from 'react-native'
import Item from '@/features/history/components/Item'
import { convertDateToReadableTime } from '@/features/shared/utils/dateTime'
import PaddedView from '@/features/ui/PaddedView'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

interface Props {
  items: HistoryTypes | undefined
}

const History = (props: Props) => {
  const { items } = props
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <PaddedView vertical={32}>
        {items?.length ? (
          items.map((item) => (
            <Item key={item.id}>
              <Text>{item.label}</Text>
              <Text>
                {convertDateToReadableTime(item.timeStart)} -{' '}
                {convertDateToReadableTime(item.timeEnd)}
              </Text>
            </Item>
          ))
        ) : (
          <Text>There is not history yet...</Text>
        )}
      </PaddedView>
    </Animated.View>
  )
}

export default History
