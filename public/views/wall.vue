<template>
    <div class="container-xl p-1">
        <div v-for="note in notelist" >
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
                msg: 'Fogging on the mirror',
                avatar: '121'
            }, {
                msg: 'Curdled milk',
                avatar: '1e1'
            }, {
                msg: 'No tea in the morning',
                avatar: '1r1'
            }, {
                msg: 'Forget to write things on paper',
                avatar: '1t1'
            }, {
                msg: 'Same breakfast for entire week',
                avatar: '1t1'
            }, {
                msg: 'No cell tower',
                avatar: '1t1'
            }, {
                msg: 'Bored of everything',
                avatar: '1t1'
            }, {
                msg: 'Soothing music in the morning',
                avatar: '1t1'
            }, {
                msg: 'Bad smell spoils my mood',
                avatar: '1t1'
            }, {
                msg: 'Purpose of life and dimension of our emotions',
                avatar: '1t1'
            }, {
                msg: 'Black hole or whole black?',
                avatar: '1t1'
            }, {
                msg: 'No more new ideas to work on :(',
                avatar: '1t1'
            }, {
                msg: 'Ice cream',
                avatar: '1t1'
            }, {
                msg: 'Green Vegitables and EEGs',
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