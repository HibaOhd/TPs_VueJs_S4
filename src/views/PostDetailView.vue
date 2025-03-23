<template>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <TagCloud />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import getPost from '@/composables/getPost.js';
  import TagCloud from '@/components/TagCloud.vue';
  
  const route = useRoute();
  const post = ref(null);
  
  onMounted(async () => {
    post.value = await getPost(route.params.id);
  });
  </script>
  