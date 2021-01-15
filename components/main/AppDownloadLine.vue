<template>
  <div class="download-line">
    <p class="download-line-text">
      {{ lineText }}
    </p>
    <v-btn
      color="#fff"
      link
      text
      :to="lineLinkTo"
    >
      {{ lineLinkText }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AppAddBan',
  props: {
    lineText: {
      type: String,
      default: ''
    },
    lineLinkText: {
      type: String,
      default: ''
    },
    lineLinkTo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.download-line {
  background-color: #31A767;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  flex-wrap: wrap;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.download-line-text {
  margin-bottom: 0;
  margin-right: 5px;
}
</style>
