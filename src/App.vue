<template>
	<div id="app">
		<h1>list to do</h1>

		<div class="p-4 row">
			<div class="col-5 text-left">
				<input type="text" placeholder="Search" v-model="keyword">
<!--				<button class="btn btn-info m-3" @click="filter()">search</button>-->
			</div>

			<div class="col-5 text-right">
				<input type="text" v-model="newTodo" placeholder="add todo" @keyup.enter="addTodo()">
				<button @click="addTodo()" class="btn btn-primary m-3" :disabled="!newTodo || !this.newTodo.trim()">add</button>
			</div>
		</div>

		<list-todo :todo="filterTodo"></list-todo>
	</div>
</template>

<script>
    import 'bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import ListTodo from "./components/List";

    export default {
        name: 'App',
        lintOnSave: false,
        components: {
            ListTodo
        },
	    created() {
            this.filterTodo = this.todo;
	    },
        watch: {
            keyword: function () {
                // console.log(this.keyword);
                this.filterTodo = this.todo.filter((item) => {
                    console.log('fake', item.name.toLowerCase().includes(this.keyword.toLowerCase()));
                    return item.name.search(this.keyword) !== -1 || item.name.toLowerCase().includes(this.keyword.toLowerCase());
                })
	            console.log(this.filterTodo)
            },
	        // todo: function () {
		    //     this.filterTodo = this.todo;
            // }
        },
        data() {
            return {
                todo: [
                    {
                        name: 'học html',
                        status: 1,
                        isEdit: false,
                    },
                    {
                        name: 'học chơi game',
                        status: 3,
                        isEdit: false,
                    },
                    {
                        name: 'học vuejs',
                        status: 2,
                        isEdit: false,
                    },
                ],
                newTodo: '',
                keyword: '',
	            filterTodo: this.todo,
            }
        },
        methods: {
            addTodo() {
                console.log(this.newTodo);
                if (!this.newTodo || !this.newTodo.trim()) {
                    return;
                }
                this.todo.push({
                    name: this.newTodo,
                    status: 1,
                });

                this.newTodo = '';
            },
            edit(item) {
                item.isEdit = true;
                this.editName = item.name;
                this.editStatus = item.status;
            },
            deleteTodo(item) {
                console.log(item);
                this.todo.splice(item, 1);
            },
            done(item) {
                item.status = 3;
            },
            doing(item) {
                item.status = 2;
            },
            save(item) {
                item.name = this.editName;
                item.status = parseInt(this.editStatus);
                console.log(item)
                item.isEdit = false;
            },
            cancel(item) {
                item.isEdit = false;
            },
            fetchTodo() {

            }
        }
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

	table > thead > th {
		align-items: stretch;
	}
</style>
