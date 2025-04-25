import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { JsStack } from '@/features/shared/components/JsStack'
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout() {
  useReactQueryDevTools(queryClient)
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="auto" />
    </QueryClientProvider>
  )
}
