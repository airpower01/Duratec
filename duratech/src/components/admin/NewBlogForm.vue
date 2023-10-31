<template>
  <div class="container">
    <form  @submit.prevent="handleSubmit">
      <div class="form-outline mb-4">
        <input type="text" id="Title" v-model="input.title" class="form-control" />
        <label class="form-label" for="name4">Title</label>
      </div>

      <div class="form-outline mb-4">
        <input type="text" id="image" v-model="input.img" class="form-control" />
        <label class="form-label" for="email4">Image</label>
      </div>

      <div class="form-outline mb-4">
        <textarea id="textarea4" rows="4" v-model="input.body" class="form-control"></textarea>
        <label class="form-label" for="textarea4">Description</label>
      </div>

      <button type="submit" class="btn btn-primary btn-block">Send</button>
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
        title: "",
        img: "",
        body: "",
      },
    };
  },
  methods: {
    ...mapActions(useDuratecStore, ["addBlog"]),
    handleSubmit() {
        this.addBlog(this.input)
    }

},
};
</script>
