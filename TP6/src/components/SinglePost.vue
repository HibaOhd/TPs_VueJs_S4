<template>
    <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body.substring(0, 50) }}...</p>
      <router-link :to="`/post/${post.id}`">🔗 Lire plus</router-link>
    </div>
  </template>
  
<script setup>
defineProps({
  post: Object
});
</script>
  