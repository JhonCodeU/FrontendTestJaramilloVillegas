<template>
  <div class="home">
    <div class="container">
      <h1>Here you can see all the Posts</h1>
      <center>
        <div
          style="text-align:center;padding:30px;border:solid 2px;
            width:50%;border-radius:15px;shadow"
        >
          <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <label for="title">
                <i style="font-size: 30px" class="fa fa-user"></i>
              </label>
              <input
                type="text"
                v-model="title"
                style="font-size: 30px; height: 70px"
                class="form-control"
                id="title"
                placeholder="📘 Enter Title"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                v-model="description"
                style="font-size: 30px; height: 70px"
                type="text"
                class="form-control"
                id="x"
                placeholder="📖 Enter Description"
              />
            </div>

            <button type="submit" class="btn vueClass mt-4">
              Create a new Post
            </button>
          </form>
        </div>
        <i style="font-size: 30px" class="fa fa-user"></i>
        <i class="fa fa-phone"></i>
      </center>
      <br />
      <div class="row">
        <div class="col-3 mb-4" v-for="post in posts" :key="post">
          <card
            :id="post.id"
            :title="post.title"
            :description="post.description"
            :created="post.created"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PostController } from "../controllers/post.controller";
import card from "../components/card.vue";
export default {
  name: "Home",
  components: {
    card,
  },
  data() {
    return {
      posts: [],
      title: "",
      description: "",
    };
  },
  async mounted() {
    this.posts = await PostController.getAll();
  },
  methods: {
    onSubmit() {
      PostController.create({
        title: this.title,
        description: this.description,
        created: new Date(),
      });
      this.posts = PostController.getAll();
    },
  },
};
</script>
<style>
.vueClass {
  background: #42b983;
}
</style>
