import { PressableStateCallbackType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useColor from '@/features/shared/hooks/useColor'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation, useRouter } from 'expo-router'
import Action from '@/features/action/components'

const CustomTabBar = () => {
  const styles = useStyle()
  const navigation = useNavigation()
  const router = useRouter()
  return (
    <View style={{ position: 'relative' }}>
      <Action.NavBarButton />
      <View style={styles.list}>
        <TouchableOpacity style={useStyle().button} onPress={() => { router.push('/') }}>
          <AntDesign name="calendar" size={32} color={useColor('primary')['main-revert']} />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={useStyle().button} onPress={() => router.push('/test')}>
          <AntDesign name="barchart" size={32} color={useColor('primary')['main-revert']} />
          <Text style={styles.buttonText}>Stats</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomTabBar

const useStyle = (props: { state?: PressableStateCallbackType } = {}) => {
  return StyleSheet.create({
    list: {
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: useColor('primary').main,
      justifyContent: 'space-around',
      display: 'flex',
      flexDirection: 'row',
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
