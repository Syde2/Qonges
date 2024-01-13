import { defineStore } from 'pinia';
import { date } from 'quasar'


export const useDatePickerStore = defineStore('datePicker', {
  state: () => ({
    range : {
      start : new Date(),
      end : new Date()
    },
    disabledDates: [],
    attributes : [
      {
        key: 'today',
        highlight: {
          fillMode : 'outline',
          color : 'grey',
          contentClass : 'text-accent'
        },
        dates: new Date(),



      }
    ],


  }),
  getters: {
    rangeDiff : (state) => date.getDateDiff(state.range.end, state.range.start)

  },

  actions: {
    addDisabledDates(dateRange) {
      this.disabledDates.push(dateRange)
    },


  },
});
