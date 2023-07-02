<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>Edit events</p>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'EditEvent',
  props: ['event'],
};
</script>
