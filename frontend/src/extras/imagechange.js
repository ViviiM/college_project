import React, { useState, useEffect } from 'react';
import img1 from './Travel Image.jpeg';
import img2 from './TravelImage2.jpg';
import img3 from './Travel Image.jpeg';
import img4 from './TravelImage2.jpg';
import img5 from './Travel Image.jpeg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Imgchngr = () => {
	const images = [img1, img2, img3, img4, img5];
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 2000);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="image-container">
			<TransitionGroup>
				<CSSTransition
					key={currentImageIndex}
					timeout={500}
					classNames="fade"
				>
					<img src={images[currentImageIndex]} className='imgset' alt='Poparide' />
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

export default Imgchngr;