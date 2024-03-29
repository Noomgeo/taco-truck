import React from 'react';
import './Navbar.css'
import Taco from './Taco.svg';

import { Link } from 'react-router-dom';

const Navbar = ()=> (
	<div className='Navbar'>
		<h1>Taco Tuesday</h1>
		<ul>
			<li><div>
			<img src={ Taco } />
			</div></li>
			<li>
				<Link to='/home'>
					<div>Home</div>
				</Link>
			</li>
			<li>
				<Link to='/menu'>
					<div>Menu</div>
				</Link>
			</li>
			<li>
				<Link to='/contact'>
					<div>Contact</div>
				</Link>
			</li>
		</ul>
	</div>
);

export default Navbar;