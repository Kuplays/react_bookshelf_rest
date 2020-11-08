import React from 'react';
import AxiosParams from '../utils/AxiosParams';
import './UserStatsStyle.css'

class UserStats extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: false,
			countedData: null
		};
	}

	async fetchFromServer() {
	    try {
	      let fetchedData = await AxiosParams.get('/stats');
	      this.setState({
	        countedData: fetchedData.data
	      });
	    } catch(err) {
	      console.log("AXIOS FAILED, ERROR: " + err);
	    }
	    console.log(this.countedData);
  	}

  	async componentDidMount() {
    	this.fetchFromServer();
  	}

	render() {
		return(
			<div className='backShadow'>
				<div className='formInner'>
					<div>
						Books total:
					</div>
					<button onClick={this.props.closeForm}>Close</button>
				</div>
			</div>
		)
	}
}

export default UserStats;