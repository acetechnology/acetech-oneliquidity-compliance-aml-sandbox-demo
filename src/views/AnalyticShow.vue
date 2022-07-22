<template>
  <div>
    <div class="card-header">
      <span class="eyebrow">Analysed At - {{ analysis.analysedAt }}</span>
      <h1 class="title">Riisk Score - {{ analysis.riskScore }}</h1>
    </div>
    <BaseIcon name="credit-card">
      <h2 style="margin-right: 5px">{{ analysis.currency }}</h2>
      <address>
        {{ analysis.address }}
      </address>
    </BaseIcon>
    {{ analysis.contributions }}
  </div>
</template>
<script>
export default {
  props: {
    analysis: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.card-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.action-buttons {
  display: inline-flex;
}
</style>
