<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user.UserID">
                        <td>{{ user.UserID }}</td>
                        <td>{{ user.FirstName }}</td>
                        <td>{{ user.LastName }}</td>
                        <td>{{ user.Role }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user.UserID }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteStudent(user.UserID)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>   
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            Users: []
        };
    },
    created() {
        let apiURL = 'http://localhost:3000/user';
        axios.get(apiURL).then(res => {
            this.Users = res.data.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        deleteStudent(id){
                let apiURL = `http://localhost:3000/user/${id}`;
                let indexOfArrayItem = this.Users.findIndex(i => i.UserID === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Users.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
    }
};
</script>