import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch('http://localhost:3004/posts')
			.then(res => res.json())
			.then(data => {
				setIsLoading(false);
				setData(data);
			})
			.catch(e => console.log(e));
	}, []);

	if (isLoading) {
		return <h1>Загрузка....</h1>;
	}

	console.log(data);

	return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<h1>{data[0].title}</h1>
			</header>
		</div>
	);
}

export default App;
