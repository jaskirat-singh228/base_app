import '@react-navigation/native';

declare module '@react-navigation/native' {
	export interface Theme {
		dark: boolean;
		colors: {
			text: string;
			card: string;
			info: string;
			black: string;
			white: string;
			error: string;
			border: string;
			primary: string;
			warning: string;
			success: string;
			indicator: string;
			background: string;
			transparent: string;
			borderRadius: number;
			notification: string;
			buttonDisable: string;
			inputBackground: string;
			inputPlaceholder: string;
		};
		fonts: {
			regular: {
				fontFamily: string;
				fontWeight: string;
			};
			medium: {
				fontFamily: string;
				fontWeight: string;
			};
			bold: {
				fontFamily: string;
				fontWeight: string;
			};
			heavy: {
				fontFamily: string;
				fontWeight: string;
			};
		};
		sizes: {
			height: number;
			width: number;
		};
	}
	export const useTheme: () => Theme;
}
