import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { useCalendarStore } from "./calendarStore";


export const useListeActivitesStore = defineStore("listeActivites", {
  state: () => ({
    listeActivitesDuJour: '',
    listHasChanged: false,
    dateSelectionnee: '',
    userID: 1,
  }),
  getters: {
  },
  actions: {
     updateListe() {
      const calendar = useCalendarStore();
      this.dateSelectionnee = calendar.dateFormattee
       api.get
       (`/quotidiens?date=${this.dateSelectionnee}&User.id=${this.userID}`)
      .then((res) => (this.listeActivitesDuJour = res.data["hydra:member"]));
    }
  },
});
