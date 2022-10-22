<template>
    <section class="contact-list">
        <h1 class="cl-header">Contact List</h1>
        <RouterLink class="add-btn" :to="`/contact/edit/`"> Add Contact </RouterLink>
        <ul>
            <TransitionGroup name="list">
                <li v-for="contact in contacts" :key="contact?._id">
                    <ContactPreview :contact="contact" />
                    <section class="btns">
                        <RouterLink class="edit-btn" :to="`/contact/edit/${contact._id}`">
                            <button>Edit</button>
                        </RouterLink>
                        <button class="delete-btn" @click="onRemoveContact(contact._id)">Delete</button>
                    </section>
                </li>
            </TransitionGroup>
        </ul>
    </section>
</template>

<script>
import ContactPreview from '@/components/ContactPreview.vue'

export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        }
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('contact-removed', contactId)
        },
    },
    components: {
        ContactPreview,
        ContactPreview
    }
}
</script>

<style lang="scss">
.cl-header {
    text-align: center;
    margin-bottom: 25px;
}

.add-btn {
    padding: 15px;
    margin: 25px;
    border-radius: 25px;
    background-color: #FF9500;
    border: 1px solid #000;
    text-decoration: none;
    color: #000;
}

.contact-list ul {

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    margin-top: 50px;
    gap: 10px;
    // background-color: rgb(139, 107, 0);
    padding: 10px;
    list-style-type: none;
    border-radius: 5px;


    li {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #FF9500;
        color: #13161F;
        padding: 10px;
        border-radius: 15px;
        list-style: none;
        height: 175px;

        .btns {
            display: flex;
            justify-content: end;
            gap: 10px;

            button {
                color: #FF9500;
                background-color: #fff;
                border-radius: 5px;
                padding: 5px;
                border: 1px solid #FF9500;
                font-size: 0.80rem;
                cursor: pointer;
                text-decoration: none;
            }
        }
    }

    .actions {
        margin-block-start: 1em;
    }
}


.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>
