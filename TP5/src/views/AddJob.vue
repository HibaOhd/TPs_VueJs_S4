<template>
    <div>
      <h1>Ajouter un emploi</h1>
      <form @submit.prevent="submitJob">
        <label>Titre :</label>
        <input v-model="job.titre" required />
        <label>Description :</label>
        <textarea v-model="job.description" required></textarea>
        <label>Salaire :</label>
        <input v-model="job.salaire" required />
        <label>Date de création :</label>
        <input type="date" v-model="job['date de création']" required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        job: {
          titre: "",
          description: "",
          salaire: "",
          "date de création": "",
        },
      };
    },
    methods: {
      submitJob() {
        // Simuler l'ajout d'un emploi
        console.log("Emploi ajouté :", this.job);
        this.$router.push('/');
      },
    },
  };
  </script>