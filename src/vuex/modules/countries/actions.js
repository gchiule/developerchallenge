import axios from 'axios'

export default {

    loadCountries ({ commit }) {

        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando os países')

        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => commit('LOAD_COUNTRIES', response.data))
            .finally(() => commit('SET_PRELOADER', false))
    },

    loadCountry ({commit}, country_name) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando detalhes do país')

        return new Promise((resolve, reject) => {

            axios.get(`https://restcountries.eu/rest/v2/name/${country_name}`)
                .then(response => {
                    resolve(response)
                })
                .catch(error => reject(error))
                .finally(() => commit('SET_PRELOADER', false))
        })
    }
}