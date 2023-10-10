import { defineStore } from "pinia";
import actions from "./actions";
import getters from "./getters";
import state from "./state";

export const useCounterStore = defineStore("storeExpenses", {
  // Define the state
  state: () => state,
  actions: actions,
  getters: getters,
});
