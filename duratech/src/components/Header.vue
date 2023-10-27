<template>
  <div class="header" v-if="$route.name !== 'admin'">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3 col-sm-6 text-center text-md-left">
          <img src="@/assets/logo_landscape.png" width="150" alt="Logo" />
        </div>

        <div class="col-md-3 col-sm-6 mt-2" v-for="(message, i) in messages" :key="i">
          <div class="d-flex align-items-center">
            <div class="p-3 text-right">
              <i :class="message.icon" style="margin-right: 5px; color: #72cd23;"></i>
              <span>{{ message.title }}: </span>
              <span  class="fw-bold"> {{ message.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      messages: [
        {
          icon: "fa fa-paper-plane mt-3 mr-2 fa-lg",
          title: "Email",
          content: "info@gmail.com",
        },
        {
          icon: "fa fa-phone mt-3 mr-2 fa-lg",
          title: "Call Us",
          content: "0899737427323",
        },
        {
          icon: "fa fa-map mt-3 mr-2",
          title: "Location",
          content: "Jakarta - Indonesia",
        },
      ],
    };
  },
};
</script>

<style>
.header {
  background-color: white;
  padding: 20px 0;
}

.row {
  font-size: 14px;
}
</style>
