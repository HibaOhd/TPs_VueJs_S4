<template>
    <div>
      <span v-for="tag in uniqueTags" :key="tag">
        <router-link :to="`/tags/${tag}`">#{{ tag }}</router-link>
      </span>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import getPosts from '@/composables/getPosts.js';
  
  const posts = await getPosts();
  const uniqueTags = computed(() => {
    const tags = posts.flatMap(post => post.tags);
    return [...new Set(tags)];
  });
  </script>
  