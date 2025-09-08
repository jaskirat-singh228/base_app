import '@react-navigation/native';
import { Theme } from '@react-navigation/native';

declare module '@react-navigation/native' {
	export interface CustomThemeColors extends Theme['colors'] {
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
		selectedIcon: string;
		borderRadius: number;
		notification: string;
		buttonDisable: string;
		inputBackground: string;
		inputPlaceholder: string;
	}

	export interface CustomTheme extends Theme {
		colors: CustomThemeColors;
	}

	export const useTheme: () => CustomTheme;
}
