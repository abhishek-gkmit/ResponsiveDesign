import { useContext, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

import { ThemeContext } from '@config/contexts/ThemeContext';

function useStyles<T>(themedStyleFunc: (colors: Colors) => T): T {
  const { colors, theme } = useContext(ThemeContext);

  // to handle the change of orientation
  const dimensions = useWindowDimensions();

  const styles = useMemo(() => {
    return themedStyleFunc(colors);
  }, [theme, dimensions]);

  return styles;
}

export default useStyles;
