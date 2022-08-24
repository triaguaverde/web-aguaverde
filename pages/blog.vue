<template>
  <div>
    <Nav hideImage />
    <Blog :posts="posts" />
  </div>
</template>

<script>
export default {
  name: 'BlogNews',
  computed: {
    posts() {
      const p = Object.assign({}, this.$store.state.posts)
      if (p[0]) return Object.values(p).reverse()
      else return []
    },
  },
}
</script>
