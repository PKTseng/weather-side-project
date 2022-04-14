<template>
  <div class="fixed top-0 left-0 z-50 w-full h-screen opacity-80" :class="{ 'bg-black': !qrcodeLoading, 'bg-transparent': qrcodeLoading }" v-if="isLoading">
    <div class="flex flex-col justify-center items-center w-full h-full">
      <strong class="font-mono text-2xl tracking-wider" :class="{ 'text-black': qrcodeLoading, 'text-white': !qrcodeLoading }">Loading...</strong>
      <div class="flex justify-center items-center mt-3">
        <div class="inline-block w-6 h-6 rounded-full icons" v-for="num in 5" :key="num"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      require: true,
    },
    qrcodeLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.icons {
  animation: slide 1s infinite;

  $bgColor: #008fb2, #009b9e, #00a77d, #00b247, #5ab027;

  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      animation-delay: (0.1s * $i);
      background: nth($bgColor, $i);
    }
  }
}

@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
