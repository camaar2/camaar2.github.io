<template>
  <div class="contact-page">
    <h1 class="contact-heading">Contact Me</h1>
    <div class="contact-info">
      <div class="contact-item">
        <img src="/name.png" alt="Name icon">
        <span class="contact-text">Carmen Maar</span>
      </div>
      <div class="contact-item">
        <img src="/hotmail.png" alt="Email icon">
        <a href="mailto:carmenmaar@hotmail.com" class="contact-link">carmenmaar@hotmail.com</a>
      </div>
      <div class="contact-item">
        <img src="/linkedin.png" alt="LinkedIn icon">
        <a href="https://www.linkedin.com/in/carmen-maar-885b9924b" target="_blank" class="contact-link">LinkedIn Profile</a>
      </div>
      <div class="contact-item">
        <img src="/cv.png" alt="CV icon">
        <a href="/Carmen_Maar_CV_english.pdf" target="_blank" class="contact-link">Download CV</a>
      </div>
      <div class="contact-item">
        <img src="/facebook.png" alt="Facebook icon">
        <a href="https://www.facebook.com/carmen.maar.3/" target="_blank" class="contact-link">Facebook Profile</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.contact-page {
  text-align: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
}

.contact-item img {
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
  margin-right: 15px;
}
.contact-heading {
  font-size: 45px;
  color : #da6b8b;
  font-family: 'Bebas Neue', sans-serif; /* Change font */
}

.contact-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px; /* Adjust size as needed */
}

.contact-link {
  font-family: 'Bebas Neue', sans-serif;
  color: black;
  
  font-size: 18px; /* Adjust size as needed */
}
@media only screen and (max-width: 767px)
{
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  .contact-page {
    text-align: center;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
  }

  .contact-item {
    display: flex;
    align-items: center;
  }

  .contact-item img {
    width: 50px; /* Adjust size as needed */
    height: 50px; /* Adjust size as needed */
    margin-right: 15px;
  }
  .contact-heading {
    margin-top: 100px;
    font-size: 45px;
    color : #da6b8b;
    font-family: 'Bebas Neue', sans-serif; /* Change font */
  }

  .contact-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px; /* Adjust size as needed */
  }

  .contact-link {
    font-family: 'Bebas Neue', sans-serif;
    color: black;
    font-size: 18px; /* Adjust size as needed */
  }
}
</style>
