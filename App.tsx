import RootNavigator from 'navigation/root_navigator';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => {
	return (
		<Provider store={store}>
			<RootNavigator />
		</Provider>
	);
};

export default App;
