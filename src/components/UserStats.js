import React from 'react';
import AxiosParams from '../utils/AxiosParams';
import './UserStatsStyle.css'

class UserStats extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='backShadow'>
				<div className='formInner'>
					<p>Display stats</p>
					<button onClick={this.props.closeForm}>Close</button>
				</div>
			</div>
		)
	}
}

export default UserStats;