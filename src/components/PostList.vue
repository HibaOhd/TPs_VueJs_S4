<template>
    <div>
      <SinglePost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import SinglePost from './SinglePost.vue';
  import getPosts from '@/composables/getPosts.js';
  
  const posts = ref([]);
  
  onMounted(async () => {
    posts.value = await getPosts();
  });
  </script>
  