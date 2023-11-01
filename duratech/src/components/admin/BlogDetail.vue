<template>
  <div class="jumbotron container mt-5 p-5">
    <div class="row">
      <div class="col-md-6">
        <img :src="blog.img" style="height: 300px; width: 600px;" alt="#" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <p style="font-weight: bold; margin-top: 10px; font-size: 40px">
          {{ blog.title }}
        </p>
        <p
          style="
            opacity: 0.5;
            margin-top: 24px;
            font-weight: bold;
            font-size: 16px;
            letter-spacing: 1px;
          "
        >
          {{ blog.body }}
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDuratecStore } from "../../store/index.js";
export default {
  name: "BlogDetail",
  computed: {
    ...mapState(useDuratecStore, ["blog"]),
  },
  methods: {
    ...mapActions(useDuratecStore, ["fetchBlogDetail"]),
  },
  created() {
    this.fetchBlogDetail(this.$route.params.id);
  },
};
</script>
