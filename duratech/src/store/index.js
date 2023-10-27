import { defineStore } from "pinia";


let baseUrl = 'https://api.dpoweri.co.id'
const headers = {
    "API-Key": "Hjkhf637284khfjk"
}
export const useDuratecStore = defineStore("duratec", {
    state: () => ({
        blogs: []
    }),
    actions: {
       fetchBlog() {
        fetch(baseUrl+"/blog", {headers})
        .then(response => response.json())
        .then(data => (this.blogs = data));   
        }
    }

})