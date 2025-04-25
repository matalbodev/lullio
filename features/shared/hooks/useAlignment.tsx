export default function useAlignment(align: 'left' | 'center' | 'right', type: 'view' | 'text') {
  const alignMap = new Map([
    ['left', { view: 'flex-start', text: 'left' }],
    ['center', { view: 'center', text: 'center' }],
    ['right', { view: 'flex-end', text: 'right' }],
  ])

  const alignment = alignMap.get(align)
  if (!alignment) {
    throw new Error(`Invalid alignment: ${align}`)
  }
  return alignment[type]
}
