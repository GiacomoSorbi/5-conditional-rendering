import React, { Component } from 'react';
import If from './If.js';
import './App.css';

class Container extends Component {
	render() {
		return (
			<div className="container">
				<If condition={true}>
					<p>Amazing! I have rendered!  Remember:  props.condition can be any Javascript expression evaluating to a boolean, such as values from application state.</p>
				</If>
			</div>
		);
	}
}

export default Container;