import React, { createContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { colors } from '@theme/colors';
import { GRADIENTS } from '@theme/gradients';

const ThemeContext = createContext<ThemeContextValues>({
  theme: 'light',
  colors: colors.light,
  gradients: GRADIENTS.light,
});

function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const theme = useColorScheme();

  const { colorsByTheme, gradientsByTheme } = useMemo(() => {
    return {
      colorsByTheme: colors[theme || 'light'],
      gradientsByTheme: GRADIENTS[theme || 'light'],
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, colors: colorsByTheme, gradients: gradientsByTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
