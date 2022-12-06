import React, { useState, useEffect } from 'react';
import './App.css';



function Time() {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			// console.log('watching');
			setDateState(new Date());
		}, 1000);
	}, []);
	return (
		<div className="MainTimeBox">
			
			<p className='Date'><span></span>
				{' '}
				{dateState.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				})}
			</p>
			
			<p className='Time'><span></span>
				{dateState.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})}
			</p>
		</div>
	);
}

export default Time;