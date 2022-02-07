<template>
    <div class="bg-gray-200 h-full py-8 md:px-0 px-4">
   <div class="w-full text-center"> <h1 class="text-2xl md:text-4xl font-bold mb-10">
      Últimas noticias
    </h1></div>
        <div v-if="!posts.length" class="text-gray-600 w-full text-center text-3xl">Aún no hay noticias</div>
        <div v-else>
            <div v-for="post in posts" :key="post.slug" class="md:w-8/12 bg-white rounded-md mx-auto p-8 shadow-md mb-4 md:mb-8">
                <div class="w-full text-center">
                <h2 class="my-2">{{post.title}}</h2></div>
                <img v-if="post.thumbnail" width="30%" :src="post.thumbnail">
                <nuxt-content :document="post"></nuxt-content>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"BlogNews",
    computed: {
        posts(){
            const p = Object.assign({}, this.$store.state.posts)
            return Object.values(p).sort(function(a,b){
             return new Date(createdAt.date) - new Date(createdAt.date);
            });
        }
    }
}
</script>
<style>
    .h-full {
        min-height: 1000px
    }

    img {
        @apply my-8
    }
    p {
        @apply text-lg md:text-xl mt-4;
    }

    li {
        @apply text-sm md:text-lg;
    }
</style>