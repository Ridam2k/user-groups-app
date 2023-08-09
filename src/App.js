import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux sto
import UserForm from './components/UserForm';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<h1>User Groups App</h1>
				<UserForm />
			</div>
		</Provider>
	);
}

export default App;
