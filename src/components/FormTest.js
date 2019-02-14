import React, { Component } from 'react';
import axios from 'axios';

export default class FormTest extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				foo: '',
			}
		}

		if (props.id) {
			axios.get('/api/test/get/'+props.id)
				.then(r => this.setState({ data: r.data }))
				.catch(err => console.log(err))	
		}
	}

	render() {
		return (
			<form>
				<div className="form-group mb-3">
					<label>Test Foo Title:</label>
					<input type="text" className="form-control" defaultValue={this.state.data.foo} onChange={this.setInp('foo')} />
				</div>

				<div className="form-group">
					<input onClick={this.submit()} type="submit" value="Submit Test" className="btn btn-primary"/>
				</div>
			</form>
		)
	}

	setInp = (id) => (e) => {
		let data = this.state.data
		data[id] = e.target.value
		this.setState({ data })
	}

	submit = () => (e) => {
		e.preventDefault()
		console.log('data', this.state.data)
		if (this.props.id) { // update
			axios.post('/api/test/update/'+this.props.id, this.state.data).then(res => console.log(res.data))
		} else {
			axios.post('/api/test/add', this.state.data).then(res => console.log(res.data))
		}
		this.props.history.push('/list')
	}
}
