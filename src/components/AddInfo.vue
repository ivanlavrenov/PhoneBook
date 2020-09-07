<template>
    <div id="AddInfo">
        <button v-on:click="openForm" v-show="!isCreating">
            Добавить информацию
        </button>
        <div v-show="isCreating">
            <div class='field'>
                <input type="text" v-model="title">
            </div>
            <div class='field'>
                <input type="text" v-model="value">
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
        name: 'AddInfo',
        components: {},
        data() {
            return {
                title: '',
                value: '',
                infoId: '',
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
                if (this.title.length > 0 && this.value.length > 0) {
                    const title = this.title;
                    const value = this.value;
                    const id = this.infoId;
                    this.$emit('create-info', {
                        title,
                        value,
                        id
                    });
                    this.title = '';
                    this.value = '';
                    this.infoId = +1;
                    this.isCreating = false;
                }
            }
        }
    };
</script>

<style>
    #AddInfo {
        margin-top: 10px;
    }

    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
</style>
