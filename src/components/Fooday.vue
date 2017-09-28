<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>{{ fullName }}</p>
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Type in your search" v-model="query" />
    </form>
    <div class="results" v-if="results">
      <div @for="result in results">
        <!-- Do comething with iterator: result -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'fooday',
  data () {
    return {
      title: 'Fooday, people!',
      fullName: '',
      query: '',
      results: '',
      user: {
        firstName: 'John',
        lastName: 'Doe'
      },
      methods: {
        getResult: function (query) {
          // URL: https://api.fda.gov/food/enforcement.json?search=reason_for_recall:"ice+cream"&count=report_date
          // OPTIONS: _recall_initiation_date or _report_date_ or _reason_for_recall_
          axios.get(`https://api.fda.gov/food/enforcement.json?search=reason_for_recall:"${query}"&count=report_date`).then(response => {
            console.log(response)
            this.results = [ ...response ]
          })
        },
        fullName: () => this.firstName + this.lastName
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