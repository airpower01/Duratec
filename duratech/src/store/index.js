import { defineStore } from "pinia";
import Swal from "sweetalert2";

let baseUrl = 'https://api.dpoweri.co.id'
const headers = {
    "API-Key": "Hjkhf637284khfjk"
}
export const useDuratecStore = defineStore("duratec", {
    state: () => ({
        blogs: [],
        blog: {},
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
        async fetchBlogDetail(id) {
            try {
                const response = await fetch(baseUrl + "/blog/" + id)
                if (response.ok) {
                    this.blog = await response.json()
                } else {
                    throw new Error("failed to fetch blog")
                }
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBlog(id) {
            try {
                try {
                    const result = await Swal.fire({
                        title: "Are you sure?",
                        text: "You want to delete this blog?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes!",
                    })
                    if (result.isConfirmed) {
                        const response = await fetch(baseUrl + '/blog/' + id, { method: 'DELETE' })
                        if (response.ok) {
                            await this.fetchBlog()
                            return response.json()
                        } else {
                            throw new Error('Cannot delete blog')
                        }
                    }
                } catch (error) {
                    throw error
                }

            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message[0],
                });
            }
        },
        async addBlog(data) {
            try {
                const response = await fetch(baseUrl + '/blog', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
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
        },
        async updateBlog(id, data) {
            try {
                const response = await fetch(baseUrl + '/blog/' + id,
                    {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    })
                if (response.ok) {
                    this.fetchBlog()
                    return await response.json();
                } else {
                    throw new Error('Failed to post data' + response.status);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

})