
<template>
    <div class="login">
        <h1>Login</h1>
        <form class="edit-form" @submit.prevent="onLogin">
            <input v-model="user.name" class="edit-input" type="text" placeholder="Name*">
            <button class="edit-form-btn">Login</button>
        </form>
        <button class="btn-go-back" @click="onGoBack()">Back</button>
    </div>
</template>

<script>
import { userService } from '../services/user.service';

export default {
    data() {
        return {
            user: {
                name: '',
            },
            loggedinUser: null
        }
    },
    async created() {
        this.loggedinUser = await userService.getUser()
    },
    methods: {
        onLogin() {
            if (this.user.name !== this.loggedinUser.name) return
            userService.login(this.user)
            this.$store.dispatch({ type: 'login', user: this.loggedinUser })
            this.$router.back()
        },
        onGoBack() {
            this.$router.back()
        }
    },
}
</script>

<style lang="scss">
.login {
    height: 90vh;
}

.edit-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
    gap: 10px;

    .edit-input {
        width: 30vw;
        height: 45px;
        padding-inline-start: 15px;
        border-radius: 15px;
    }

    .edit-form-btn {
        height: 45px;
        width: 75px;
        border: none;
        border-radius: 15px;
        background-color: #FF9500;
        color: #fff;
        width: 85px
    }
}

.btn-go-back {
    position: absolute;
    bottom: 10px;
    margin-top: 50px;
    height: 55px;
    width: 85px;
    font-size: 1.25rem;
    border-radius: 15px;
    border: none;
    color: #fff;
    background-color: #FF9500;
}
</style>
