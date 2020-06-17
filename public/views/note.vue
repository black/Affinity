<template>
    <span>{{msg}}</span>
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