<template>
    <div>
        <div id="loader-page">
            <div class="loader-name">Loading</div>
            <div class="loader-circle"></div>
        </div>
    </div>
</template>

<style lang="scss">
#loader-page {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.loader-name {
    position: absolute;
    top: 50%;
    left: 50%;

    margin: {
        top: -10px;
        left: -52px;
    }

    font-size: 125%;
    font-family: 'Montserrat',
    sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    @apply text-black dark:text-white;
}

.loader-circle {
    width: 180px;
    height: 180px;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;

    border: {
        top: 5px solid #fefefe;
        bottom: 2px solid transparent;
        left: 2px solid transparent;
        right: 2px solid transparent;
        radius: 50%;
    }

    margin: {
        top: -90px;
        left: -90px;
    }

    animation: loader 1s infinite linear;
}

@keyframes loader {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
