<template>
  <nuxt-link to="add_restaurant" class="m-2 bg-purple-700 rounded p-2 text-white font-semibold">Add restaurant</nuxt-link>
    <div class="flex flex-wrap">
      <RestaurantCard
        v-for="{ _id, nom, commentaire } in data.restaurants"
        :key="_id"
        :id="_id"
        :nom="nom"
        :commentaire="commentaire"
        style="margin: 20px;"
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