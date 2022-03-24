<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create User</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="user.firstname" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="user.lastname" required>
                </div>
                <div class="form-group">
                    <label>Role</label>
                    <input type="text" class="form-control" v-model="user.role" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
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
                user: {
                   firstname: '',
                   lastname: '',
                   role: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3000/user';
                
                axios.post(apiURL, this.user).then(() => {
                  this.$router.push('/create')
                  this.user = {
                    firstname: '',
                    lastname: '',
                    role: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>