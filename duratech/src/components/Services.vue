<template>
<p class="text-center " id="title">SERVICES</p>
<p class="text-center" id="text-1" >Over <span style="color: #7bd22b ;">40K+</span> People Working with us</p>

<div class="container mr-2">
  <div class="row">
    <div class="col-md-2 mr-3">
      <div class="card">
        <i class="fa fa-leaf" aria-hidden="true"></i>
        <div class="card-body">
          <h5 class="card-title">Recyling</h5>
          <p class="card-text">This is the content of Card 1.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 mr-3">
      <div class="card">
        <i class="fa fa-leaf fa-lg" aria-hidden="true"></i>
        <div class="card-body">
          <h5 class="card-title">Water Refine</h5>
          <p class="card-text">This is the content of Card 2.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 mr-3">
      <div class="card">
        <i class="fa fa-leaf" aria-hidden="true"></i>
        <div class="card-body">
          <h5 class="card-title">Ecosystem</h5>
          <p class="card-text">This is the content of Card 3.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 mr-3">
      <div class="card">
        <i class="fa fa-leaf" aria-hidden="true"></i>
        <div class="card-body">
          <h5 class="card-title">Solar Energy</h5>
          <p class="card-text">This is the content of Card 4.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 mr-3">
      <div class="card">
        <i class="fa fa-leaf" aria-hidden="true"></i>
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
  50%  {top: 100px !important;} /* ignored */
  to   {top: 0px;}
}
.card {
    width: 200px;
    font-weight: bold;
    height: 300px;
    animation: mymove 1.5s 
}
h5 {
    font-weight: bold;
}
.card:hover {
    color: white;
    background-color: #7bd22b;
    cursor: pointer;
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