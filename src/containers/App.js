import React, { Component } from 'react';
import CardList from '../components/CardList'; // qe te kemi akses tek CardList.js
import SearchBox from '../components/SearchBox';
//import { robots } from './robots'; // qe te kemi akses tek robots.js
import Scroll from '../components/Scroll';
import './App.css';

 
class App extends Component {
	constructor() {    //constructor perdoret kur deklarojm State
		super()
		this.state = {
           robots: [],
	       searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	    })
	    return !robots.length ?//if (robots.length === 0) { // ose e bojm kshu (!robots.length)
	    	<h1>Loading</h1> ://return <h1>Loading</h1>
	    //} else {
			(//return (
				<div className='tc'>
					<h1 className='f2'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
							<CardList robots={filteredRobots}/> 
                    </Scroll>	
			    </div>
			);
		}
	}
//}

export default App;