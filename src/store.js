import { reactive } from 'vue'

export const store = reactive({
  apiUrl:"http://127.0.0.1:8000/api",
  imgPath: "http://127.0.0.1:8000/storage/",
  characters:[],
  types:[],
  items:[],
});