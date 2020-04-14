<script lang="ts">
 const app: string = "app";
</script>

<main>
    <h1>Svelte {app}</h1>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
        display: grid;
        grid-template-areas: "aside header" "aside content";
        grid-template-columns: minmax(80px, 280px) 1fr;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
