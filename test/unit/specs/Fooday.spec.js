import Vue from 'vue'
import Fooday from '@/components/Fooday'

describe('Fooday.vue', () => {
  it('should render correct title', () => {
    const Constructor = Vue.extend(Fooday)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.equal('Fooday, people!')
  })
})
