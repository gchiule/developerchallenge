<template>
    <div class="container content-page">

        <h1 class="mt-5">Lista de Países do Mundo ({{ countries.length }})</h1>

        <hr>

        <div v-if="countries.length">
            <div class="table-responsive">
                <table class="table table-bordered table-hover" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th style="width:50%">Nome</th>
                            <th style="width:40%">Capital</th>
                            <th style="width:10%" class="text-center">Mais info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="country in countries" :key="country.id">
                            <td>{{ country.name }}</td>
                            <td>{{ country.capital }}</td>

                            <td class="text-center">
                                <router-link :to="{name: 'country', params: {country_name: country.name}}" class="btn btn-info">
                                    <i class="fas fa-eye"></i>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <p v-else class="error-info">Não há registo de paises!</p>
        
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        created () {
            this.loadCountries()
                .catch(response => this.$vToastify.error('Falha ao carregar os países!', 'Developer Challenge'))
        },

        computed: {
            ...mapState({
                countries: state => state.countries.items,
            })
        },

        methods: {
            ...mapActions([
                'loadCountries'
            ])
        }
    }
</script>