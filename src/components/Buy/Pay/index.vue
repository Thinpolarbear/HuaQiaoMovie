<template>
  <div id="content">
    <div class="demo">

      <div class="booking-details">
        <p>影片：<span>后期渲染</span></p>

        <p>时间：<span>11月14日 21:00</span></p>

        <p>座位：</p>

        <ul id="selected-seats">
          <li v-for="i in seatInfo.seatHang.length" :key="i">
            {{ seatInfo.seatHang[i-1] }}排，{{ seatInfo.seatLie[i-1] }}列
          </li>
        </ul>

        <p>票数：<span id="counter">{{ seatInfo.seatHang.length }}</span></p>

        <p>
          总计：<b>￥<span id="total">{{ seatInfo.seatHang.length*40 }}</span></b>
        </p>

        <button class="checkout-button" @click="pay">确定购买</button>

        <div id="legend"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectSeat",

  data() {
    return {
      seatInfo:{},
      randomIndex:'',
    };
  },
  created: function(){
    this.getSeat();
  },
  methods:{
     getSeat(){
      const self = this;
      self.seatInfo = self.$route.params.seatPay;
      console.log(self.seatInfo);
    },
    pay(){
      var self = this;
      self.randomIndex = Math.floor(Math.random()*(900000)+100000);
      self.$router.push({name:'routerQrCode',params: { randomIndex : self.randomIndex}})
    }
  }
};
</script>

<style scoped>

</style>
