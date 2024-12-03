<script setup>
import { ref } from 'vue';

const catagory = ref([]);
const catagoriesUrl = 'https://67414054e4647499008d305b.mockapi.io/api/v1/categories';
async function getCatagory() {
    catagory.value = await (await fetch(catagoriesUrl)).json();
}
getCatagory();
</script>

<template>
    <div>
        <h1 class="mb-3 mt-3 text-center">List Catagory</h1>
        <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in catagory" :key="c.id">
                    <td>{{ c.code }}</td>
                    <td>{{ c.name }}</td>
                    <td>{{ c.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>