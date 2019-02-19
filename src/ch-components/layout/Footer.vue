<template>
    <footer class="footer">
        <Container>
            <div class="content has-text-centered">
                <slot></slot>
            </div>
        </Container>
    </footer>
</template>

<script>
import Container from '@/ch-components/layout/Container.vue'

export default {
    components: {
        Container
    }
}
</script>

<style lang="scss">
footer.footer {
    color: $grey;

    a {
        color: $white;
    }
}
</style>
