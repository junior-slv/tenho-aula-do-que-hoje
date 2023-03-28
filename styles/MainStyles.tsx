import {
    StyleSheet,
    StatusBar,
  } from 'react-native';

export const styles = StyleSheet.create({
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  
  });