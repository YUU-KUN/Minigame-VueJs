<template>
<div class="container-fluid" style="margin-top:100px">
  <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">User</h6>
                </div>
                <div class="card-body">
                    <div v-if="removed" class="alert alert-success alert-dismissible fade show" role="alert">
                      {{info}} 
                      <button type="button" @click="removed = false" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-3">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Email</th>
                                            <th>Username</th>
                                            <th>Verified</th>
                                            <th>Joined</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="(user, index) in users" :key="index">
                                                <td>{{index+1}}</td>
                                                <td>{{user.email}}</td>
                                                <td>{{user.username}}</td>
                                                <td>{{user.isVerified}}</td>
                                                <td>{{user.createdAt | formatDate}}</td>
                                                <td class="d-flex justify-content-center">
                                                    <button class="btn btn-danger" data-fancybox :data-src="'#'+index"><b-icon icon="trash2-fill" title="Delete User"></b-icon></button>
                                                </td>

                                                <div style="display:none" :id="index" class="animated-modal">
                                                    <h2>Watch Out!</h2>
                                                    <p>Are you sure wanna delete <b>{{user.username}}</b>?</p>
                                                    <div class=" d-flex justify-content-center">
                                                    <button type="button" data-fancybox-close class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                                    <button type="button" @click="deleteUser(index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">YASHH!</button>
                                                    </div>
                                                </div>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ONLY FOR DEVELOPING -->
              <!-- <div class="card bg-light">
                <div class="card-header"> <h3>List User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{users}}</pre>
                      </div>
                    </div>
                </div>
              </div> -->
              <!-- ONLY FOR DEVELOPING -->


                

            

            <!-- <div class="card shadow mb-4">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>
            </div> -->

        </div>
    </div>
    </div>
</template>

<script>
import 'bootstrap-vue'
export default {
    data() {
        return {
            users: '',
            removed: false,
            info: false,
        }
    },
    methods: {
        getUser() {
            this.axios.get('/user/list').then(response => {
                this.users = response.data.data
            })
        },
        deleteUser(index) {
            let id = this.users[index].userId
                console.log(id)
            let username = this.users[index].username
                console.log(username)
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            this.axios.delete(`/user/${id}`, headers).then(this.getUser())
            this.$bvToast.show('my-toast')
            this.info = true
            console.log('Berhasil hapus User '+username)
        },

    },
    mounted() {
        this.getUser()
    }
}
</script>

<style>

</style>