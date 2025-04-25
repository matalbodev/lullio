import { TextStyles } from '@/constants/Text'
import useColor from '@/features/shared/hooks/useColor'
import { Text, TextStyle, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation, useRouter } from 'expo-router'

export default function CustomLayout({ children, title }: { children: React.ReactNode; title: string }) {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const navigation = useNavigation()
  const HORIZONTAL_PADDING = 16
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingBottom: 24,
          paddingLeft: HORIZONTAL_PADDING,
          paddingRight: HORIZONTAL_PADDING,
          backgroundColor: useColor('primary').main,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {navigation.canGoBack() ? (
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="left" size={24} color={useColor('primary')['main-revert']} />
          </TouchableOpacity>
        ) : (
          ''
        )}
        <Text
          style={[
            TextStyles.title.large as TextStyle,
            { color: useColor('primary')['main-revert'], textAlign: 'center' },
          ]}
        >
          {title}
        </Text>
        <Text style={{ marginLeft: 'auto', color: useColor('primary')['main-revert'] }}>
          <AntDesign name="user" size={24} color={useColor('primary')['main-revert']} />
        </Text>
      </View>
      {children}
    </SafeAreaProvider>
  )
}
