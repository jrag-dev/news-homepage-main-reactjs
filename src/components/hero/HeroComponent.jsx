import { Link } from 'react-router-dom';

import './HeroComponent.scss'

export function HeroComponent() {
	
	return (
		<section className="hero container">
			<div className="hero-container">
				<figure className="hero-img">
					<img className="hero-img" src="images/image-web-3-mobile.jpg" alt="hero mobile image"/>
				</figure>
				<article className="hero-texts">
					<h1>The Bright Future of Web 3.0?</h1>
					<div className="hero-texts-container">
						<p className="hero-paragraph">
							We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
							But is it really fulfilling its promise?
						</p>
						<Link className="hero-cta
						" to="#">Read more</Link>
					</div>	
				</article>
			</div>
		</section>
	)
}