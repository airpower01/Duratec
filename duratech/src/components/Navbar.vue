<template>
  <nav
    class="navbar sticky-top navbar-expand-lg navbar-light"
    style="
      background-color: black;
      position: sticky !important;
      width: 100%;
      z-index: 10;
      transition: background-color 0.3s;
    "
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            :class="{ 'active-link': $route.name === 'home' }"
          >
            <RouterLink class="nav-link" :to="{ name: 'home' }"
              >Home</RouterLink
            >
            <div></div>
          </li>
          <li
            class="nav-item"
            :class="{ 'active-link': $route.name === 'about' }"
          >
            <RouterLink class="nav-link" :to="{ name: 'about' }"
              >About</RouterLink
            >
          </li>
          <li
            class="nav-item"
            :class="{ 'active-link': $route.name === 'services' }"
          >
            <RouterLink class="nav-link" :to="{ name: 'services' }"
              >Services</RouterLink
            >
          </li>
          <li
            class="nav-item"
            :class="{ 'active-link': $route.name === 'products' }"
          >
            <RouterLink class="nav-link" :to="{ name: 'products' }"
              >Products</RouterLink
            >
          </li>
          <li
            class="nav-item"
            :class="{
              'active-link':
                $route.name === 'blog' || $route.name === 'BlogDetail',
            }"
          >
            <RouterLink class="nav-link" :to="{ name: 'blog' }"
              >Blog</RouterLink
            >
          </li>
          <li
            class="nav-item"
            :class="{ 'active-link': $route.name === 'contact' }"
          >
            <RouterLink class="nav-link" :to="{ name: 'contact' }"
              >Contact</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav" v-if="$route.name === 'admin'">
          <li class="nav-item">
            <button class="nav-link" @click.prevent="handleSignOut">
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { signOut, getAuth } from "firebase/auth";
// const auth = getAuth()

export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    handleSignOut() {
      getAuth()
        .signOut()
        .then(() => {
          console.log("user signed out");
          this.$router.push("/");
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap");

.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 15px;
  margin-right: 20px;
  color: #9d9d9d;
}
.active-link {
  position: relative;
  font-weight: bold;
}

.active-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 3px;
  background-color: white;
  animation: underlineAnimation 0.5s ease backwards;
}
@keyframes underlineAnimation {
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
}

.navbar-toggler {
  padding: 0.2rem 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: white !important;
  color: white;
}

.nav-link {
  color: white !important;
}

.nav-link::selection {
  color: white !important;
}

.navbar-brand {
  color: white;
  margin-bottom: 4px;
  font-size: 27px;
}
</style>
