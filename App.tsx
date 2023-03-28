import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
} from 'react-native';

const DATA = [
  {
    title: 'Segunda',
    data: ['Algoritmos e Estrutura de Dados: Árvores - Prof: Marc Antonio Vieira de Queiroz', 'Arquitetura e Organização de Computadores - Prof: Kleber Marcio de Souza'],
  },
  {
    title: 'Terça',
    data: ['LPOO: Introdução a Programação Orientada a Objetos - Prof: Ricardo Petri', 'Análise e Projeto de Algoritmos - Prof: Edison Antonio Sahd Filho'],
  },
  {
    title: 'Quarta',
    data: ['LPOO: Introdução a Programação Orientada a Objetos - Prof: Ricardo Petri', 'Arquitetura e Organização de Computadores - Prof: Kleber Marcio de Souza'],
  },
  {
    title: 'Quinta',
    data: ['Algoritmos e Estrutura de Dados: Árvores - Prof: Marc Antonio Vieira de Queiroz', '@Teste de Software: Fundamentos de Teste de Software - Prof: Edison Antonio Sahd Filho'],
  },
  {
    title: 'Sexta',
    data: ['APA: Recursividade e Funções Recursivas - Prof: Ricardo Petri ', 'Projeto Interdisciplinar II - Prof: Bruna Sozzo'],
  },
];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    alignItems: "center",
  },
  item: {
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 15,
    marginVertical: 8,
  },
  itemNone: {
    display: "none",
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 15,
    marginVertical: 8,
  },
  header: {
    fontSize: 30,
    backgroundColor: '#fff',
  },
  headerNone: {
    display: "none",
    fontSize: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});



const App = () => {
  const [toggle, settoggle] = useState(false)
  const changeGrade = () => {
    settoggle(!toggle)

  }
  return (  
  <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Tem aula do que hoje?
      </Text>
    <View> 
      <Button title= "CUBO Mista 2o ano" onPress={changeGrade}/>

      

    </View>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={toggle ? styles.item : styles.itemNone}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={toggle ? styles.header : styles.headerNone}>{title}</Text>
      )}
    />
  </SafeAreaView>
);
}


export default App;