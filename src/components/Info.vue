<template>
    <div id="contactList">
        <router-link to="/" class="info_link">
            <img src="../img/back.png" class="back"/>
            <p>Назад</p>
        </router-link>
        <div class="infoContent">
            <InfoItem
                    class="info_list"
                    v-on:delete-info="deleteInfo"
                    v-for="(info, i) in information"
                    :id="(i+1)"
                    :key="info.value"
                    v-bind:info="info">
            </InfoItem>
            <AddInfo v-on:create-info="createInfo"></AddInfo>
        </div>
    </div>
</template>

<script>
    import InfoItem from "./InfoItem";
    import AddInfo from "./AddInfo";

    export default {
        name: 'Info',
        props: [],
        data() {
            return {
                isEditing: false,
                information:[]
            };
        },
        components: {
            AddInfo,
            InfoItem,

        },
        methods: {
            deleteInfo(info) {
                const contactIndex = this.information.indexOf(info);
                this.information.splice(contactIndex, 1);
            },

            createInfo(newValue) {
                this.information.push(newValue);
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
        display: flex;
        justify-content: center;
    }
    .infoContent {
        text-align: center;
        position: relative;

    }
    .info_list{
        background: #FFFFFF;
        border-radius: 4px;
    }
    .info_link{
        display: flex;
        margin-right: 20px;
        text-decoration: none;
        height: 30px;
        position: relative;
        bottom: 6px;
    }
    .back{
        width: 12px;
        height: 20px;
        top: 17px;
        padding-right: 5px;
        position: relative;
    }
</style>
