<template>
  <div class="min-vh-100 d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-sm-7 mx-auto">
          <div class="shadow-lg">
            <div class="d-flex align-items-center">
              <div class="d-none d-md-block d-lg-block">
                <img
                  src="../assets/logo_potrait.png"
                  class="objectFit"
                  width="10"
                />
              </div>
              <div class="p-4" id="formPanel">
                <div class="text-center mb-5">
                  <h1 class="customHeading h3 text-uppercase">Login</h1>
                </div>
                <form onsubmit="event.preventDefault();submitForm()">
                  <div class="custom-form-group">
                    <label class="text-uppercase" for="username"
                      >Username</label
                    >
                    <input type="text" id="username" class="pb-1" /><span
                      class="pb-1"
                      ><i class="fa fa-user"></i
                    ></span>
                  </div>
                  <div class="custom-form-group mt-3">
                    <label class="text-uppercase" for="password"
                      >Password</label
                    >
                    <input type="password" id="password" class="pb-1" /><span
                      class="pb-1"
                      ><i
                        id="showCursor"
                        class="fa fa-eye-slash"
                        @click="showPassword($event)"
                      ></i
                    ></span>
                  </div>
                  <div class="mt-5">
                    <button class="w-100 p-2 d-block custom-btn">Login</button>
                  </div>
                </form>
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
  name: "AdminLogin",
  methods: {
    showPassword(event) {
      this.showPasswordEnabled = !this.showPasswordEnabled;
      const input = document.getElementById("password");
      input.type = this.showPasswordEnabled ? "text" : "password";
      event.target.className = this.showPasswordEnabled
        ? "fa fa-eye"
        : "fa fa-eye-slash";
    },
  },
};
</script>

<style>
.customHeading {
  color: #7bd22b;
}
.custom-form-group label {
  color: #7bd22b;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}
.custom-form-group span {
  width: 32px;
  border-bottom: 1px solid #7bd22b;
  vertical-align: middle;
  color: #7bd22b;
  display: inline;
}
.custom-form-group input {
  width: calc(100% - 32px);
  border: none;
  border-bottom: 1px solid #7bd22b;
  box-sizing: content-box;
  outline: none;
}
.custom-btn {
  border-radius: 32px;
  background: #7bd22b;
  border: 2px solid transparent;
  color: #fff;
  height: 48px;
}
.custom-btn:hover {
  background: #fff;
  border: none;
  border: 2px solid #7bd22b;
  color: #7bd22b;
}
#formPanel {
  min-width: 280px;
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
}
.objectFit {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
#showCursor {
  cursor: pointer;
}
</style>
