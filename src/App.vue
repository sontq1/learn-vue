<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">

        <hello-world v-if="show" :msg="'Hello SonTQ'"></hello-world>
        <div>
            <button @click="show = !show">
                <span v-if="show">Hide</span>
                <span v-if="!show">Show</span>
            </button>
            <p>number: {{ number }}</p>
        </div>

        <div>
            <button @click="greet">say hello</button>
        </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mixin from './mixins/TodoMixin'

    export default {
        name: 'App',
        mixins: [mixin],
        components: {
            HelloWorld
        },
        data() {
            return {
                todo: 'Có làm thì mới có ăn',
                number: 0,
                date: '',
                show: true,
            }
        },
        beforeCreate() {
            // console.log('beforeCreate')
            // console.log('before', this.todo)
        },
        created() {
            // console.log('đây là created: ', this.todo);
            // console.log(this.$el);

            // setInterval(() => {
            //     this.number++;
            //     console.log("khi created : " + this.number)
            // }, 10000)
        },
        beforeMount() {
            // console.log(this.$el);
        },
        mounted() {
            // console.log(this.$el);
        },
        beforeUpdate() {
            // console.log("khi beforeUpdate : " + this.number)
        },
        updated() {
            // console.log("khi updated : " + this.number)
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
