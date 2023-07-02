<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>Register the event here</p>
  </div>
</template>

<script>
export default {
  name: 'RegisterEvent',
  props: ['event'],
};
</script>
