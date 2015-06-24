import React, { PropTypes } from 'react';

export default class HSStatus {
	static propTypes = {
		status: PropTypes.bool.isRequired
	};

	render() {
		return (
			<p>{status ? 'Running' : 'Closed'}</p>
		);
	}
}