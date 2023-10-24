<template>
  <div class="container-fluid p-0 mt-5">
    <section
      class="jumbotron text-center"
      style="
        background-image: url('https://cdn.discordapp.com/attachments/1020018520836284586/1164412214216773692/pexels-liis-saar-832521_3.jpg?ex=65431e61&is=6530a961&hm=e3e665d60c6521631552458612798ad7b6cff3873275738974ce23582df611ec&');
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div>
              <p
                style="
                  font-weight: bold;
                  font-size: 12px;
                  letter-spacing: 1px;
                  color: white;
                "
              >
                NEWSLETTER
              </p>
              <p style="font-weight: bold; font-size: 30px; color: white">
                Subscribe for Newsletter
              </p>
            </div>
          </div>
          <div class="col-md-3 text-right">
            <button class="subscribe-button">
              <p class="subscribe-text">SUBSCRIBE NOW!</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div class="footer-col">
            <div style="margin-bottom: 20px">
              <p>logo</p>
            </div>
            <div style="margin-top: 10px; margin-bottom: 20px; font-weight;">
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div>
              <iconify-icon
                icon="fa-brands:twitter-square"
                style="color: #73b925; margin-right: 3px"
                width="25"
              ></iconify-icon>
              <iconify-icon
                icon="fa-brands:facebook-square"
                style="color: #73b925; margin-right: 3px"
                width="25"
              ></iconify-icon>
              <iconify-icon
                icon="fa-brands:instagram-square"
                style="color: #73b925; margin-right: 3px"
                width="25"
              ></iconify-icon>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footer-col">
            <div style="font-weight: bold">
              <p>Services</p>
            </div>
            <div></div>
            <div>
              <p>Recycling</p>
            </div>
            <div>
              <p>Water Refine</p>
            </div>
            <div>
              <p>Ecosystem</p>
            </div>
            <div>
              <p>Solar Energy</p>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footer-col">
            <div style="margin-top: 35px;">
              <p>Save Animals</p>
            </div>
            <div>
              <p>Plant Ecology</p>
            </div>
            <div>
              <p>Dynamic Ecology</p>
            </div>
            <div>
              <p>Tree Planting</p>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footer-col">
            <div style="font-weight: bold">Recent posts</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="footer-col">
            <div style="font-weight: bold">Have a questions?</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="copyright">
    <p>&copy; Copyright ©2023 PT Petrotec Air Power</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.subscribe-button {
  background-color: #fff;
  margin-top: 15px;
  color: #73b925;
  font-weight: bold;
  letter-spacing: 2px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.subscribe-button:hover {
  box-shadow: none;
}

.subscribe-text {
  margin-top: 15px;
  padding-left: 30px;
  padding-right: 30px;
}

.footer {
  background-color: #262a25;
  color: #fff;
  padding: 50px;
}

.footer-col {
  padding: 15px;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
}

.copyright {
  background-color: #262a25;
  color: #fff;
  padding: 50px;
  text-align: center;
}
</style>
