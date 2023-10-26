<template>
  <div v-if="$route.name !== 'admin'">
    <p
      class="text-center"
      style="color: #73b925; letter-spacing: 1px; font-weight: bold"
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
            <p style="font-weight: bold; font-size: 20px" class="blog-name">
              {{ blog.title }}
            </p>
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
import { mapActions, mapState } from 'pinia';
import { useDuratecStore } from '@/store/index.js'
export default {
  name: "Blog",
  computed: {
    ...mapState(useDuratecStore, ['blogs'])
  },
  methods: {
    ...mapActions(useDuratecStore, ['fetchBlog'])
  },
  created() {
    this.fetchBlog();
  }
  // data() {
  //   return {
  //     isAuthenticated: localStorage.token,
  //     cards: [
  //       {
  //         id: 1,
  //         title: "Deforestation is the Threat to Our Ecological System",
  //         description: "A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.",
  //         img: "https://i5.walmartimages.com/asr/881a58f3-88f0-4594-843e-38a6a7eb25e0_2.d3ffabf1d58e50baf8b06b75494e8f18.jpeg",
  //       },
  //       {
  //         id: 2,
  //         title: "Deforestation is the Threat to Our Ecological System",
  //         description: "A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.",
  //         img: "https://i5.walmartimages.com/asr/881a58f3-88f0-4594-843e-38a6a7eb25e0_2.d3ffabf1d58e50baf8b06b75494e8f18.jpeg",
  //       },
  //       {
  //         id: 3,
  //         title: "Deforestation is the Threat to Our Ecological System",
  //         description: "A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.",
  //         img: "https://i5.walmartimages.com/asr/881a58f3-88f0-4594-843e-38a6a7eb25e0_2.d3ffabf1d58e50baf8b06b75494e8f18.jpeg",
  //       },
  //       {
  //         id: 4,
  //         title: "Deforestation is the Threat to Our Ecological System",
  //         description: "A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.A small river named Duden flows by their place.",
  //         img: "https://i5.walmartimages.com/asr/881a58f3-88f0-4594-843e-38a6a7eb25e0_2.d3ffabf1d58e50baf8b06b75494e8f18.jpeg",
  //       },
  //     ],
  //   };
  // },
};
</script>

<style>
.blog-desc {
  opacity: 0.5;
  font-size: 15px;
}

.blog-name:hover {
  cursor: pointer;
  color: #73b925;
  transition: 0.3s ease;
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
