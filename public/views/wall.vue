<template>
    <div class="d-flex flex-wrap p-3">
        <div v-for="note in notelist" class="p-5 px-6 border bg-white">
            <note v-bind:msg="note.msg"></note>
        </div>
    </div>
</template>
<script>
module.exports = {
    components: {
        'note': httpVueLoader('../views/note.vue')
    },
    data: function() {
        return {
            notelist: [{
                msg: 'adsadasd',
                avatar: '121'
            }, {
                msg: 'klklkl',
                avatar: '1e1'
            }, {
                msg: 'uyuyuy',
                avatar: '1r1'
            }, {
                msg: 'dgdfgdfg',
                avatar: '1t1'
            }]
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