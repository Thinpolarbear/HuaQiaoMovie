<template>
  <div id="main">
        <Header title="影院信息" />
        <div id="content">
            <div class="search_input">
                <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" />
                </div>
            </div>
            <CList />
        </div>
        <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import CList from "@/components/Cinema/List";

export default {
  name: "Cinema",

  components: {
    Header,
    TabBar,
    CList
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 30px;}
.search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
</style>
