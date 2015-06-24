import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import HSStatus from '../components/HSStatus';
import * as HSStatusActions from '../actions/HSStatusActions';

export default class HSApp {
	render() {
		return (
			<Connector>
				{({ hsStatus, dispatch }) => {
  					return (
              <HSStatus status={hsStatus}
                        {...bindActionCreators(HSStatusActions, dispatch)} />
            );
          }
				}
			</Connector>
		);
	}
}