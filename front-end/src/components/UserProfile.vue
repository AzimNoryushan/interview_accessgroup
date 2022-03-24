<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">User Profile</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="user.FirstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="user.LastName" required>
                </div>
                <div class="form-group">
                    <label>Role</label>
                    <input type="text" class="form-control" v-model="user.Role" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Edit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            user: {}
        }
    },
    created() {
        let apiURL = `http://localhost:3000/user/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.user = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3000/user/${this.$route.params.id}`;
            axios.put(apiURL, this.user).then((res) => {
                console.log(res)
                this.$router.push(`/edit`)
                window.alert("User Updated")
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>