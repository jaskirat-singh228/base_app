// import React, { createContext, useState } from 'react';

// const ThemeContext = createContext<any>(undefined);

// export const ThemeProvider = ({ children }: { children: any }) => {
// 	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
// 	const setDarkTheme = () => setIsDarkTheme(true);
// 	const setLightTheme = () => setIsDarkTheme(false);
// 	const toggleTheme = () => setIsDarkTheme((prev) => !prev);

// 	return (
// 		<ThemeContext.Provider value={{ setDarkTheme, setLightTheme, toggleTheme, isDarkTheme }}>
// 			{children}
// 		</ThemeContext.Provider>
// 	);
// };

// export const useTheme = () => React.useContext(ThemeContext);
