<template>
    <div class="col-md-2 float-left border p-1 m-1 rounded-1 border-0" v-bind:class="'bg-'+selected">
        <p v-bind:class="checkDarkBg(selected)?'text-white':'text-dark'" class="p-3">{{msg}}</p>
        <div class="float-right">
            <span class="mdi mdi-circle" v-bind:class="'text-'+col" v-for="col in colors" v-on:click="changeColor(col)"></span>
        </div>
    </div> 
</template>
<script>
module.exports = {
    props: ['msg'],
    data: function() {
        return {
            title: "notes",
            colors: ['yellow', 'green', 'red', 'purple', 'blue', 'gray-dark'],
            selected:'gray-light'
        }
    },
    methods: {
        changeColor(col){
            this.selected = col;
            console.log(col);
        },
        checkDarkBg(col){
            if(col=='yellow'||col=='green'||col=='gray-light') return false;
            else return true;
        }
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