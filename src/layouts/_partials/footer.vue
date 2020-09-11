<template>
    <div>

        <footer class="footer">
            <div class="container text-muted">
                <span>
                    &copy; {{ new Date().getFullYear() }}
                    {{ textRights }} <span id="company">| Frontend Developer (m/f) - Developer Challenge</span>
                </span>

                <span id="designed-by">
                    {{ textFooter }} {{ textBy }}
                </span>
            </div>
        </footer>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                textFooter: 'Desenvolvido por',
                url: '#',
                textBy: 'Gerson Hugo Samuel Chiule - 842441262',
                textRights: '- Todos os direitos reservados'
            }
        }
    }
</script>

<style scoped>
    #designed-by {
        opacity: 0.5;
        font-size: 12px;
    }

    @media screen and (max-width: 736px) {
        #designed-by, #company {
            display: none;
        }
    }
</style>