<template>
  <div class="filter-nav">
    <input
      v-model="filterText"
      placeholder="Filtrer par titre"
      @input="applyFilter"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: "", // Texte de filtrage saisi par l'utilisateur
    };
  },
  methods: {
    applyFilter() {
      // Émettre un événement avec le texte de filtrage
      this.$emit("filter", this.filterText);
    },
  },
};
</script>

<style scoped>
.filter-nav {
  margin-bottom: 20px;
}
input {
  padding: 8px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>