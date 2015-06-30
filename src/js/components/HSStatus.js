import React, { PropTypes, Component } from 'react';

export default class HSStatus extends Component {
	static propTypes = {
		status: PropTypes.bool.isRequired,
    trackStatus: PropTypes.func.isRequired
	};

  componentWillMount() {
    this.props.trackStatus();
  }

	render() {
		return (
			<p>{this.props.status ? 'Running' : 'Closed'}</p>
		);
	}
}