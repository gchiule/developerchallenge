<template>
    <div>

        <h1 class="mt-5">Detalhes do Pais <b>{{ country.name }}</b></h1>

        <ul>
            <li>
                <strong>Nome:</strong>
                {{ country.name }}
            </li>
            <li>
                <strong>Capital:</strong>
                {{ country.capital }}
            </li>
            <li>
                <strong>Região:</strong>
                {{ country.region }}
            </li>
            <li>
                <strong>Sub-região:</strong>
                {{ country.subregion }}
            </li>
            <li>
                <strong>População:</strong>
                {{ country.population }}
            </li>
            <li>
                <strong>Área:</strong>
                {{ country.area }}
            </li>
            <li>
                <strong>Fuso horário:</strong>
                {{ country.timezones[0] }}
            </li>
            <li>
                <strong>Nome nativo:</strong>
                {{ country.nativeName }}
            </li>

            <li>
                <strong>Bandeira:</strong> <br>
                <a href="https://restcountries.eu/data/moz.svg" target="_blank" class="btn btn-info">Visualizar</a>
            </li>
        </ul>

    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        props: {
            country_name: {
                require: true
            }
        },

        created() {
            this.getCountry()
        },

        data () {
            return {
                country: {}
            }
        },

        methods: {
            ...mapActions([
                'loadCountry'
            ]),

            getCountry() {
                this.loadCountry(this.country_name)
                    .then(response => {
                        //console.log(response.data[0])
                        this.country = response.data[0]
                    })
                    .catch(error => {
                        this.$vToastify.error('Falha carregar detalhes do país', 'Developer Challenge')

                        this.$router.push({ name: 'countries'})
                    })
            }
        }
    }
</script>