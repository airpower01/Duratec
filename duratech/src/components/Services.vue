<template>
<p class="text-center " id="title">SERVICES</p>
<p class="text-center" id="text-1" >Over <span style="color: #7bd22b ;">40K+</span> People Working with us</p>

<div class="container mr-2">
  <div class="row">
    <div class="col-md-2 mr-3">
      <div class="card">
        <iconify-icon icon="mdi:recycle" style="color: #7bd22b; margin-left: 75px;" width="50" class="card-icon"></iconify-icon>
        <div class="card-body">
          <h5 class="card-title">Recyling</h5>
          <p class="card-text">This is the content of Card 1.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 mr-3">
      <div class="card">
        <iconify-icon icon="ion:water-outline" style="color: #7bd22b; margin-left: 75px;" width="50" class="card-icon"></iconify-icon>
        <div class="card-body">
          <h5 class="card-title">Water Refine</h5>
          <p class="card-text">This is the content of Card 2.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 mr-3">
      <div class="card">
        <iconify-icon icon="game-icons:plants-and-animals" style="color: #7bd22b;  margin-left: 75px" width="50" class="card-icon"></iconify-icon>
        <div class="card-body">
          <h5 class="card-title">Ecosystem</h5>
          <p class="card-text">This is the content of Card 3.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 mr-3">
      <div class="card">
        <iconify-icon icon="mdi:solar-energy-outline" style="color: #7bd22b; margin-left: 75px" class="card-icon" width="50"></iconify-icon>
        <div class="card-body">
          <h5 class="card-title">Solar Energy</h5>
          <p class="card-text">This is the content of Card 4.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 mr-3">
      <div class="card">
        <iconify-icon icon="ion:earth-outline" style="color: #7bd22b; margin-left: 75px" class="card-icon" width="50"></iconify-icon>
        <div class="card-body">
          <h5 class="card-title">Save Animals</h5>
          <p class="card-text">This is the content of Card 5.</p>
        </div>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
export default {
    name: 'Services'
}
</script>

<style>
@keyframes mymove {
  from {top: 100px;}
  50%  {top: 100px !important;} 
  to   {top: 0px;}
}

.card {
    width: 200px;
    font-weight: bold;
    height: 300px;
    animation: mymove 1.5s;
}

h5 {
    font-weight: bold;
}
.card:hover{
    color: white;
    background-color: #7bd22b;
    cursor: pointer;
}

.card-text {
  opacity: 0.5;
}

.card:hover .card-icon {
    color: white; /* Change the icon color to white when the card is hovered */
}

#title {
 color: #7bd22b;
 font-weight: bold;
 margin-top: 70px;
}

#text-1 {
    font-weight: bold;
    font-size:xx-large;
}

</style>