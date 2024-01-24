import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://localhost:8000/api",
  imgPath: "http://localhost:8000/storage/",
  characters: [],
  types: [],
  items: [],
  selectedCharacter: {},
  selectedItem: {},
  selectedType: {},
});
