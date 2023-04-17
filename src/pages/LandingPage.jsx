import react from 'react'
import { HeroComponent } from '../components/hero/HeroComponent'

import './LandingPage.scss';

const LandingPage = () => {
	
	return (
		<div className="main-container container">
			<HeroComponent/>
		
			<section className="new">
				<h2>New</h2>
	
				<article className="new-container">
					<h3>Hydrogen VS Electric Cars</h3>
					<p>Will hydrogen-fueled cars ever catch up to EVs?</p>
				</article>
				<article className="new-container">
					<h3>The Downsides of AI Artistry</h3>
					<p>What are the possible adverse effects of on-demand AI image generation?</p>
				</article>
				<article className="new-container">
					<h3>Is VC Funding Drying Up?</h3>
					<p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
				</article>
			</section>
	
			<section className="grid-cards container">
				<article className="grid-card">
					<figure className="card-figure">
						<img className="card-img" src="images/image-retro-pcs.jpg" alt="retro pcs image"/>
					</figure>
					<div className="card-texts">
						<h2>01</h2>
						<h3>Reviving Retro PCs</h3>
						<p>What happens when old PCs are given modern upgrades?</p>
					</div>
				</article>
	
				<article className="grid-card">
					<figure className="card-figure">
						<img className="card-img" src="images/image-top-laptops.jpg" alt="laptops image"/>
					</figure>
					<div className="card-texts">
						<h2>02</h2>
						<h3>Top 10 Laptops of 2022</h3>
						<p>Our best picks for various needs and budgets.</p>
					</div>
				</article>
	
				<article className="grid-card">
					<figure className="card-figure">
						<img className="card-img" src="images/image-gaming-growth.jpg" alt="gaming image"/>
					</figure>
					<div className="card-texts">
						<h2>03</h2>
						<h3>The Growth of Gaming</h3>
						<p>How the pandemic has sparked fresh opportunities.</p>
					</div>
				</article>
			</section>
		</div>
	)
}

export default LandingPage