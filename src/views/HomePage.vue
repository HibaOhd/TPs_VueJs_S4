<template>
    <div>
      <h1>Liste des emplois disponibles</h1>
      <FilterNav @filter="handleFilter" />
    <router-link to="/add">
      <button>Ajouter un emploi</button>
      <AddJob @add-job="addJob" />
    </router-link>
      <ul>
        <li v-for="job in filteredJobs" :key="job.id">
          <router-link :to="`/job/${job.id}`">
            <h2>{{ job.titre }}</h2>
            <p>{{ job.description }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import FilterNav from '@/components/FilterNav.vue';
  export default {
    components: {
    FilterNav,
    },
    data() {
      return {
        jobs: [
          {
            id: 1,
            titre: "Développeur Web",
            description: "Responsable de la création et de la maintenance de sites web modernes et responsives.",
            salaire: "35 000 MAD/an",
            "date de création": "2025-03-17",
          },
          {
            id: 2,
            titre: "Data Analyst",
            description: "Analyse des données pour aider à la prise de décision stratégique.",
            salaire: "50 000 MAD/an",
            "date de création": "2025-03-15",
          },
          {
            id: 3,
            titre: "Chef de Projet IT",
            description: "Gestion de projets informatiques de bout en bout, coordination des équipes techniques.",
            salaire: "70 000 MAD/an",
            "date de création": "2025-03-10",
          },
          {
            id: 4,
            titre: "Ingénieur Logiciel",
            description: "Développement d'applications logicielles robustes et performantes pour divers clients.",
            salaire: "60 000 MAD/an",
            "date de création": "2025-02-28",
          },
          {
            id: 5,
            titre: "Designer UX/UI",
            description: "Création d'interfaces utilisateur intuitives et attrayantes pour améliorer l'expérience client.",
            salaire: "40 000 MAD/an",
            "date de création": "2025-03-01",
          },
          {
            id: 6,
            titre: "Responsable Marketing Digital",
            description: "Élaboration de stratégies de marketing en ligne pour accroître la visibilité de l'entreprise.",
            salaire: "55 000 MAD/an",
            "date de création": "2025-02-25",
          },
          {
            id: 7,
            titre: "Consultant en Cybersécurité",
            description: "Conseiller les entreprises sur la sécurisation de leurs systèmes informatiques et réseaux.",
            salaire: "80 000 MAD/an",
            "date de création": "2025-03-12",
          },
          {
            id: 8,
            titre: "Technicien Réseaux",
            description: "Installation, configuration et maintenance des équipements réseau.",
            salaire: "30 000 MAD/an",
            "date de création": "2025-02-20",
          },
          {
            id: 9,
            titre: "Assistant Administratif",
            description: "Gestion administrative, accueil téléphonique et suivi des dossiers clients.",
            salaire: "25 000 MAD/an",
            "date de création": "2025-03-05",
          },
          {
            id: 10,
            titre: "Commercial B2B",
            description: "Prospection et gestion d'un portefeuille de clients professionnels.",
            salaire: "45 000 MAD/an",
            "date de création": "2025-03-14",
          },
        ],
        filterText: "",
    };
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter((job) =>
        job.titre.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
  },
  methods: {
    handleFilter(filterText) {
      this.filterText = filterText;
    },
    addJob(newJob) {
    this.jobs.push(newJob); 
  },

  },
};
</script>
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h2 {
    margin: 0;
  }
  p {
    margin: 5px 0;
  }
  </style>