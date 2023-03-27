import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
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

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.header}>
        Tem aula do que hoje?
      </Text>
      <Text style={styles.header}>
      CUBO Mista 2o ano
      </Text>
    </View>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;