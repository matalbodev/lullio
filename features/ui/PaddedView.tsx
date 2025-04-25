import { StyleProp, View } from 'react-native'
import React from 'react'

const PaddedView = ({ children, horizontal = 16, vertical = 16, style = {} } : {
  children: React.ReactNode,
  horizontal?: number,
  vertical?: number,
  style?: Object,
}) => {

  return <View
    style={{
      paddingRight: horizontal,
      paddingLeft: horizontal,
      paddingTop: vertical,
      paddingBottom: vertical,
      ...style
    }}
  >
    {children}
  </View>
}

export default PaddedView