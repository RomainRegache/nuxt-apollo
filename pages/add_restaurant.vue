<template>
    <div>
      <h1>Contact us</h1>
      <p>Send us a message!</p>
  
      <form accept-charset="UTF-8" action="https://www.formbackend.com/f/{your-identifier}" method="POST">
        <v-autocomplete
          chips
          label="Autocomplete"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          multiple
        ></v-autocomplete>
  
        <button type="submit">Send message</button>
      </form>
    </div>
  </template>