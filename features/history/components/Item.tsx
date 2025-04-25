import { Text, View } from 'react-native'

export default function Item(props: { children: React.ReactNode }) {
  return (
    <View
      style={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        marginBottom: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {props.children}
    </View>
  )
}
