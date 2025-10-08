import RootNavigator from 'navigation/root_navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Provider store={store}>
				<SafeAreaProvider>
					<KeyboardProvider>
						<RootNavigator />
					</KeyboardProvider>
				</SafeAreaProvider>
			</Provider>
		</GestureHandlerRootView>
	);
};

export default App;
