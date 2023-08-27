<script setup>

</script>

<template>
    <div class="left-text-right-image">
      <div class="left">
        <p>This is some text on the left side.</p>
      </div>
      <div class="right">
        <img src="https://www.xiaoguang.eu.org/PhaseThree/wxQRCode.jpg" alt="Image">
      </div>
    </div>

    <div class="two-column-layout">
      <div class="column">
        <p>Left column content.</p>
      </div>
      <div class="column">
        <p>Right column content.</p>
      </div>
    </div>


    <div class="three-column-layout">
      <div class="column">
        <p>First column content.</p>
      </div>
      <div class="column">
        <p>Second column content.</p>
      </div>
      <div class="column">
        <p>Third column content.</p>
      </div>
    </div>

    <div class="grid-layout">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </div>


</template>

<style lang='scss' scoped>
.left-text-right-image {
  display: flex;
  align-items: center;
}

.left {
  flex: 1;
  padding: 20px;
}

.right {
  flex: 1;
  padding: 20px;
}

.right img {
  max-width: 100%;
  height: auto;
}


.two-column-layout {
  display: flex;
}

.column {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
}


.three-column-layout {
  display: flex;
}

.column {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
}


.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.item {
  padding: 20px;
  border: 1px solid #ccc;
}

</style>