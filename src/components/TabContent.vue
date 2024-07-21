<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { CompanyType } from '../types/CompanyType';
import { readDataFromTomlFile } from '../utils/fileUtils'
import Company from './Company.vue';

const companies = ref<CompanyType[]>([]);

const props = defineProps<{
    filePath: string
}>();

onMounted(() => {
    readDataFromTomlFile<{ companies: CompanyType[] }>(props.filePath)
        .then(data => companies.value = data.companies)
        .catch(error => console.error(error));
});

watch(() => props.filePath, async (newFilePath, _oldFilePath) => {
    readDataFromTomlFile<{ companies: CompanyType[] }>(newFilePath)
        .then(data => companies.value = data.companies)
        .catch(error => console.error(error));
});

</script>
<template>
    <div class="tabContent" v-for="company in companies">
        <Company :company="company"></Company>
    </div>
</template>

<style scoped>
.tabContent {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-color: #aca;
    border-style: groove;
}

.tabContent:hover {
    border-color: #cac;
}
</style>