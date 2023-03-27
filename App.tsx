import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({ name, baseEnthusiasmLevel = 0 }) => {
  const [enthusiasmLevel, setEnthusiasmLevel] =
    React.useState(baseEnthusiasmLevel);

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);


  return (
    <View style={styles.container}>
            <Image
        style={styles.tinyLogo}
        src={'https://raichu-uploads.s3.amazonaws.com/logo_unifil-centro-universitario-filadelfia_bduUsl.png'}
      />
      <Text style={styles.greeting}>

        Tenho aula do que hoje?
      </Text>
      <View style={styles.boxStyle}>
        <Button
          title="Avançar >"
          accessibilityLabel="avancar"
          onPress={onIncrement}
          color="blue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "orange",
    justifyContent: "center",
  },
  greeting: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  boxStyle: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },
});

export default Hello;
