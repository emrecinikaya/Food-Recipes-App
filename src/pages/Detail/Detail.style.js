import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
  },
  title: {
    fontWeight: 'bold',
    color: '#bf360c',
    fontSize: 25,
    padding: 4,
  },
  area: {
    fontWeight: 'bold',
    color: '#bf360c',
    fontSize: 20,
    padding: 4,
  },
  desc: {
    padding: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
