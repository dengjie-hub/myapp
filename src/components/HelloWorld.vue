<template>
  <div>
    <b-carousel
    id="carousel-1"
    style="text-shadow: 0px 0px 2px #000"
    fade
    controls
    indicators
    img-width="1024"
    img-height="480"
    :interval="1000"
    >
    <!-- fade设置动画淡入淡出; :interval="1000"设置图片切换之间间隔时间; controls启用上一个和下一个控件 indicators启用指示器按钮以跳到特定幻灯片-->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <!-- caption	放置在标题中的文本内容 -->
      <!-- text 文本内容放置在幻灯片的文本中 -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      
      }
    },
    methods: {
     
    }
  }
</script>