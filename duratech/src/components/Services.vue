<template>
  <p class="text-center" id="title">SERVICES</p>
  <p class="text-center" id="text-1">
    Over <span style="color: #7bd22b">40K+</span> People Working with us
  </p>

  <div class="container mr-2">
    <div class="row">
      <div class="col-md-2 mr-3">
        <div class="services-card">
          <iconify-icon
            icon="mdi:recycle"
            style="margin-left: 75px"
            width="50"
            class="card-icon"
          ></iconify-icon>
          <div class="card-body">
            <h5 class="card-title">Recyling</h5>
            <p class="card-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-2 mr-3">
        <div class="services-card">
          <iconify-icon
            icon="ion:water-outline"
            style="margin-left: 75px"
            width="50"
            class="card-icon"
          ></iconify-icon>
          <div class="card-body">
            <h5 class="card-title">Water Refine</h5>
            <p class="card-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-2 mr-3">
        <div class="services-card">
          <iconify-icon
            icon="game-icons:plants-and-animals"
            style="margin-left: 75px"
            width="50"
            class="card-icon"
          ></iconify-icon>
          <div class="card-body">
            <h5 class="card-title">Ecosystem</h5>
            <p class="card-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-2 mr-3">
        <div class="services-card">
          <iconify-icon
            icon="mdi:solar-energy-outline"
            style="margin-left: 75px"
            class="card-icon"
            width="50"
          ></iconify-icon>
          <div class="card-body">
            <h5 class="card-title">Solar Energy</h5>
            <p class="card-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-2 mr-3">
        <div class="services-card">
          <iconify-icon
            icon="ion:earth-outline"
            style="margin-left: 75px"
            class="card-icon"
            width="50"
          ></iconify-icon>
          <div class="card-body">
            <h5 class="card-title">Save Animals</h5>
            <p class="card-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
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
.card-icon {
  color: #7bd22b;
}
.services-card {
  background-color: white;
  width: 200px;
  font-weight: bold;
  height: 300px;
}

.card-title {
  font-weight: bold;
}
.services-card:hover {
  background-color: #7bd22b;
  color: white;
}
.services-card:hover .card-icon {
  color: white; 
}
.card-text {
  opacity: 0.5;
}

.services-card:hover .card-text {
  opacity: 1;
}

.card-icon:hover {
  color: white;
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
