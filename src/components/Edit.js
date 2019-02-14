import React, { PureComponent } from 'react';
import FormTest from './FormTest'

export default class Edit extends PureComponent {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Edit Test</h3>
				<FormTest history={this.props.history} id={this.props.match.params.id} />
            </div>
		)
    }
}
