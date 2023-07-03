import { Button, Text, View } from 'react-native';
import { login, getDefaultSession, handleIncomingRedirect } from "@inrupt/solid-client-authn-browser";
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
      <Text>Is Logged In: {session.isLoggedIn ? "true" : "false"}</Text>
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