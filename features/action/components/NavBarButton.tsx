import { StyleSheet, View, TouchableOpacity } from 'react-native'
import useColor from '@/features/shared/hooks/useColor'
import AntDesign from '@expo/vector-icons/AntDesign'
import fixtures from '@/features/history/fixtures'
import useHistoryItems from '@/features/history/hooks/useHistoryItems'

const { randomHistoryItem } = fixtures

const NavBarButton = () => {
  const { mutations } = useHistoryItems()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => mutations.addHistoryItem.mutate(randomHistoryItem)}>
        <AntDesign name="plus" size={24} color={useColor('primary')['dark-revert']} />
      </TouchableOpacity>
    </View>
  )
}

export default NavBarButton

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: '50%',
    zIndex: 99,
    transform: 'translate(-25%, -50%)',
    boxShadow: 'rgba(149, 157, 165, 0.9) 0px 8px 24px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  button: {
    backgroundColor: useColor('primary')['main-revert'],
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
