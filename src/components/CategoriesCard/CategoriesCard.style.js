import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: 'white',
    marginLeft: 10,
    marginVertical: 7,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
  },
});
