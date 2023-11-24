
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
            }
            this.animDernièreTache();
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
            gsap.to(element, {duration: 1, rotate: 360,  yoyo: true})
        },
        toggleDescription: function(index){
            // TODO: faire un systeme pour que si la description est ouverte elle se ferme avec une animation, si elle est fermée elle s'ouvre avec une animation
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
        /* TODO : modifier le CSS pour que la description apparraisse et disparaisse en montant et descendnat*/
      }
      .description-container p{
        margin: 0;
        /* TODO : modifier le CSS pour que la description apparraisse et disparaisse en montant et descendnat*/
    }
</style>
  