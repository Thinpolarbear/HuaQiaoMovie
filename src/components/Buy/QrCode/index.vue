<template>
  <div id="qr">
   <canvas id="QRCode"></canvas>
  </div>
</template>

<script>
  import QRCode from 'qrcode'  // 引入qrcode
  export default {
    name : 'Qr',
    data() {
      return {
       randomIndex: '',
        QRCodeMsg: '', //生成二维码信息
      }
    },
    methods:{
      
    },
     watch: {
    // 通过监听获取数据
    QRCodeMsg(val) {
      // 获取页面的canvas
      var msg = document.getElementById("QRCode");
      // 将获取到的数据（val）画到msg（canvas）上
      QRCode.toCanvas(msg, val, function(error) {
        console.log(error);
      });
    }
  },
  mounted() {
     getQRCode:{
         var self = this;
         self.randomIndex = self.$route.params.randomIndex.toString();
         self.QRCodeMsg = self.randomIndex;//生成的二维码为URL地址
    }
    // var self = this;
    // self.randomIndex = self.$route.params.randomIndex;
  }
    // mounted () {
    //   let self = this;
    //   QRCode.toDataURL(
    //     'self.$route.params.randomIndex',
    //     {
    //       errorCorrectionLevel: "H", version : 1 
    //     },
    //     function(err,url) {
    //       if(!err) {
    //        self.randomIndex = url;
    //       }
    //     }
    //   );
    // },
  }
</script>