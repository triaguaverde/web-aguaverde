<template>
  <div>
    <Nav />
    <Blog :posts="posts" :ismujer="true"/>
  </div>
</template>

<script>
export default {
    name:"BlogNews",
    computed: {
        posts(){
            const p = Object.assign({}, this.$store.state?.mujerposts);
            if (p[0]) return Object.values(p).reverse();
            else return [];
        }
    }
}
</script>
