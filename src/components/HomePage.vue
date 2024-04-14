<template>
  <div class="page">
    <div class="main-content">
      <div class="text">
        <h1>Welcome to Carmen Maar!</h1>
        <p class="description">Enthusiastic and driven student with a passion for software development, currently seeking a traineeship program to further develop skills and knowledge in the field. Proficient in design, I excel in creating visually captivating content and intuitive user interfaces, blending creativity with functionality seamlessly. With hands-on experience managing social media platforms, I possess a deep understanding of digital marketing strategies and consumer behavior. Eager to contribute and learn in a dynamic environment while pursuing academic excellence in my fourth semester.</p>
      </div>
    </div>
    <div class="side-image">
      <img src="/me.jpg" alt="Me" class="me-image">
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.page {
  background-image: url('/taustap.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  text-align: center;
  color: #fff;
  padding: 20px;
  font-family: 'Bebas Neue', sans-serif;
}

h1 {
  position: absolute;
  top: 20%;
  left: 7%;
  font-size: 50px;
  font-family: 'Bebas Neue', sans-serif;
}

.description {
  position: absolute;
  top: 35%;
  left: 7%;
  font-size: 30px;
  width: 30%;
}

.side-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.me-image {
  width: 420px; 
  height: auto;
  position: absolute;
  top: 30%;
  left: 52%;
}
@media only screen and (max-width: 767px)
{
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  .page {
    background-image: url('/phonebg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .text {
    text-align: center;
    color: #fff;
    padding: 20px;
    font-family: 'Bebas Neue', sans-serif;
  }

  h1 {
    position: absolute;
    top: 15%;
    left: 12%;
    font-size: 35px;
    font-family: 'Bebas Neue', sans-serif;
  }

  .description {
    position: absolute;
    top: 55%;
    left: 5%;
    font-size: 20px;
    width: 90%;
  }

  .side-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .me-image {
    width: 200px; 
    height: auto;
    position: absolute;
    top: 24%;
    left: 22%;
  }
}
</style>

