<template>
  <router-link
    class="user-link"
    :to="{ name: 'analysis-show', params: { id: analysis.id } }"
  >
    <div class="oneL-user -shadow">
      <span class="eyebrow">Currency - {{ analysis.currency }}</span>
      <h4 class="title">{{ analysis.id }}</h4>
      <BaseIcon name="activity"
        >Analysed At - {{ analysis.analysedAt }}
      </BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    analysis: Object,
  },
};
</script>

<style scoped>
.oneL-user {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.oneL-user:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.oneL-user > .title {
  margin: 0;
}
.user-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
