import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = 'https://api.dpoweri.co.id'

export const useDuratecStore = defineStore("duratec", { 
    state: () => ({
        blogs: []
    }),
    actions: {
        async fetchBlog() {
            try {
                const { data } = await axios ({
                    method: 'GET',
                    url: `${baseUrl}/blog`,
                    headers:{
                        "API-Key":"Hjkhf637284khfjk"
                    }
                })
                this.blogs = data
            } catch (error) {
                console.log('error', error)
            }
        }
    }

} )