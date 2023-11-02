<template>
  <div>
    <input type="file" ref="file" />
    <button @click="upload">upload</button>
  </div>
</template>

<script>
import { ref, uploadBytes, getStorage } from "firebase/storage";

export default {
  name: "ImageUploader",
  methods: {
    upload() {
      console.log(this.$refs.file.files[0]);
      const storageRef = ref(getStorage(), "blog/test_image.png");
      uploadBytes(storageRef, this.$refs.file.files[0]).then((snapshot) => {
        console.log("uploaded");
      });
    },
  },
};
</script>
