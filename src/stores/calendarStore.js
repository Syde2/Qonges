import { defineStore } from 'pinia';
import { date } from 'quasar'

const formatFrancais =
{
  days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  daysShort: ['Dim', 'Lun','Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  monthsShort: ['Jan', 'Fev',"Mar", 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Déc.' ]
}

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    dateSelectionnee: new Date(),
    today : new Date(),
    range :  {
      start: new Date(),
      end: new Date(),
    },
  }),
  getters: {
    dateFormattee :  (state) => date.formatDate( state.dateSelectionnee, "YYYY-MM-DD" ),
    demain : (state)=> date.addToDate(state.today, { days: 1 } ),
    jourSemaine : (state) => date.formatDate( state.dateSelectionnee, "dddd", formatFrancais),
    jourDuMois :  (state) => date.formatDate( state.dateSelectionnee, "DD", formatFrancais),
    annee :  (state) => date.formatDate( state.dateSelectionnee, "YYYY"),
    numeroSemaine : (state) => date.formatDate( state.dateSelectionnee, "ww"),
    rangeFormattee : (state) => {
      return {
        start : date.formatDate(state.range.start, 'YYYY-MM-DD', formatFrancais  ),
        end : date.formatDate(state.range.end, 'YYYY-MM-DD', formatFrancais  ),
      }
    },
    rangeTotalJours : (state) => date.getDateDiff( state.range.end, state.range.start ,'days')

  },

  actions: {


  },
});
