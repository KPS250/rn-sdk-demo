import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: '100%',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  body: {
    backgroundColor: Colors.light,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: 'hidden',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 8,
    backgroundColor: Colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 180,
  },
  btnText: {
    fontSize: 14,
    color: Colors.light,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: Colors.light,
  },
  desc: {
    fontSize: 12,
    color: Colors.light,
    marginTop: 10,
  },
});
