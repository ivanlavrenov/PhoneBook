<template>
    <div id="contactList">
        <div class="content">
            <Contact
                    v-on:delete-contact="deleteContact"
                    v-for="(contact, i) in contacts"
                    :id="(i+1)"
                    :key="contact.name"
                    v-bind:contact="contact">
            </Contact>
            <AddContact v-on:create-contact="createContact"></AddContact>
        </div>
    </div>
</template>

<script>
    import Contact from "./Contact";
    import AddContact from "./AddContact";

    export default {
        name: 'ContactList',
        props: [],
        data() {
            return {
                isEditing: false,
                contacts: []
            };
        },
        components: {
            Contact,
            AddContact

        },
        methods: {
            deleteContact(contact) {
                const contactIndex = this.contacts.indexOf(contact);
                this.contacts.splice(contactIndex, 1);
            },

            createContact(newContact) {
                this.contacts.push(newContact);
                JSON.stringify(newContact);
                localStorage.setItem('contact', newContact)
            },

            showForm() {
                this.isEditing = true;
            },
            hideForm() {
                this.isEditing = false;
            },
        }

    }
</script>

<style>
    #contactList {
        text-align: center;
        width: auto;
    }

    .content {
        text-align: center;
        width: auto;
    }
</style>
