<template>
    <div>
        
        <preloader-component/>

        <navbar-component/>
    
        <div class="container py-4">
            <router-view/>
        </div>

        <footer-component/>
    </div>
</template>

<script>
    import NavbarComponent from './_partials/navbar'
    import FooterComponent from './_partials/footer'

    export default {
        components: {
            NavbarComponent,
            FooterComponent
        }
    }
</script>

<style scoped>
    @import url('../assets/css/sticky-footer-navbar.css');
</style>