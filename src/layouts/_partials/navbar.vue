<template>
    <div>

        <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container">
                    <router-link :to="{name: 'home'}" class="navbar-brand">Frontend Developer (m/f)</router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <router-link :to="{name: 'home'}" class="nav-link" href="#">
                                    <i class="fas fa-home"></i>
                                    Página Principal
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link :to="{name: 'countries'}" class="nav-link" href="#">
                                    <i class="fas fa-globe"></i>
                                    Países
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    </div>
</template>