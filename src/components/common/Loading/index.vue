<template>
  <div class="loading">
    <div class="spinner"></div>
  </div>
  <div class="wait">加载中......</div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: #34a672;
    animation: spin 1s linear infinite;
  }
}

.wait {
  text-align: center;
  color: green;
  font-size: 18px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
