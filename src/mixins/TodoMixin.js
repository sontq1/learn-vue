export default {
    data () {
        return { greeting: 'Hello I am a Sontq'}
    },

    created: function () {
        console.log('Mixin was applied!');
    },

    methods: {
        greet() {
            console.log(this.greeting);
            alert('say hello to Sơn')
        }
    }
}