<template>
  <p class="fw-bold text-center mt-3" style="font-size: 30px">New Blog Form</p>
  <div class="container">
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
import { mapActions } from "pinia";
import { useDuratecStore } from "@/store/index.js";
export default {
  name: "NewBlog",
  data() {
    return {
      input: {
        create_date: new Date().toLocaleDateString(),
        update_date: new Date().toLocaleDateString(),
        title: "",
        img: "",
        body: "",
      },
    };
  },
  methods: {
    ...mapActions(useDuratecStore, ["addBlog"]),
    handleSubmit() {
      this.addBlog(this.input);
      this.$router.push("/blog/admin");
    },
  },
};
</script>
