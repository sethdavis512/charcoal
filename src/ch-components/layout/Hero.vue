<template>
    <section class="hero" :style="{background: `url(${bgImgUrl}) no-repeat center center fixed`, backgroundSize: 'cover'}">
        <div class="hero-body">
            <div class="container">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        bgImgUrl: {
            type: String
        }
    }
}
</script>

<style lang="scss">
</style>
