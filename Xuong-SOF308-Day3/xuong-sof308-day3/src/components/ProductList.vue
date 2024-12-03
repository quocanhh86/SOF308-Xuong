<script setup>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';

    const products = ref([]);
    const urlProducts = 'https://67414054e4647499008d305b.mockapi.io/api/v1/products';
    async function getProduct() {
     products.value = await (await fetch(urlProducts)).json();
    }

getProduct()
function formatPrice(price) {
  const numberPrice = Number(price) + 1000000; // Chuyển giá trị về số
  if (isNaN(numberPrice)) return 'N/A'; // Kiểm tra nếu không phải số
  return numberPrice.toLocaleString('vi-VN') + ' VND'; // Định dạng tiền Việt
}

localStorage.setItem('name', 'SD19312');
</script>

<template>
  <div class="container">
    <h1 class="mb-3 mt-3 text-center">List Product</h1>
    <router-link to="/cart">
      Xem giỏ hàng
    </router-link>
    <div class="row">
      <div class="col-3 g-3" v-for="product in products" :key="product.id">
          <ProductItem :id="product.id"  :productName="product.name">
              <template #productName>
                {{ product.name }}
              </template> 
              <template #productPrice>
                {{ formatPrice(product.price)}}             
              </template>
          </ProductItem>
      </div>
    </div>
  </div>
</template>