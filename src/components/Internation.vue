<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { parse } from 'toml';
import { Company } from '../Company';

const companies = ref<Company[]>([]);

async function readCompaniesFromTOML(filePath: string): Promise<Company[]> {
    try {
        // 使用 fetch 获取文件内容
        const response = await fetch(filePath);
        const tomlData = await response.text();

        // 解析 TOML 内容
        const parsedData = parse(tomlData) as unknown as { companies: Company[] };

        // 转换为 Company 数组类型
        return parsedData.companies;
    } catch (error) {
        console.error('Error reading or parsing TOML file:', error);
        throw error;
    }
}

onMounted(() => {
    readCompaniesFromTOML('/companies.toml')
        .then(data => companies.value = data)
        .catch(error => console.error(error));
    console.log(`the component is now mounted.`)
})

</script>

<template>
    <div class="companyWrapper" v-for="(company, index) in companies" :key="index">        
        <p class="companyName">{{ company.name }}</p>
        <p class="companyProvience">{{ company.provience }}</p>
        <p class="companyCity">{{ company.city }}</p>
        <p class="companyAddress">{{ company.address }}</p>
        <p class="companyBigThing">{{ company.bigThing }}</p>
    </div>
</template>

<style scoped>
.companyWrapper {
    margin: 0;
    padding: 10px;
}

.companyName {
    font-size: 24px;
    font-weight: 700;
}

.companyProvience {
    font-size: 18px;
    font-weight: 600;
}

.companyCity {
    font-size: 18px;
    font-weight: 600;
}

.companyAddress {
    font-size: 16px;
    font-style: italic;
}

.companyBigThing {
    text-decoration: underline;
}
</style>