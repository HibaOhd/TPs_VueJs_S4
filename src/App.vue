<template>
  <div id="app">
    <header>
        <img src="@/assets/logo.jpg" alt="LOGO">
        <h1>Les Bonnes Pièces</h1>
    </header>
    <main>
        <!-- Menu de recherche -->
        <section class="filtres">
            <h3>Filtres</h3>
            <input type="text" placeholder="chercher" v-model ="SearchKey">
            <select size="1" v-model="selectedCateg">
                <option value="">--Sélectionner une Catégorie--</option>
                <option value="Électricité">Électricité</option>
                <option value="Filtration">Filtration</option>
                <option value="Moteur">Moteur</option>
                <option value="Freinage">Freinage</option>
                <option value="Refroidissement">Refroidissement</option>
                <option value="Suspension">Suspension</option>
                <option value="Sécurité">Sécurité</option>
                <option value="Transmission">Transmission</option>
                <option value="Carburant">Carburant</option>
                <option value="Carrosserie">Carrosserie</option>
                <option value="Échappement">Échappement</option>
                <option value="Direction">Direction</option>
            </select>
            <select size="1" v-model="selectedDisp">
                <option value="">--Disponibilité--</option>
                <option value="Dips">Disponible seulement</option>
            </select>
            <select size="1" v-model="selectedSort">
                <option value="">--Trier par prix--</option>
                <option value="Croi">Croissant</option>
                <option value="Dec">Décroissant</option>
            </select>
        </section>

        <!-- Fiches produits -->
        <section class="fiches">
        <div v-for="piece in filteredPieces" :key="piece.id" class="piece">
          <img :src="piece.picture" alt="Image de la pièce">
          <p>Nom : {{ piece.nom }}</p>
          <p>Prix : {{ piece.prix }} dh</p>
          <p>Disponibilité : {{ piece.Disponible ? 'Disponible' : 'Indisponible' }}</p>
          <button @click="ajouterAuPanier(piece)">Ajouter au panier</button> 
        </div>
        </section>
    </main>
    </div>
</template>

