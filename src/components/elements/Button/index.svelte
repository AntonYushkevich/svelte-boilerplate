<button on:click={handleClick}>
    <slot/>
</button>

<script>
    export let handleClick;
</script>

<style>
    button {
        min-width: 50px;
        max-width: 100%;
        max-height: 50px;
    }
</style>
