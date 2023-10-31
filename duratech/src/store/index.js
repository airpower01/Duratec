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
        async fetchBlog() {
            try {
                const response = await fetch(baseUrl + "/blog", { headers })
                if (response.ok) {
                    this.blogs = await response.json()
                } else {
                    throw new Error("failed to fetch blog")
                }
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBlog(id) {
            try {
               const response = await fetch(baseUrl + '/blog/' + id, { method: 'DELETE'})
               if(response.ok) {
                   this.fetchBlog()
                return await response.json()
               }
            } catch (error) {
                console.log(error);
            }
        },
        async addBlog(data) {
            try {
                const response = await fetch(baseUrl + '/blog', {
                  method: 'POST',
                  body: JSON.stringify(data),
                });
        
                if (response.ok) {
                    console.log(data, '<<<<<<<<<data');
                  return await response.json();
                } else {
                  throw new Error('Failed to post data');
                }
              } catch (error) {
                throw error;
              }
        }
    }

})