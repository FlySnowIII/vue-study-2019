<template>
  <div class="hello">
    {{name}}
    {{btnState?'Disable':'Active'}}
    <!-- <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button> -->

    <form @submit.prevent="addSkill">

      <input type="text" placeholder="Enter a skill you have.." v-model="skill">
    </form>
    {{skill}}
    <div class="holder">
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data,index) in skills" :key="index">
          {{index}}.{{data.skill}}
        </li>
        </transition-group>

      </ul>

    </div>
  </div>

</template>

<script>
export default {
  name: 'Skills',
  props: {
    // msg: String
  },
  data () {
    return {
      name:'Pengfei',
      btnState:true,
      skill:'',
      skills:[
        {"skill":"Vue.js"},
        {"skill":"Fronted Developer"},
      ]
    }
  },
  methods: {
    addSkill:function(){
      this.skills.push({skill:this.skill});
      this.skill = '';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
</style>
