<template>
  <p class="fw-bold text-center mt-3" style="font-size: 30px">
    Update Blog Form
  </p>
  <div class="container p-5`" v-if="blog">
    <form @submit.prevent="handleSubmit">
      <div class="form-outline mb-4">
        <input
          type="text"
          id="Title"
          v-model="input.title"
          class="form-control"
        />
        <label class="form-label" for="name4">Title</label>
      </div>

      <div class="form-outline mb-4">
        <input
          type="text"
          id="image"
          v-model="input.img"
          class="form-control"
        />
        <label class="form-label" for="email4">Image</label>
      </div>

      <div class="form-outline mb-4">
        <textarea
          id="textarea4"
          rows="4"
          v-model="input.body"
          class="form-control"
        ></textarea>
        <label class="form-label" for="textarea4">Description</label>
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
        <RouterLink to="/blog/admin">
          <button type="submit" class="btn btn-danger btn-block">Back</button>
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDuratecStore } from "@/store";
export default {
  name: "UpdateBlog",
  computed: {
    ...mapState(useDuratecStore, ["blog"]),
  },
  data() {
    return {
      input: {
        title: "",
        img: "",
        body: "",
      },
    };
  },
  methods: {
    ...mapActions(useDuratecStore, ["fetchBlogDetail", "updateBlog"]),
    handleSubmit() {
      this.updateBlog(this.$route.params.id, this.input);
      this.$router.push("/blog/admin");
    },
  },
  created() {
    this.fetchBlogDetail(this.$route.params.id);
    this.input.title = this.blog.title;
    this.input.img = this.blog.img;
    this.input.body = this.blog.body;
  },
};
</script>
