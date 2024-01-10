import { defineStore } from 'pinia';


export const useActiviteStore = defineStore('activite', {
  state: () => ({
    duree: 90,
    User : {
      id : 1
    },
    date : '',
    Activite : {
      id: 0,
      nomActivite : ''
    },

  }),
  getters: {
     dureeEnHeures(data) {
      const minutes = data.duree
      const heures = Math.floor(minutes / 60)
      const minutesRestantes = minutes % 60
      const heuresFormattees = String(heures).padStart(2, '0');
      const minutesFormattees = String(minutesRestantes).padStart(2, '0');
      return `${heuresFormattees}:${minutesFormattees}`;
  },



  },
  actions: {



  },
});
