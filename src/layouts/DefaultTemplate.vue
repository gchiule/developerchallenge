<template>
    <div>
        
        <preloader-component/>

        <navbar-component/>
    
        <router-view></router-view>

        <footer-component/>
    </div>
</template>

<script>
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css'

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
    @import url('../assets/fonts/fontawesome-free-5.13.0-web/css/all.css');
    @import url('../assets/css/developerchallenge.css');
</style>