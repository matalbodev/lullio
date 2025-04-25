import AntDesign from '@expo/vector-icons/AntDesign'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useColor from '@/features/shared/hooks/useColor'
import PaddedView from '@/features/ui/PaddedView'
import { useRouter } from 'expo-router'

type DateObject = {
  constructor: Date
  string: string
}

interface Props {
  dateObject: DateObject
  updateDateObject: (date: Date) => void
}

const CalendarNavBar = ({ dateObject, updateDateObject }: Props) => {
  useRouter()
  const dateUpdater = (action: 'add' | 'remove' | 'reset') => {
    const activeDateConstructor = dateObject.constructor
    switch (action) {
      case 'add':
        updateDateObject(
          new Date(activeDateConstructor.setDate(activeDateConstructor.getDate() + 1))
        )
        break
      case 'remove':
        updateDateObject(
          new Date(activeDateConstructor.setDate(activeDateConstructor.getDate() - 1))
        )
        break
      case 'reset':
        updateDateObject(new Date())
        break
      default:
        throw new Error(`Invalid action`)
    }

    return undefined
  }
  return (
    <PaddedView
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: useColor('primary').dark,
      }}
    >
      <TouchableOpacity onPress={() => dateUpdater('remove')}>
        <AntDesign name="left" size={24} color={useColor('primary')['dark-revert']} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Pressable onPress={() => dateUpdater('reset')}>
          <AntDesign name="calendar" size={24} color={useColor('primary')['dark-revert']} />
        </Pressable>
        <Text
          style={{
            color: useColor('primary')['dark-revert'],
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {dateObject.string}
        </Text>
      </View>
      <TouchableOpacity onPress={() => dateUpdater('add')}>
        <AntDesign name="right" size={24} color={useColor('primary')['dark-revert']} />
      </TouchableOpacity>
    </PaddedView>
  )
}

export default CalendarNavBar
