<template>
    <div>
        
        <footer class="footer">
            <div class="container text-muted">
                <span id="footer-text">
                    &copy; {{ new Date().getFullYear() }}
                    Frontend Developer (m/f) - Developer Challenge
                </span>

                <span id="designed-by-area">
                    Desenvolvido por Gerson Hugo Samuel Chiule
                </span>
            </div>
        </footer>

    </div>
</template>

<style>
    @media screen and (max-width: 736px) {
        #footer-text {
            font-size: 10px;
        }

        #designed-by-area {
            display: none;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 1024px) {}

    #designed-by-area {
        opacity: 0.3;
        font-size: 10px;
    }
</style>