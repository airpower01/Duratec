import { ref, reactive, onMounted } from "vue";

const baseUrl = "https://api.dpoweri.co.id";
const headers = {
  "API-Key": "Hjkhf637284khfjk",
};

export function useDuratecStore() {
  const state = reactive({
    blogs: [],
  });

  const fetchBlog = async () => {
    try {
      const response = await fetch(`${baseUrl}/blog`, { headers });
      if (response.ok) {
        const data = await response.json();
        state.blogs = data;
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  onMounted(() => {
    fetchBlog();
  });

  return {
    state,
    fetchBlog,
  };
}
