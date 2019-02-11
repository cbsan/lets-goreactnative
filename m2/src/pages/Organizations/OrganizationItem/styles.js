import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.basePadding,
    flex: 1,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    maxWidth: (metrics.screenWidth - 60) / 2,
    padding: metrics.basePadding,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
