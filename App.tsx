import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
  Pressable,
} from 'react-native';
import { CUBO_B_UM_ES } from './services/Horarios';
import { styles } from './styles/MainStyles';


const App = () => {
  const [toggle, settoggle] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const changeGrade = () => {
    settoggle(!toggle)

  }
  return (  
  <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Tem aula do que hoje?
      </Text>
    <View> 
      <Button title= "Engenharia de Software" onPress={changeGrade}/>
      <Button title= "Ciência da Computação" onPress={changeGrade}/>
      

    </View>
    <SectionList
      sections={CUBO_B_UM_ES}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={toggle ? styles.item : styles.itemNone}>
          <Text style={styles.title}>{item}</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>↓</Text>
      </Pressable>
        </View>

      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={toggle ? styles.header : styles.headerNone}>{title}</Text>
        
      )}
    />
    
        {/* <SectionList
      sections={CUBO_MISTA_SEGUNDO_ES}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={toggle ? styles.item : styles.itemNone}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={toggle ? styles.header : styles.headerNone}>{title}</Text>
      )}
    /> */}
  </SafeAreaView>
);
}


export default App;