<template>
  <div v-if="$route.name !== 'admin'">
    <p
      class="text-center"
      style="
        color: #73b925;
        margin-top: 50px;
        letter-spacing: 1px;
        font-weight: bold;
      "
    >
      Our Blog
    </p>
    <p class="text-center" style="font-weight: bold; font-size: 40px">
      Recent From Blog
    </p>
  </div>

  <div v-if="$route.name === 'admin'">
    <p class="text-center" style="font-weight: bold; font-size: 40px">
      Admin side
    </p>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(blog, i) in blogs" :key="i">
        <div class="blog-card" style="height: 500px">
          <div class="card-body">
            <RouterLink :to="'blog/' + blog.id" style="text-decoration: none;" class="title-link">
              <p style="font-weight: bold; font-size: 20px" class="blog-name">
                {{ blog.title }}
              </p>
            </RouterLink>
            <p class="blog-desc">
              {{ blog.body }}
            </p>
            <img :src="blog.img" width="280" height="300" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDuratecStore } from "@/store/index.js";
export default {
  name: "Blog",
  computed: {
    ...mapState(useDuratecStore, ["blogs"]),
  },
  methods: {
    ...mapActions(useDuratecStore, ["fetchBlog"]),
  },
  created() {
    this.fetchBlog();
  },
};
</script>
 
<style>
.title-link:hover {
  cursor: pointer;
  color: #73b925;
  transition: 0.3s ease;
}
.title-link {
  color: black;
}
.blog-desc {
  opacity: 0.5;
  font-size: 15px;
}

.blog-card {
  background-color: white;
  width: 300px;
  font-weight: bold;
  height: 280px;
  margin-top: 30px;
  padding-right: 10px;
  padding-left: 10px;
}

.button-spacing {
  margin-right: 45px;
}
</style>
