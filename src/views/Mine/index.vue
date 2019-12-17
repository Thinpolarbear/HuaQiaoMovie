<template>
    <div id="main">
         <Header title="个人讯息" />
         <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
    name : 'Mine',

    components : {
        Header,
        TabBar
    },

    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>