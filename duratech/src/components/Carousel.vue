<template>
    <div class="container-lg">
	<div class="row">
		<div class="col-md-2">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
		
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
	
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="https://tse4.mm.bing.net/th?id=OIP.XPaOvSa-FzVuuecMseCVwgHaE8&pid=Api&P=0&h=180" class="img-fluid" alt="Notebook">
						<div class="carousel-caption">
	
						</div>
					</div>	
					<div class="carousel-item">
						<img src="https://tse1.mm.bing.net/th?id=OIP.A5kBJDTsza3C3UwpNc8GdgHaDd&pid=Api&P=0&h=180" class="img-fluid" alt="Tablet">
						<div class="carousel-caption">
							<h3>Amazing Digital Experience</h3>							
							<p>Nullam hendrerit justo non leo aliquet imperdiet. Etiam sagittis lectus condime dapibus.</p>
							<div class="carousel-action">
								<a href="#" class="btn btn-primary">Learn More</a>
								<a href="#" class="btn btn-success">Try Now</a>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img src="https://www.cultivart.com.au/wp-content/uploads/2017/05/BANNERS-1-6.jpg" class="img-fluid" alt="Workstation">
						<div class="carousel-caption">

						</div>
					</div>	
				</div>

			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    name:'Carousel'
}
</script>

<style>
.carousel {
    width: 100%;
    background: #ccc;
  	position: relative;
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.carousel:after {
	content: "";
    position: absolute;
    z-index: -1;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
    height: 60px;
    bottom: 0px;
    left: 10px;
    right: 10px;
    border-radius: 100px / 20px;
}
.carousel .item {
    text-align: center;
	overflow: hidden;
    height: 475px;
}
.carousel .item img {
	max-width: 100%;
    /* margin: 0 auto; Align slide image horizontally center in Bootstrap v3 */
}
.carousel .carousel-control {
	width: 50px;
    height: 100px;
    background: #000;
    margin: auto 0;
	opacity: 0.8;
}
.carousel .carousel-control:hover {
	opacity: 0.9;
}
.carousel .carousel-control i {
    font-size: 41px;
}
.carousel-caption h3, .carousel-caption p {
	color: #fff;
	display: inline-block;
	font-family: 'Oswald', sans-serif;
	text-shadow: none;
	margin-bottom: 20px;
}
.carousel-caption h3 {
	background: rgba(0,0,0,0.9);
	padding: 12px 24px;
	font-size: 40px;	
	text-transform: uppercase;
}
.carousel-caption p {
	background: #8fc93c;
	padding: 10px 20px;
	font-size: 20px;
	font-weight: 300;
}
.carousel-action {
	padding: 10px 0 30px;
}
.carousel-action .btn {
	min-height: 34px;
	border-radius: 0;
	margin: 3px;
	min-width: 150px;
	text-transform: uppercase;
	font-family: 'Oswald', sans-serif;
}
.carousel-action .btn-primary {
	border-color: #000;
	background: none;
	color: #000;
}
.carousel-action .btn-primary:hover {
	background: #000;
	color: #fff;
}
.carousel-action .btn-success {
	background: #8fc93c;
	border: none;
}
.carousel-action .btn-success:hover {
	background: #87bd35;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 11px;
	height: 11px;
	border-radius: 50%;
	margin: 1px 6px;
}
.carousel-indicators li {
	background: transparent;
	border: 1px solid #fff;
}
.carousel-indicators li.active {
	background: #8fc93c;
	border-color: #8fc93c;
}
</style>