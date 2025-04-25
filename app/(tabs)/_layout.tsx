import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui'
import { Text, StyleSheet, TouchableOpacity, PressableStateCallbackType, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useColor from '@/features/shared/hooks/useColor'
import Action from '@/features/action/components'
import AntDesign from '@expo/vector-icons/AntDesign'
import CustomLayout from '@/features/ui/CustomLayout'

// Defining the layout of the custom tab navigator
export default function Layout() {
  const styles = useStyle()
  return (
    <Tabs>
      <CustomLayout title={'Lullio baby tracker'}>
        <TabSlot />
      </CustomLayout>
      <TabList style={styles.list}>
        <Action.NavBarButton />
        <TabTrigger style={(state) => useStyle({ state }).button} name="home" href="/">
          <AntDesign name="calendar" size={32} color={useColor('primary')['main-revert']} />
          <Text style={styles.buttonText}>Home</Text>
        </TabTrigger>
        <TabTrigger style={(state) => useStyle({ state }).button} name="stats" href="/stats">
          <AntDesign name="barchart" size={32} color={useColor('primary')['main-revert']} />
          <Text style={styles.buttonText}>Stats</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  )
}

const useStyle = (props: { state?: PressableStateCallbackType } = {}) => {
  const insets = useSafeAreaInsets()
  return StyleSheet.create({
    list: {
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: useColor('primary').main,
      justifyContent: 'space-around',
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
    },
    button: {
      paddingTop: 24,
      paddingBottom: 24,
      alignItems: 'center',
      gap: 8,
    },
    buttonText: {
      color: useColor('primary')['main-revert'],
    },
  })
}
