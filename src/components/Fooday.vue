<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: 'fooday',
  data () {
    return {
      title: 'Fooday, people!',
      user: {
        firstName: 'John',
        lastName: 'Doe'
      },
      methods: {
        fullName: () => this.user.firstName + this.user.lastName
      },
      computed: {
      }
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