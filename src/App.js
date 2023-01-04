import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Password from './components/Password';
import generatePassword from './generatePassword';

function App() {
	const [password, setPassword] = useState("9eN3r@!e");
	const [formData, setFormData] = useState({
		length: 6,
		lowerCase: false,
		upperCase: false,
		numbers: false,
		special: false
	})

	function handleChange(event) {
		const {name, type, value, checked} = event.target;
		setFormData(prevData => ({
			...prevData,
			[name]: type === "range" ? value : checked
		}))
	}

	function getPassword() {
		const newPassword = generatePassword(formData.length, formData.lowerCase, formData.upperCase, formData.numbers, formData.special, password);
		setPassword(newPassword);
	}
	
	return (
		<main>
			<Password password={password} />
			<Form { ...formData } handleChange={handleChange} getPassword={getPassword}  />
		</main>
	);
}

export default App;