<script>
export default{
    data() {
        return {
            selectedSort : "",
            selectedCateg : "",
            selectedDisp : "",
            SearchKey : "" , 
            panier : [],
            Pieces : [
                {
                    "id": 1,
                    "nom": "Batterie 12V",
                    "prix": 120,
                    "categorie": "Électricité",
                    "Disponible":true,
                    "picture":"/images/image_batterie_12v.jpg"
                },
                {
                    "id": 2,
                    "nom": "Filtre à huile",
                    "prix": 15,
                    "categorie": "Filtration",
                    "Disponible":true,
                    "picture":"/images/image_filtre_huile.jpg"
                },
                {
                    "id": 3,
                    "nom": "Bougies d'allumage (x4)",
                    "prix": 35,
                    "categorie": "Moteur",
                    "Disponible":false,
                    "picture":"/images/image_bougies_allumage.jpg"
                },
                {
                    "id": 4,
                    "nom": "Disques de frein (x2)",
                    "prix": 80,
                    "categorie": "Freinage",
                    "Disponible":false,
                    "picture":"/images/image_disques_frein.jpg"
                },
                {
                    "id": 5,
                    "nom": "Courroie de distribution",
                    "prix": 90,
                    "categorie": "Moteur",
                    "Disponible":true,
                    "picture":"/images/image_courroie_distribution.jpg"
                },
                {
                    "id": 6,
                    "nom": "Pompe à eau",
                    "prix": 70,
                    "categorie": "Refroidissement",
                    "Disponible":false,
                    "picture":"/images/image_pompe_eau.jpg"
                },
                {
                    "id": 7,
                    "nom": "Amortisseurs arrière (x2)",
                    "prix": 150,
                    "categorie": "Suspension",
                    "Disponible":true,
                    "picture":"/images/image_amortisseurs_arriere.jpg"
                },
                {
                    "id": 8,
                    "nom": "Filtre à air",
                    "prix": 20,
                    "categorie": "Filtration",
                    "Disponible":true,
                    "picture":"/images/image_filtre_air.jpg"
                },
                {
                    "id": 9,
                    "nom": "Capteur ABS",
                    "prix": 50,
                    "categorie": "Sécurité",
                    "Disponible":true,
                    "picture":"/images/image_capteur_abs.jpg"
                },
                {
                    "id": 10,
                    "nom": "Radiateur de refroidissement",
                    "prix": 130,
                    "categorie": "Refroidissement",
                    "Disponible":false,
                    "picture":"/images/image_radiateur_refroidissement.jpg"
                },
                {
                    "id": 11,
                    "nom": "Alternateur",
                    "prix": 200,
                    "categorie": "Électricité",
                    "Disponible":true,
                    "picture":"/images/image_alternateur.jpg"
                },
                {
                    "id": 12,
                    "nom": "Démarreur",
                    "prix": 180,
                    "categorie": "Électricité",
                    "Disponible":false,
                    "picture":"/images/image_demarreur.jpg"
                },
                {
                    "id": 13,
                    "nom": "Kit d’embrayage",
                    "prix": 220,
                    "categorie": "Transmission",
                    "Disponible":true,
                    "picture":"/images/image_kit_embrayage.jpg"
                },
                {
                    "id": 14,
                    "nom": "Injecteur de carburant",
                    "prix": 110,
                    "categorie": "Moteur",
                    "Disponible":true,
                    "picture":"/images/image_injecteur_carburant.jpg"
                },
                {
                    "id": 15,
                    "nom": "Pompe à carburant",
                    "prix": 90,
                    "categorie": "Carburant",
                    "Disponible":true,
                    "picture":"/images/image_pompe_carburant.jpg"
                },
                {
                    "id": 16,
                    "nom": "Capteur de pression des pneus (TPMS)",
                    "prix": 45,
                    "categorie": "Sécurité",
                    "Disponible":true,
                    "picture":"/images/image_capteur_tpms.jpg"
                },
                {
                    "id": 17,
                    "nom": "Rétroviseur extérieur",
                    "prix": 60,
                    "categorie": "Carrosserie",
                    "Disponible":true,
                    "picture":"/images/image_retroviseur_exterieur.jpg"
                },
                {
                    "id": 18,
                    "nom": "Échappement complet",
                    "prix": 250,
                    "categorie": "Échappement",
                    "Disponible":false,
                    "picture":"/images/image_echappement_complet.jpg"
                },
                {
                    "id": 19,
                    "nom": "Vanne EGR",
                    "prix": 140,
                    "categorie": "Moteur",
                    "Disponible":false,
                    "picture":"/images/image_vanne_egr.jpg"
                },
                {
                    "id": 20,
                    "nom": "Turbo",
                    "prix": 400,
                    "categorie": "Moteur",
                    "Disponible":true,
                    "picture":"/images/image_turbo.jpg"
                },
                {
                    "id": 21,
                    "nom": "Joint de culasse",
                    "prix": 75,
                    "categorie": "Moteur",
                    "Disponible":true,
                    "picture":"/images/image_joint_culasse.jpg"
                },
                {
                    "id": 22,
                    "nom": "Boîtier de direction",
                    "prix": 300,
                    "categorie": "Direction",
                    "Disponible":true,
                    "picture":"/images/image_boîtier_direction.jpg"
                },
                {
                    "id": 23,
                    "nom": "Silent bloc de suspension",
                    "prix": 35,
                    "categorie": "Suspension",
                    "Disponible":true,
                    "picture":"/images/image_silent_bloc_suspension.jpg"
                },
                {
                    "id": 24,
                    "nom": "Cardan de transmission",
                    "prix": 160,
                    "categorie": "Transmission",
                    "Disponible":false,
                    "picture":"/images/image_capteur_abs.jpg"
                },
                {
                    "id": 25,
                    "nom": "Capteur de position vilebrequin",
                    "prix": 50,
                    "categorie": "Moteur",
                    "Disponible":true,
                    "picture":"/images/image_capteur_position_vilebrequin (3).jpg"
                }
            ]
            
        }
    },
    computed: {
        filteredPieces() {
            let pieces = this.Pieces;

            if (this.SearchKey) {
                pieces = pieces.filter(piece => 
                    piece.nom.toLowerCase().includes(this.SearchKey.toLowerCase())
                );
            }

            if (this.selectedCateg) {
                pieces = pieces.filter(piece => piece.categorie === this.selectedCateg);
            }

            if (this.selectedDisp === "Dips") {
                pieces = pieces.filter(piece => piece.Disponible === true);
            }

            if (this.selectedSort === "Croi") {
                pieces = pieces.sort((a, b) => a.prix - b.prix);
            } else if (this.selectedSort === "Dec") {
                pieces = pieces.sort((a, b) => b.prix - a.prix);
            }
            console.log(pieces); 
            return pieces;
        },

    },

    methods: {
        ajouterAuPanier(piece){
            this.panier.push(piece)
            alert(`${piece.nom} ajouté au panier !`)
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
	max-width: 1200px;
	margin: auto;
	padding: 16px;
	font-family: 'Montserrat', sans-serif;
}

header {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 16px;
	padding: 8px;
	background-color: #7451eb;
	text-align: center;
	color: white;
}
header img {
	height: 60px;
	margin-left: 1rem;
}
header h1 {
	flex-grow: 1;
}

main {
	display: flex;
	flex-direction: row;
}

.filtres {
	display:flex;
	flex-direction:column;
	border-radius: 4px;
	box-shadow: 0px 0px 4px gray;
	margin: 8px;
	padding: 8px;
	min-width: 300px;
	min-height: 400px;
}
.filtres h3 {
	text-align: center;
}
.filtres select {
    margin-top :10px;
    border:solid #7451eb ;
}
.fiches {
	flex: 1;
	margin: 8px;
}
.fiches img {
	max-width: 200px;
}
.fiches p {
	margin-top: 4px;
	margin-bottom: 4px;
}
.piece{
    border-radius: 4px;
	box-shadow: 0px 0px 4px gray;
	margin: 8px;
	padding: 8px;
}

</style>
