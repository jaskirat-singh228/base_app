import RootNavigator from 'navigation/root_navigator';
import React from 'react';
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
