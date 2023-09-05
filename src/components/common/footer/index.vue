<script setup>
import { ref, onMounted } from "vue";

// 创建响应式变量来存储时间差
const timeDiff = ref(formatTimeDifference());

// 在组件挂载后开始定时更新时间差
onMounted(() => {
  setInterval(() => {
    timeDiff.value = formatTimeDifference();
  }, 1000);
});

// 格式化时间差
function formatTimeDifference() {
  const targetDate = new Date("2023-08-14");
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const days = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
  const hours = Math.abs(Math.floor((timeDifference / (1000 * 60 * 60)) % 24));
  const minutes = Math.abs(Math.floor((timeDifference / (1000 * 60)) % 60));
  const seconds = Math.abs(Math.floor((timeDifference / 1000) % 60));
  return `${days}天${hours}小时${minutes}分钟${seconds}秒`;
}
</script>

<template>
  
    <div class="footer-box">
      <!-- 页脚标题 -->
      <div class="footer-title">
        <div>
          <!-- 版权信息 -->
          Copyright © 2023-2024
          <a href="https://github.com/xiaoyuer-icu/xiaoyuer" target="_blank"
            >xiaoyuer</a
          >
        </div>
        <!-- 小鱼图标 -->
        <div class="fish"></div>
      </div>  
      <div class="time-heart">
        <!-- 显示运行时间差 -->
        <div class="time">
          小鱼居然已
          <span class="heart-container">
            <div class="heart"></div>
          </span>
          {{ timeDiff }}
          <!-- 爱心 -->
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.footer-box {
  .footer-title {
    font-size: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: #34a672;
      font-size: 22px;
    }

    .fish {
      width: 22px;
      height: 22px;
      background: url(@/assets/yu.png) center/cover no-repeat;
      animation: swim 4s linear infinite;
      transform-style: preserve-3d;
      margin-left: 18px;
    }
  }
  .time-heart {
    display: flex;
    justify-content: center;
    .time {
      font-size: 22px;
      position: relative;
      text-align: center;
      margin-top: 5px;
      font-size: 22px;
      display: flex;
      align-items: center;

      .heart-container {
        margin-right: 8px;
        position: relative;
        margin-left: 8px; /* 调整爱心与时间的间距 */
        margin-bottom: -5px;
        transform: rotate(-45deg);
        .heart {
          width: 7px;
          height: 7px;
          background: red;
          position: relative;
          animation: heartbeat 0.8s infinite;
        }
        .heart::before,
        .heart::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          background: red;
          border-radius: 0 50% 50% 0;
        }
        .heart::before {
          border-radius: 50% 50% 0 0;
          top: -7px;
          left: 0;
        }

        .heart::after {
          border-radius: 0 50% 50% 0;
          top: 0;
          left: 7px;
        }
      }
    }
  }
}

@keyframes swim {
  0% {
    transform: translateX(0px) rotateY(0deg);
  }
  25% {
    transform: translateX(-15px) rotateY(0deg);
  }
  50% {
    transform: translateX(-15px) rotateY(180deg);
  }
  75% {
    transform: translateX(15px) rotateY(180deg);
  }
  88% {
    transform: translateX(15px) rotateY(0deg);
  }
  100% {
    transform: translateX(0px) rotateY(0deg);
  }
}
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
