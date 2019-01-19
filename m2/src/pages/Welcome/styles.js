import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding * 2,
  },

  text: {
    color: colors.light,
    fontSize: 15,
    lineHeight: 21,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;