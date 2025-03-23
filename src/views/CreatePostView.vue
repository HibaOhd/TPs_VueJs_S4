<template>
    <form @submit.prevent="addPost">
      <input v-model="title" placeholder="Titre" required />
      <textarea v-model="body" placeholder="Contenu" required></textarea>
      <input v-model="tags" placeholder="Tags séparés par des virgules" />
      <button type="submit">Ajouter</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const title = ref('');
  const body = ref('');
  const tags = ref('');
  
  const addPost = async () => {
    await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        body: body.value,
        tags: tags.value.split(',').map(tag => tag.trim())
      })
    });
  };
  </script>
  