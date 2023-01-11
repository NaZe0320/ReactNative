import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFunctionComponent from './StateWithFuctionalComponent';
import UseEffectWithClassComponent from './UseEffectWithClassComponent';
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent';

export default function App() {
  const [isTrue, setIsTrue] = useState(true)
  return (
    <View style={styles.container}>
      {/* <StateWithFunctionComponent /> */}
      {/* <StateWithClassComponent /> */}
      {/* {isTrue ?<UseEffectWithClassComponent />: null} */}
      <UseEffectWithFunctionalComponent/>
      <StatusBar style="auto" />

      <Button
        title='toggle'
        onPress={() => setIsTrue(!isTrue)}>

      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
