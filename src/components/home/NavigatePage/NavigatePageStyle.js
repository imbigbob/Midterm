import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 40,   
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    minWidth: '20%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },

  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  productImage: {
    width: 24,
    height: 24,
    marginBottom: 8,
    alignSelf: 'center',
  },
});
export default styles;