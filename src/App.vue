<template>
</template>

<style lang="scss">

</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private mounted() {
    this.$store.dispatch('fetchTodos');
  }
}
</script>

