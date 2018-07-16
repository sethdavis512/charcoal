<template>
    <figure class="image">
        <img :src="src" />
    </figure>
</template>

<script>
export default {
    props: {
        src: {
            type: String
        }
    }
}
</script>

<style lang="scss">
</style>
