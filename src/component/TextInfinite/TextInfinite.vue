<style src="./TextInfinite.scss" module lang="scss"></style>
<script src="./TextInfinite.js"></script>

<template>
  <div :class="[$style.textInfinite]">
    <div
      ref="wrapper"
      :class="$style.wrapper">
      <template v-for="i of totalItems">
        <div
          ref="text"
          :class="$style.text"
          :style="{padding:`0 ${padding}vw`}"
          :key="i"
          v-html="text" />
      </template>
    </div>
  </div>
</template>
