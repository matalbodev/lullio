import { Colors } from '@/constants/Color'
import useAlignment from '@/features/shared/hooks/useAlignment'
import useColor from '@/features/shared/hooks/useColor'
import { Button, FlexStyle, View } from 'react-native'
import { Href, Link } from 'expo-router'

type ColorKeys = keyof typeof Colors

type Props = {
  color?: ColorKeys
  label: string
  onPress?: () => void
  disabled?: boolean
  align?: 'left' | 'right' | 'center',
  href?: Href
}

export default function ThemedButton({ align, label, color, disabled, onPress, href }: Props) {
  const generatedColor = useColor(color)
  const viewAlign = useAlignment(align || 'left', 'view')
  return (
    <View
      style={{ flexDirection: 'row', justifyContent: viewAlign as FlexStyle['justifyContent'] }}
    >
      <View
        style={{
          backgroundColor: generatedColor.main,
          padding: 10,
          borderRadius: 5,
        }}
      >
        {href ? <Link href={href}>{label}</Link> : <Button title={label} onPress={onPress} color={generatedColor.light} disabled={disabled} />}
      </View>
    </View>
  )
}
