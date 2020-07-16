import React from 'react';
import Landscape from './Landscape';
import Trucks from './Trucks';
import Boats from './Boats';
import Frog from './Frog';

function World() {
	return (
		<div className="world">
			<Landscape />
			<Trucks />
			<Boats />
			<Frog />
		</div>
	);
}

export default World;
