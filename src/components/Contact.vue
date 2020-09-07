<template>
    <div class="contact" v-on:mouseover="hover = true" @mouseleave="hover = false">
        <div class="contact_information">
            <router-link :id=id :to="{ name: 'info', params: { contactId: id, contactData: contact }}" class="link">
                <img class="block" src="../img/block.png"/>
                <div>
                    <p class="contact_link">{{contact.name}} </p>
                    <p class="contact_link">{{contact.number}}</p>
                </div>
            </router-link>
            <div v-if="hover" v-on:click="showForm()" class='delete'><img src="../img/trash.png"></div>
        </div>
        <div class="modal" v-show="isEditing">
            <div class="modal_window">
                <h2>Удалить контакт?</h2>
                <button v-on:click="deleteContact(contact)" class='trash'>Да</button>
                <button v-on:click="hideForm()">Нет</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Contact',
        components: {},
        props: ['contact', 'id'],
        data() {
            return {
                isEditing: false,
                hover: true
            };
        },
        methods: {
            deleteContact(contact) {
                this.$emit('delete-contact', contact);
            },
            showForm() {
                this.isEditing = true;
            },
            hideForm() {
                this.isEditing = false;
            },
        },
    }
</script>

<style>
    .contact {
        margin-bottom: 10px;
        height: 64px;
        background: #F5F5F5;
        border-radius: 4px;
        min-width: 300px;
        width: auto;

    }

    .delete {
        position: relative;
        margin-right: 20px;
    }

    .link {
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
        text-decoration: none;
        color: black;
        text-align: left;
    }

    .contact_information {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .block {
        width: 40px;
        height: 40px;
        margin-left: 12px;
    }

    .contact_link {
        margin: 0 10px 0 10px;
    }

    .modal {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 0.3s ease;
    }
    .modal_window{
        width: 300px;
        height: 100px;
        background-color: #E5E5E5;
        border-radius: 6px;
    }

</style>
