import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    minHeight: 200,
    resizeMode: 'cover',
  },
  title: {
    backgroundColor: 'rgba(0,0,0,.5)',
    color: 'white',
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0,
    padding: 2,
    textAlign: 'right',
    paddingRight: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
