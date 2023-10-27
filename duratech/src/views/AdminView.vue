<template>
  <div v-if="$route.name === 'admin'">
    <p class="text-center" style="font-weight: bold; font-size: 40px">
      Admin side
    </p>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Date</th>
        <th scope="col">Updated Date</th>
        <th scope="col">Title</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody v-for="(blog, i) in blogs" :key="i">
      <tr>
        <th scope="row">{{ i + 1 }}.</th>
        <td>{{ blog.create_date }}</td>
        <td>{{ blog.update_date }}</td>
        <td><RouterLink :to="blog._link">{{ blog.title }}</RouterLink></td>
        <td>
          <button class="btn fw-bold btn-outline-primary">Update</button>
          

          <button class="btn fw-bold btn-outline-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDuratecStore } from "@/store/index.js";
import Blog from "@/components/Blog.vue";
export default {
  name: "AdminView",
  components: {
    Blog,
  },
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
