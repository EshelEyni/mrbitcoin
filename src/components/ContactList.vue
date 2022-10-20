<template>
    <section class="contact-list">
        <h1>Contact List</h1>
        <button class="add-btn">
            <RouterLink :to="`/contact/edit/`"> Add Contact </RouterLink>
        </button>
        <ul>
            <TransitionGroup name="list">
                <li v-for="contact in contacts" :key="contact?._id">
                    <section class="btns">
                        <RouterLink class="edit-btn" :to="`/contact/edit/${contact._id}`">📝</RouterLink>
                        <button class="delete-btn" @click="onRemoveContact(contact._id)">❌</button>
                    </section>
                    <ContactPreview :contact="contact" />
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
.add-btn {
    padding: 15px;
    margin: 25px;
    border-radius: 25px;
    border: 1px solid #000;

    &>* {
        text-decoration: none;
        color: #000;
    }
}

.contact-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    background-color: darkcyan;
    padding: 10px;
    list-style-type: none;
    border-radius: 5px;


    li {
        background-color: darkseagreen;
        padding: 10px;
        border-radius: 15px;
        list-style: none;
        height: 150px;

        .btns {
            display: flex;
            justify-content: end;

            &>* {
                background-color: rgba(0, 0, 0, 0);
                border: none;
                font-size: 20px;
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
