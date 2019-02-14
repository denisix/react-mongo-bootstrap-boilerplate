import React, { Component } from 'react';
import FormTest from './FormTest'

export default class Add extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div style={{marginTop: 10}}>
				<h3>Add New Test</h3>
				<FormTest history={this.props.history} />
			</div>
		)
	}
}
