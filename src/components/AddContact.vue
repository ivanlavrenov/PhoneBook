<template>
    <div id="AddContact">
        <button v-on:click="openForm" v-show="!isCreating">
            Добавить контакт
        </button>
        <div v-show="isCreating">
            <div class='field'>
                <input maxlength="20" v-model="contactName" placeholder="Имя" type='text'>
            </div>
            <div class='field'>
                <input maxlength="20" type="number" placeholder="Номер телефона" v-model="contactNumber">
            </div>
            <div>
                <button class='button' v-on:click="sendForm()">
                    Создать
                </button>
                <button class='button' v-on:click="closeForm">
                    Отмена
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'AddContact',
        components: {},
        data() {
            return {
                contactName: '',
                contactNumber: '',
                contactId: '',
                isCreating: false,
            };
        },
        methods: {
            openForm() {
                this.isCreating = true;
            },
            closeForm() {
                this.isCreating = false;
            },
            sendForm() {
                if (this.contactName.length > 0 && this.contactNumber.length > 0) {
                    const name = this.contactName;
                    const number = this.contactNumber;
                    const id = this.contactId;
                    this.$emit('create-contact', {
                        name,
                        number,
                        id
                    });
                    this.contactName = '';
                    this.contactNumber = '';
                    this.contactId = +1;
                    this.isCreating = false;
                }
            }
        }
    };
</script>

<style>
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
</style>
