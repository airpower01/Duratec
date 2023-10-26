<template>
  <div
    class="header"
    style="height: auto; padding: 20px 0"
    v-if="$route.name !== 'admin'"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-2 col-sm-6 text-center text-md-left">
          <span style="color: #72cd23; font-size: 30px"
            ><img src="../assets/logo_landscape.png" width="150" alt=""
          /></span>
        </div>

        <div
          class="col-md-3 col-sm-6 mt-2 "
          v-for="(message, i) in messages"
          :key="i"
        >
          <div class="d-flex align-items-center">
            <i
             :class="message.icon"
              style="color: #72cd23"
            ></i>
            <div class="text-white p-3 text-right">
              <span style="color: #72cd23; font-weight: bold">
                {{ message.title }}
              </span>
              <span style="color: black; font-weight: bold"
                >{{ message.content }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "Header",
  setup() {
    const messages = ref([
      {
        icon:'fa fa-paper-plane mt-3 mr-2 fa-lg',
        title: 'Email',
        content:'info@gmail.com'
      },
      {
        icon:'fa fa-phone mt-3 mr-2 fa-lg',
        title: 'Call Us',
        content:'0899737427323'
      },
      {
        icon:'fa fa-map mt-3 mr-2',
        title: 'Location',
        content:'Jakarta - Indonesia'
      },
    ]);

    return { messages };
  },
};
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
