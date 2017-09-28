<template>
  <div class="fooday">
    <h1 contenteditable>{{ title }}</h1>
    <p v-if="showName"> {{ `${user.firstName} ${user.lastName}` }} </p>
    <p v-else="showName"> Nobody </p>
  </div>
</template>

<script>
export default {
  name: 'fooday',
  data () {
    return {
      title: 'Welcome to Fooday',
      user: {
        firstName: 'John',
        lastName: 'Doe'
      },
      showName: false

    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}

a {
  color: #0af;
}
</style>
