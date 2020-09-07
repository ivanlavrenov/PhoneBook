<template>
    <Main></Main>
</template>

<script>
    import Main from "./components/Main";

    export default {
        name: 'App',
        components: {
            Main,
        },
    }
</script>

<style>
    * {
        font-family: 'Open Sans';
    }

    button {
        background-color: white;
        border-width: 1px;
        border-radius: 2px;
    }
</style>
