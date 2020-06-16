<template>
	<div class="list">
		<table class="table table-bordered table-hover">
			<thead>
			<tr>
				<th>STT</th>
				<th>Name</th>
				<th>Status</th>
				<th>Action</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, index) in todo" :key="index">
				<td>{{ index + 1 }}</td>
				<td class="text-left">
					<span class="pl-3 text-capitalize" v-text="item.name" v-if="!item.isEdit"></span>
					<input v-if="item.isEdit" v-model="item.name">
				</td>
				<td>
					<select v-if="item.isEdit" class="form-control" v-model="item.status">
						<option value="1">To Do</option>
						<option value="2">Doing</option>
						<option value="3">Done</option>
					</select>
					<div v-if="!item.isEdit">
						<span v-if="item.status === 1" class="text-success">To Do</span>
						<span v-if="item.status === 2" class="text-primary">Doing</span>
						<span v-if="item.status === 3" class="text-secondary">Done</span>
					</div>

				</td>
				<td>
					<button class="mr-2 btn btn-info" @click="edit(item)" v-if="!item.isEdit">edit</button>
					<button class="mr-2 btn btn-info" @click="save(item)" v-if="item.isEdit">save</button>
					<button class="mr-2 btn btn-secondary" @click="cancel(item)" v-if="item.isEdit">cancel</button>
					<!--					<button class="mr-2 btn btn-secondary" @click="done(item)" :disabled="item.status === 3">-->
					<!--						done-->
					<!--					</button>-->
					<!--					<button class="mr-2 btn btn-primary" @click="doing(item)" :disabled="item.status === 2">-->
					<!--						doing-->
					<!--					</button>-->
					<button class="btn btn-danger" @click="deleteTodo(item)" v-if="!item.isEdit">delete</button>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
    export default {
        name: 'ListTodo',
        props: {
            todo: Array,
        },
	    watch: {

	    },
	    data() {
            return {
                editName: '',
                editStatus: 1,
            }
	    },
	    methods: {
            edit(item) {
                item.isEdit = true;
                // this.editName = item.name;
                // this.editStatus = item.status;
	            // this.$emit('fetchTodo', this.todo);
                console.log(item);
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
                // item.name = this.editName;
                // item.status = parseInt(this.editStatus);
                console.log(item)
                item.isEdit = false;
            },
            cancel(item) {
                item.isEdit = false;
            }
	    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
