import { createContext } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeContextProvider = ColorModeContext.Provider;
