import React, { PropTypes, Component } from 'react';

export default class HSStatus extends Component {
	static propTypes = {
    trackStatus: PropTypes.func.isRequired,
		status: PropTypes.bool.isRequired
	};

  constructor(props, context) {
    super(props, context);
    this.props.trackStatus();
  }

	render() {
    console.log('rendering:', this.props.status);
		return (
			<p>{this.props.status ? 'Running' : 'Closed'}</p>
		);
	}
}