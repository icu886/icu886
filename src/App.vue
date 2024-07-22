<script setup lang="ts">
import TabContent from './components/TabContent.vue';
import { ref } from 'vue';

const currentTab = ref('国内')

const tabs: { [tab: string]: string } = {
  '国内': '/ChineseCompanies.toml',
  '国外': '/ForeignCompanies.toml'
}
</script>
<template>
  <div class="tabWrapper">
    <button v-for="(_, tab) in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab as string">
      {{ tab }}
    </button>
  </div>

  <div class="tabContentWrapper">
    <TabContent :filePath="tabs[currentTab]"></TabContent>
  </div>
</template>

<style scoped>
.tabWrapper {
  font-family: sans-serif;
  padding: 0;
  margin-top: 1em;
  margin-bottom: 10px;
  user-select: none;
  overflow-x: auto;
}

.tabContentWrapper {
  height: 97vh;
  overflow-y: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #eee;
  margin-right: 10px;
}

.tab-button:hover {
  background: #aea;
}

.tab-button.active {
  background: #aea;
}
</style>
