import { Button, Text, View } from 'react-native';
import { useSolidAuth } from "ldo-solid-react";

export default function SubComponent() {
  const { login, session } = useSolidAuth();

  return (
    <View>
      <Text>Look in the console for more information</Text>
      <Text>Is Logged In: {session.isLoggedIn ? "true" : "false"}</Text>
      <Text>WebId: {session.webId}</Text>
      <Button
        onPress={() => login("https://solidweb.me/")}
        title="Log In"
      />
    </View>
  );
}

