import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://localhost:8000/api",
  imgPath: "http://localhost:8000/storage/",
  characters: [],
  currentPageCharacter: "",
  types: [],
  items: [],
  selectedCharacter: {},
  selectedItem: {},
  selectedType: {},
  selectedCharacterId: "",
  selectedItemId: "",
  selectedTypeId: "",
  CPUCharacter: {},
  CPUItem: {},
  CPUType: {},
  CPUCharacterId: "",
  CPUItemId: "",
  CPUTypeId: "",
  showStartButton: false,
  closePopUp: true,

});
