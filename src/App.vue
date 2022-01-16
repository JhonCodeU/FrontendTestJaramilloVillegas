<template>
  <div class="container mt-4">
    <h1 class="text-center">Here you can see all the Posts</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          v-model="title"
          class="form-control"
          id="title"
          placeholder="Create new post"
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          v-model="description"
          class="form-control"
          placeholder="Description"
          rows="3"
        ></textarea>
        <button type="submit" class="btn btn-primary mt-2">
          Create new Post
        </button>
      </div>
    </form>
    <div class="row">
      <div class="col-3 mb-2" v-for="post in posts" :key="post">
        <card
          :id="post.id"
          :title="post.title"
          :description="post.description"
          :created="post.created"
        />
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/">About</router-link>
    </div>
  </div>
</template>
<script>
import card from "./components/card.vue";
import { PostController } from "./controllers/post.controller";

export default {
  components: {
    card,
  },
  data() {
    return {
      title: "",
      description: "",
      posts: [],
    };
  },
  async mounted() {
    await PostController.getAll().then((response) => {
      this.posts = response;
    });
  },
  watch: {
    posts(post) {
      console.log("posts lenght " + post.length);
    },
  },
  methods: {
    async onSubmit() {
      const post = {
        title: this.title,
        description: this.description,
      };
      PostController.create(post);
      const res = await PostController.getAll();
      this.posts = res;

      //clear form
      this.title = "";
      this.description = "";
    },
  },
};
</script>
<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
