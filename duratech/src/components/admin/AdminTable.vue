<template>
<div v-if="$route.name === 'admin'" class="d-flex justify-content-between mb-3 mt-3 p-5">
    <p class="text-center" style="font-weight: bold; font-size: 40px">
      Administrator Page
    </p>
    <p>
        <RouterLink :to="{name: 'NewBlog'}">  <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-color="dark">Add New Blog</button> </RouterLink>
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
        <td><RouterLink :to="'/blog/' + blog.id">{{ blog.title }}</RouterLink></td>
        <td>
          <RouterLink :to="'/blog/admin/update/' + blog.id" tes="bener"><button class="btn fw-bold btn-outline-primary">Update</button></RouterLink>
          
          <button class="btn fw-bold btn-outline-danger" @click.prevent="deleteBlog(blog.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {useDuratecStore} from '../../store/index.js'
export default {
  name: 'AdminTable',
  computed: {
    ...mapState(useDuratecStore, ["blogs"]),
  },
  methods: {
    ...mapActions(useDuratecStore, ["fetchBlog", "deleteBlog", "addBlog"]),
  },
  created() {
    this.fetchBlog();
  },
}
</script>