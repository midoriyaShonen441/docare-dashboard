<template>
    <div class="popup-container" v-if="$store.state.popupStaffDelete">
        <div class="btn-close">
            <button class="closing" @click="haddleClose">X</button>
        </div>
        <div class="set-title"> 
            <h2 class="delete-warning">Warning you are now to delete this username {{$store.state.deleteUserName}}!</h2>
            <h4>type delete to confirm</h4>
        </div>
        <div class="type-delete">
            
        </div>
        <div class="set-input">
            <div>
                <input class="input-delete" v-model="setDelete" placeholder="type delete"/>
            </div>
            <div>
                <button class="btn-delete" v-if="setDelete !== 'delete'">Delete</button>
                <button class="btn-delete-active" v-if="setDelete === 'delete'">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
            // cssInputDelete: "input-delete",
            setDelete:""
        }
    },
    computed:{

    },
    methods:{
        haddleClose(){
            this.$store.state.popupStaffDelete = false;

        }
    },
}
</script>

<style scoped>
.popup-container{
    position: fixed;
    margin: auto;
    width: 700px;
    height: 300px;
    background: rgb(72, 72, 72);
    border-radius: 30px;
    z-index: 999;
    margin-left: 33%;
    margin-top: 5%;
}

.btn-close{
    text-align: right;
    margin-right: 30px;
    margin-top: 10px;
    font-size: 20px;
}

.closing{
    width: 30px;
}

h2{
    font-size: 18px;
    font-weight: 800;
}

h4{
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
}
.delete-warning{
    margin-top: 20px;
    text-align: center;
}

.set-input{
    margin-top: 30px;
    text-align: center;
}
.input-delete{
    height: 50px;
    width: 400px;
    border-radius: 10px;
    background: rgb(236, 236, 236);
    text-indent: 10px;
    color:black
}

.btn-delete{
    margin-top: 20px;
    background: gray;
    border-radius: 10px;
    width: 120px;
    height: 40px;
}

.btn-delete-active{
    margin-top: 20px;
    background: rgb(152, 0, 0);
    border-radius: 10px;
    width: 120px;
    height: 40px;
}

.btn-delete-active:hover{
    background: rgb(193, 2, 2);
}

.btn-delete-active:active{
    background: rgb(193, 2, 2);
}

</style>