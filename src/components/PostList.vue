<template>
  <div class="post-list">
    <PostListItem
      v-for="post in posts"
      :post="post"
      :key="post['.key']"
    />
  </div>
</template>

<script>
import PostListItem from './PostlistItem'
export default {
  components: {
    PostListItem
  },
  props: {
    posts: {
      required: true,
      type: Array
    }
  }
}
</script>