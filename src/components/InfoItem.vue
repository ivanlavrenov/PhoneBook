<template>
    <div>
        <div :id=id class="info_item">
            <div class="info_text_block">
                <p class="info_item_text">{{info.title}}</p>
                <p class="info_item_text" >{{info.value}}</p>
            </div>
            <div>
                <img v-on:click="showFormEdit()" src="../img/edit.png" class="edit"/>
                <img v-on:click="showFormDelete" class='trash' src="../img/trash.png"/>
            </div>
        </div>
        <hr/>
        <div class="content" v-show="isEditing">
            <input class="input_edit" type='text' v-model="info.title">
            <input class="input_edit" type='text' v-model="info.value">
            <button v-on:click="hideFormEdit()">Готово</button>
        </div>
        <div class="modal" v-show="isDeleting">
            <div class="modal_window">
                <h2>Удалить информацию?</h2>
                <button v-on:click="deleteInfo(info)" class='trash'>Да</button>
                <button v-on:click="hideFormDelete()">Нет</button>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'InfoItem',
        components: {},
        props: ['info', 'id'],
        data() {
            return {
                isEditing: false,
                isDeleting: false
            };
        },
        methods: {
            deleteInfo(info) {
                this.$emit('delete-info', info);
            },
            showFormEdit() {
                this.isEditing = true;
            },
            hideFormEdit() {
                this.isEditing = false;
            },
            showFormDelete(){
                this.isDeleting = true;
            },
            hideFormDelete(){
                this.isDeleting = false;
            },
        },
    }
</script>

<style>
    .info_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        min-height: 40px;
        height: auto;
    }
    .info_item_text{
        text-align: left;
        margin: 2px;
    }
    .info_text_block{
        padding: 12px;
    }
    .trash{
        margin-right: 12px;
    }
    .edit{
        margin-right: 18px;
    }
    .input_edit{
        width: 110px;
        margin-bottom: 20px;
    }
    .modal_window{
        padding: 10px;
    }
    hr{
        margin: 0;
        position: relative;
        top: 1px;
    }
</style>
