<template>
    <nav>
      <router-link to="/">🏠 Accueil</router-link>
      <router-link to="/addPost">📝 Ajouter un Post</router-link>
    </nav>
  </template>
  
  <style scoped>
  nav {
    display: flex;
    gap: 15px;
    background: #333;
    padding: 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  