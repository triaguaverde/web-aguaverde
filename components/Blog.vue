<template>
    <div class="h-full py-8 md:px-0 px-4" :class="ismujer ? 'bg-mujer' : 'bg-not'">
   <div class="w-full text-center"> <h1 class="text-2xl md:text-4xl font-bold mb-10 text-white sm" >
      {{ title}}
    </h1></div>
        <div v-if="!posts.length" class="w-full text-center text-3xl" :class="ismujer ? 'text-av-morado-dark' : 'text-gray-600 '">Aún no hay noticias</div>
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
    props: {
        posts: {
            type: Array,
            default: null
        },
        ismujer: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        title(){
            if (this.ismujer) return 'CHICAS AGUAVERDE';
            return 'ULTIMAS NOTICIAS'
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
    .bg-mujer {
        background:linear-gradient(to right, rgb(78, 84, 200), rgb(143, 148, 251));
    }

    .bg-not {
       background: linear-gradient(to right, rgb(86, 171, 47), rgb(168, 224, 99));

    }

    .sm {
        font-size: 25px;
    }
</style>