<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style="height: 400px;">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/test_image.png" height="400" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item">
      <img src="../assets/test_image.png" height="400" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item">
      <img src="../assets/test_image.png" height="400" class="d-block w-100" alt="">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<script>
export default {
    name:'Carousel'
}
</script>

<style>
.carousel {
    background: #ccc;
  	position: relative;
	width: 100%;
}
.carousel:after {
	content: "";
    position: absolute;
    z-index: -1;
    height: 60px;
    bottom: 0px;
    left: 10px;
    right: 10px;
    border-radius: 100px / 20px;
}

.carousel .item img {
	max-width: 100%;
    margin: 0 auto;
}

.carousel .carousel-control {
	width: 50px;
    height: 50px;
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
	background: #73b925;
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
	background: #73b925;
	border: none;
}
.carousel-action .btn-success:hover {
	background: #73b925;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 11px;
	height: 11px;
	border-radius: 50%;
	margin: 1px 6px;
}
.carousel-indicators li {
	background-color: white;
	border: 1px solid #fff;
}
.carousel-indicators li.active {
	background: #73b925;
	border-color: #73b925;
}
</style>