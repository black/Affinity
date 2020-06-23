<template>
    <div>
        <span>{{msg}}</span>
        <details class="details-reset mt-3">
            <summary class="btn-link">More <span class="dropdown-caret"></summary>
            <div class="border p-4 mt-2">Hidden text</div>
        </details>
    </div>
</template>
<script>
module.exports = {
    props: ['msg'],
    data: function() {
        return {
            title: "notes"
        }
    },
    methods: {

    }
}
</script>
<style scoped>
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

li {
    margin: 10px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr;
}
</style>