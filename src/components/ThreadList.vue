<template>
    <div>
        <div class="thread-list">
            <h2 class="list-title">Threads</h2>
            <ThreadListItem
                v-for="(thread, index) in threads"
                :thread="thread"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
import ThreadListItem from './ThreadListItem'

export default {
  components: {
    ThreadListItem
  },
  props: {
    threads: {
      required: true,
      type: Array
    }
  }
}
</script>