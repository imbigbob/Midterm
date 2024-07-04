import {  StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      paddingHorizontal: '1%',
      borderRadius: 20,
      backgroundColor: '#01635D',
      marginHorizontal: '5%',
      marginBottom: '1%',
       height:60,
       width:60,    
       justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
      backgroundColor: 'coral',
      borderWidth: 0,
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: 'coral',
    },

    label: {
      textAlign: 'center',
      marginBottom: 10,
      fontSize: 24,
    },
  });
export default styles;