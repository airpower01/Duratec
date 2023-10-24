<template>
  <p class="text-center" id="title">SERVICES</p>
  <p class="text-center" id="text-1">
    Over <span style="color: #7bd22b">40K+</span> People Working with us
  </p>

  <div class="services-boxed">
    <div class="container">
      <div class="row people">
        <div class="col-md-4 col-lg-3 item">
          <div class="box">
            <img class="rounded-circle" src="../assets/img/hanbell_screw.png" />
            <h3 class="name">Recyling</h3>
            <p class="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
              semper massa.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 item">
          <div class="box">
            <img class="rounded-circle" src="../assets/img/hanbell_screw.png" />
            <h3 class="name">Water Refine</h3>
            <p class="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
              semper massa.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 item">
          <div class="box">
            <img class="rounded-circle" src="../assets/img/hanbell_screw.png" />
            <h3 class="name">Recyling</h3>
            <p class="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
              semper massa.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 item">
          <div class="box">
            <img class="rounded-circle" src="../assets/img/hanbell_screw.png" />
            <h3 class="name">Water Refine</h3>
            <p class="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
              semper massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style>
.services-boxed {
  color: #313437;
}

.services-boxed p {
  color: #7d8285;
}

.services-boxed h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: inherit;
}

.services-boxed h2 {
  margin-bottom: 25px;
  padding-top: 25px;
  font-size: 24px;
}

.services-boxed .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

.services-boxed .intro p {
  margin-bottom: 0;
}

.services-boxed .people {
  padding: 50px 0;
}

.services-boxed .item {
  text-align: center;
}

.services-boxed .item .box {
  text-align: center;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
}

.services-boxed .item .name {
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 8px;
}

.services-boxed .item .title {
  text-transform: uppercase;
  font-weight: bold;
  color: #d0d0d0;
  letter-spacing: 2px;
  font-size: 13px;
}

.services-boxed .item .description {
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.services-boxed .item img {
  max-width: 160px;
}

.services-boxed .social {
  font-size: 18px;
  color: #a2a8ae;
}

.services-boxed .social a {
  color: inherit;
  margin: 0 10px;
  display: inline-block;
  opacity: 0.7;
}

.services-boxed .social a:hover {
  opacity: 1;
}

#title {
  color: #7bd22b;
  font-weight: bold;
  margin-top: 70px;
}

#text-1 {
  font-weight: bold;
  font-size: xx-large;
}
</style>
