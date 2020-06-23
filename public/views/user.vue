<template> 
    <img class="CircleBadge avatar avatar-small" alt="jonrohan" v-bind:src="imgsrc" width="32" height="32" />
</template>
<script>
module.exports = {
  props:['name','imgsrc','email'],
    data: function() {
        return {
           
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