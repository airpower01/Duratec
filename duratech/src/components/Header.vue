<template>
  <div class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-2 text-white p-1 mt-4">
          <span style="color: #72cd23; font-size: 30px;">TES LOGO</span>
        </div>

        <div class="col-md-2 d-flex mt-4">
          <i class="fa fa-paper-plane mt-3 mr-2 fa-lg" style="color: #72cd23;"></i>
          <div class="text-white p-1 text-right"> <!-- Add text-right class here -->
            <span style="color:#72cd23">Email:</span>
            <span style="color:#b5c3b1">info@gmail.com</span>
          </div>
        </div>
        <div class="col-md-2 d-flex mt-4 ">
          <i class="fa fa-phone mt-3 mr-2 fa-lg" style="color: #72cd23;"></i>
          <div class="text-white p-1 text-right"> <!-- Add text-right class here -->
            <span style="color: #72cd23">Call Us</span>
            <span style="color:#b5c3b1">0883928221222</span>
          </div>
        </div>
        <div class="col-md-2 d-flex mt-4 ">
          <i class="fa fa-map mt-3 mr-2 fa-lg" style="color: #72cd23;"></i>
          <div class="text-white p-1 text-right"> <!-- Add text-right class here -->
            <span style="color: #72cd23">Location</span>
            <span style="color:#b5c3b1">Jakarta</span>
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
    background-color: #1a2015;
    padding: 20px 0; /* Increase padding for better spacing */
  }
  
  .row {
    font-size: 14px;
  }
  </style>
  