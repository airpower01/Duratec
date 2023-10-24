<template>
  <div class="header" style="height: 150px;">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3 text-white p-1 mt-4">
          <span style="color: #72cd23; font-size: 30px;"><img src="../assets/logo_landscape.png" width="150" alt=""></span>
        </div>

        <div class="col-md-3 d-flex mt-4">
          <i class="fa fa-paper-plane mt-3 mr-2 fa-lg" style="color: #72cd23;"></i>
          <div class="text-white p-1 text-right">
            <span style="color:#72cd23">Email: </span>
            <span style="color:black">info@gmail.com</span>
          </div>
        </div>
        <div class="col-md-3 d-flex mt-4 ">
          <i class="fa fa-phone mt-3 mr-2 fa-lg" style="color: #72cd23;"></i>
          <div class="text-white p-1 text-right"> 
            <span style="color: #72cd23">Call Us </span>
            <span style="color:black">0883928221222</span>
          </div>
        </div>
        <div class="col-md-2 d-flex mt-4 ">
          <i class="fa fa-map mt-3 mr-2 fa-lg" style="color: #72cd23;"></i>
          <div class="text-white p-1 text-right"> 
            <span style="color: #72cd23">Location </span>
            <span style="color:black">Jakarta</span>
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
  