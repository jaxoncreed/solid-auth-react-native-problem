import { Button, StyleSheet, Text, View } from 'react-native';
import { login, getDefaultSession, handleIncomingRedirect } from "solid-authn-react-native";
import { useEffect, useState } from 'react';
import { SolidAuthProvider, useSolidAuth } from "ldo-solid-react";

function SubComponent() {
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

export default function App() {

  return (
   <SolidAuthProvider>
    <SubComponent />
   </SolidAuthProvider>
  );
}