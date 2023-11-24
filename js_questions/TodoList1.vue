
<template>
    <div id="app">
      <ul>
        <li v-for="(task, index) in tasks" :key="index" class="task">
            <p class="name">{{ task.name }}</p>
            <p class="description">{{ task.description }}</p>
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
          //TODO: modifier pour que ca fasse une animation puis que ca supprime
                this.tasks.splice(index, 1);
        },
        animDernièreTache: async function(){
            await nextTick()
            // TODO: nextTick sert à attendre que la tache existe dans le DOM, faire ensuite une animation sur la nouvelle tache (indice: utiliser querySelector et nth-child)
        }
    },
  };
  </script>
  
  <style>
    .task{
        width: fit-content
    }
</style>
  