import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 54 + getStatusBarHeight(true),
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
    paddingTop: getStatusBarHeight(true),
  },
  icon: {
    color: colors.darker,
  },
  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;