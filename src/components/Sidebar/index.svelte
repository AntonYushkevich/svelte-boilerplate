<aside class="Sidebar {isToggled ? 'Sidebar__toggled' : ''}">
    sidebar
</aside>

<script>
    export let isToggled;
</script>

<style lang="scss">
    .Sidebar {
        position: sticky;
        border-right: 1px solid lightgray;
        left: 0;
        top: 0;
        max-width: 280px;
        min-width: 80px;
        width: 100%;
        padding: 10px 0 10px 0;
        grid-area: aside;
        height: 100vh;

        &__toggled {
            width: 80px;
        }
    }
</style>
