<template>
    <div id="main">
         <Header title="选座购票" />
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name : 'Buy',

    components : {
        Header,
    },

    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>