<template> 
    <li>
      <img class="CircleBadge avatar avatar-small" alt="jonrohan" v-bind:src="imgsrc" width="32" height="32" />
    </li>
</template>
<script>
module.exports = {
  props:['imgsrc'],
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