<template>
  <div class="header" style="height: auto; padding: 20px 0;" v-if="$route.name !== 'admin'">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-2 col-sm-6 text-center text-md-left">
          <span style="color: #72cd23; font-size: 30px;"><img src="../assets/logo_landscape.png" width="150" alt=""></span>
        </div>
        
        <div class="col-md-2 col-sm-6 mt-2">
          <div class="d-flex align-items-center">
            <i class="fa fa-paper-plane mt-3 mr-2 fa-lg" style="color: #72cd23;"></i>
            <div class="text-white p-2 text-right">
              <span style="color: #72cd23; font-weight: bold;">Email: </span>
              <span style="color: black; font-weight: bold;">info@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div class="col-md-2 col-sm-6 mt-2">
          <div class="d-flex align-items-center">
            <i class="fa fa-phone mt-3 mr-2 fa-lg" style="color: #72cd23;"></i>
            <div class="text-white p-2 text-right"> 
              <span style="color: #72cd23; font-weight: bold;">Call Us </span>
              <span style="color: black; font-weight: bold;">0883928221222</span>
            </div>
          </div>
        </div>

        <div class="col-md-2 col-sm-6 mt-2">
          <div class="d-flex align-items-center">
            <i class="fa fa-map mt-3 mr-2" style="color: #72cd23;"></i>
            <div class="text-white p-2 text-right"> 
              <span style="color: #72cd23; font-weight: bold;">Location </span>
              <span style="color: black; font-weight: bold;">Jakarta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style>
  .header {
    background-color: white;
    padding: 20px 0; /* Increase padding for better spacing */
  }
  
  .row {
    font-size: 14px;
  } 
 
  </style>
  