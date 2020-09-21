import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
	render() {
		return (
			<div>
				<h1>Song list</h1>
			</div>
		);
	}
}

export default connect()(SongList);
