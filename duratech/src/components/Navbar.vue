<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="
      background-color: #7bd22b;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
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
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'home' }"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'about' }"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'services' }"
              >Services</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'products' }"
              >Products</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'blog' }"
              >Blog</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'contact' }"
              >Contact</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav" v-if="$route.name === 'admin'">
          <li class="nav-item">
            <button class="nav-link">Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    handleSignOut() {
      signOut(auth).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap");

.navbar-nav > li > a {
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 15px;
  margin-right: 20px;
  color: white;
}

.navbar-toggler {
  padding: 0.2rem 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
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
