<script setup>
const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Lấy dữ liệu giỏ hàng hoặc mặc định là {}
const cartItems = Object.entries(cart); // Chuyển thành mảng [id, { name, quantity }]
</script>

<template>
  <div>
    <h1>Danh sách sản phẩm trong giỏ hàng</h1>
    <ul>
      <li v-for="[id, item] in cartItems" :key="item.id">
        Product: {{ item.name }} - Quantity: {{ item.quantity }}
      </li>
    </ul>
  </div>
</template>
