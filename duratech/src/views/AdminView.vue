<template>
  <div v-if="$route.name === 'admin'">
    <p class="text-center" style="font-weight: bold; font-size: 40px">
      Admin side
    </p>
  </div>
  <AdminTable/>
</template>

<script>
import AdminTable from '../components/admin/AdminTable.vue'
export default {
  name: "AdminView",
  components: {
    AdminTable
  }

};
</script>
