<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'EventEdit', params: { id } }"
        >Edit</router-link
      >
      |
      <router-link :to="{ name: 'EventRegister', params: { id } }"
        >Register</router-link
      >
    </div>
    <p>Edit events</p>
  </div>
</template>

<style></style>

<script>
import EventService from '@/services/EventService';
export default {
  name: 'EventDetails',
  props: ['id'],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEventById(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
