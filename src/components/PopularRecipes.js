import React from 'react'

function PopularRecipes({developer}) {
  return (
    <div>
		<div class="w3-display-container">
		{/*Section: Content */}
			<div class="w3-content w3-padding">
			{/*Section: Popular Recipes */}
				<div class="w3-container w3-padding-32" id="popular_recipes">
					{/* Section: Section Title*/}
					<div className='popular-text'>Popular Recipes</div>
					
					{/* Section: Image Row */}
					<div class="w3-row-padding w3-padding-16 w3-center" id="food">
						{/* Image */}
						<div class="w3-quarter">
							<a href="https://www.themediterraneandish.com/tabouli-salad/">
							{/*<img style={{width:100%}} src={"https://www.themediterraneandish.com/wp-content/uploads/2016/03/Tabouli-Recipe-9.jpg"} alt="Tabouli"/>*/}
							</a>
							<h3>Tabouli Salad Recipe</h3>
							<p>Tabouli salad or Tabbouleh is a simple Mediterranean salad of very finely chopped vegetables, lots of fresh parsley and bulgur wheat, all tossed with lime juice and olive oil.</p>
						</div>
						
						{/* Image */}
						<div class="w3-quarter">
							<a href="https://www.allrecipes.com/recipe/219024/best-mud-pie/">
							{/*<img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4536849.jpg&w=596&h=596" alt="Mud Pie" style={{width: 100%}}/>*/}
							</a>
							<h3>Best Mud Pie</h3>
							<p>A dynamite version of mud pie made by layering ice cream, chocolate fudge sauce, and cookies!</p>
						</div>
						
						{/* Image */}
						<div class="w3-quarter">
							<a href="https://www.thekitchn.com/how-to-roast-any-vegetable-101221">
							{/*<img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_1022/k%2Farchive%2Ff30788d475aa6cbe2b72c143eab1a5d237ac45ec" alt="Roast Vegetables" style={{width:100%}}/>*/}
							</a>
							<h3>How To Roast Any Vegetable</h3>
							<p>I am a firm believer in the power of a roasted vegetable. Not only can virtually every vegetable be cooked in this way — no recipe required — but roasted vegetables are also universally pleasurable to eat.</p>
						</div>
						
						{/* Image */}
						<div class="w3-quarter">
							<a href="https://www.delish.com/cooking/recipe-ideas/recipes/a53296/easy-fish-taco-recipe/">
							{/*<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190307-fish-tacos-112-1553283299.jpg?crop=0.770xw:0.651xh;0.121xw,0.0179xh&resize=768:*" alt="Fish Tacos" style="width:100%"/>*/}
							</a>
							<h3>Perfect Fish Tacos</h3>
							<p>Love fish tacos? Well, these are the end-all be-all.</p>
						</div>
					</div>
				</div>
			</div>
			{/* End page content */}
		</div>
	
		<style>
			@import url('https://www.w3schools.com/w3css/4/w3.css')
		</style>
		<style jsx='true'>
			{`
				.popular-text {
					font-family: Sedan;
					margin: 0 auto;
					text-align: center;
					font-size: 32px;
					color: var(--c-brown);
					text-decoration: none;
				}
			`}
		</style>
    </div>
  )
}

export default PopularRecipes
