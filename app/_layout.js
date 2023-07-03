import { Stack } from "expo-router";

export default function App() {
  return (
    <Stack
      screenOptions={{ header: () => undefined, title: "Test App" }}
    />
  );
}
