import { SolidAuthProvider, useSolidAuth } from "ldo-solid-react";
import { Stack } from "expo-router";

export default function App() {
  return (
   <SolidAuthProvider>
    <Stack
      screenOptions={{ header: () => undefined, title: "Test App" }}
    />
   </SolidAuthProvider>
  );
}
