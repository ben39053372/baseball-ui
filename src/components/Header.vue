
<template>
  <div class="header">
       <Carousel autoplay v-model="value2" loop>
        <CarouselItem class="picture">
            <div class="demo-carousel">
            <img style="width:200px;" src="data:image/jpeg;base64,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">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            <img style="width:200px;" src="https://cw1.tw/CW/opinion/images/common/old/shutterstock_134362790.jpg">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img style="width:200px;" src="https://driver.cool3c.com/files/10/57924232-5092-47a7-b578-934965114d25.png">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img style="width:200px;" src="https://s.yimg.com/ny/api/res/1.2/sfFFdOd2p0hKhmOsLA1IzA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/zh-Hant-TW/homerun/www_dw_com_641/4f27a2cf029f6bea24e39ec224893e3e">
            </div>
        </CarouselItem>
    </Carousel>
    <h1 class="title">~棒球運彩分析~</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      value2: 0
    }
  }
}
</script>

<style>
.title{
    font-family: fantasy;
    font-size:60px;
    color: white
}
</style>
