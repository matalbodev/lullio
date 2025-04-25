import { Colors } from '@/constants/Color'

export default function useColor(color?: keyof typeof Colors) {
  return Colors[color || 'primary']
}
