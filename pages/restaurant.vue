<template>
    <div class="flex flex-wrap">
      <RestaurantCard
        v-for="{ _id, nom, commentaire } in data.restaurants"
        :key="_id"
        :id="_id"
        :nom="nom"
        :commentaire="commentaire"
      />
    </div>
  </template>
  <script lang="ts" setup>
  type RestaurantsResults = {
    restaurants: {
        _id: string
        nom: string
        commentaire: string
      }[]
    }
  
  const query = gql`
  query getCharacters {
    restaurants {
        _id
        nom
        commentaire
    }
  }
  `
  const { data } = await useAsyncQuery<RestaurantsResults>(query)
  </script>