import { Button, StyleSheet, Text, View } from 'react-native';
import { login, getDefaultSession, handleIncomingRedirect } from "solid-authn-react-native";
import { useEffect, useState } from 'react';

export default function App() {
  const [session, setSession] = useState({});
  useEffect(() => {
    setSession({ ...getDefaultSession().info });
    handleIncomingRedirect().then(() => {
      console.log(getDefaultSession().info);
      setSession({ ...getDefaultSession().info });
    });
  }, []);

  return (
    <View>
      <Text>Look in the console for more information</Text>
      <Text>Is Logged In: {session.isLoggedIn}</Text>
      <Text>WebId: {session.webId}</Text>
      <Button
        onPress={() => login({
          oidcIssuer: "https://solidweb.me/",
          redirectUrl: window.location.href,
          clientName: "SomeClient",
        })}
        title="Log In"
      />
    </View>
  );
}