import React, { Component } from 'react';

export default class Test extends Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
          <div className="card-body">
            <div className="mx-auto col-10 mt-3">
                <h5 className="card-title text-center mb-3">{this.props.data.foo}</h5>
            </div>
          </div>
		)
    }
}
