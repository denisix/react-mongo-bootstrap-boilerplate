import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		console.log('- list mounted');
		axios.get('/api/test/list')
			.then(r => this.setState({ data: r.data }))
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<h3 align="center">Tests List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
					<tr>
						<th>Foo's</th>
						<th width="20%">Actions</th>
					</tr>
					</thead>
					<tbody>
					{ this.state.data.map((i,k) =>
						<tr key={i._id + k}>
							<td>
								{i.foo}
							</td>
							<td>
								<Link to={'/edit/'+i._id} className="btn btn-primary">Edit</Link>
								<button onClick={this.remItem(i._id)} className="btn btn-danger ml-3">X</button>
							</td>
						</tr>
					)}
					</tbody>
				</table>

				<Link to="/add" className="btn btn-primary float-right mt-5">+ Add</Link>
			</div>
		)
	}

	remItem = (id) => (e) => {
		axios.get('/api/test/delete/'+id)
			.then(r => {
				console.log('id='+id+' r', r)
				this.setState({ data: this.state.data.filter(i => i._id !== id) })
			})
			.catch(err => console.log(err))
	}
}
