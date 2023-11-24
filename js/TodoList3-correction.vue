
<template>
    <div id="app">
      <ul>
        <li v-for="(task, index) in tasks" :key="index" class="task">
            <p class="name" @click="toggleDescription(index)">{{ task.name }}</p>
            <div class="description-container">
            <p class="description">{{ task.description }}</p>
            </div>
            <button @click="supprimer(index)">Supprimer</button>
        </li>
      </ul>
  
      <div>
      <h3 v-if="coloreTitre" :style="{color: 'blue'}">Listing</h3>
        <input v-model="newTask" placeholder="Nouvelle tâche" />
        <input v-model="newDescription" placeholder="Description de la tache" />
        <button @click="addTask">Ajouter</button>
      </div>
    </div>
  </template>
  
  <script>
  import gsap from "gsap";
import { nextTick } from "vue";
  export default {
    name: "TodoList",

    data() {
      return {
        tasks: [],
        newTask: "",
        newDescription: "",
  coloreTitre: true,
      };
    },
  
    methods: {
      addTask: function () {
        if (this.newTask !== "") {
            if(this.tasks.find(task => task.name === this.newTask)){
                alert("Cette tâche existe déjà");
            }else{
                this.tasks.push({
                  name: this.newTask,
                  description: this.newDescription,
              });
              this.newTask = "";
              this.newDescription = "";
              this.animDernièreTache();
            }
        }
      },
        supprimer: function (index) {
            const element = this.$el.querySelectorAll('li:nth-child(' + (index + 1) + ')')
            gsap.to(element, {duration: 2, opacity: 0, x:200, ease: "power2.in"})
            .then(() => {
                this.tasks.splice(index, 1);
            })
        },
        animDernièreTache: async function(){
            await nextTick()
            const element = this.$el.querySelector('li:last-child')
            const tl = gsap.timeline()
            tl.from(element, {duration: 1, opacity: 0, x: -200, ease: "power2.in"})
            tl.to(element, {duration: 1, rotate: 360})
        },
        toggleDescription: function(index){
            const element = this.$el.querySelector('li:nth-child(' + (index + 1) + ')')
            const container = element.querySelector('.description-container')
            if (element.classList.contains('active')){
                gsap.to(container, {duration: 1, height: 0, ease: "power2.in"})
                element.classList.remove('active')
            }else{
                const height = container.querySelector('.description').offsetHeight
                const width = container.querySelector('.description').offsetWidth
                gsap.to(container, {duration: 1, height: height, width: width, ease: "power2.in"})
                element.classList.add('active')
            }
        }
    },
  };
  </script>
  
  <style>
    .task{
        width: fit-content
    }
    .task .name{
        cursor: pointer;
    }
    .description-container{
        position: relative;
        overflow: hidden;
    }
    .description-container p{
        margin: 0;
        position: absolute;
        bottom: 0;
    }
</style>
  