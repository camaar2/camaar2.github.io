<template>
  <div class="page">
    <div class="container">
      <img src="/mina.jpg" alt="Me" class="profile-pic">
      <img src="/paperclip.png" alt="Paperclip" class="paperclip">
      <img src="/pilt2.png" alt="Extra Picture" class="extra-pic">
      <div class="caption rotate-left">Carmen Maar</div>
      <div v-if="!showBio && isPhone" class="bio rotate-left">
        <button class="more-button" @click="showBio = true">Click for info</button>
      </div>
      <div v-if="showBio && isPhone" class="bio-modal">
        <img src="/phoneaboutme2.png" alt="About Me" class="phone-about-me" @click="showBio = false">
        <span class="close-modal" @click="showBio = false">×</span>
      </div>
      <div v-if="!isPhone" class="bio rotate-left">
        <p>
          Currently pursuing a degree in Business IT, I am eager to apply my theoretical knowledge and practical skills in a professional setting. My journey in the field of IT began during the Covid-19 pandemic, where I founded my own company, which was a huge learning experience. This not only taught me a lot about running a business but also fueled my desire to delve deeper into the intersection of business and technology.
          One of my key strengths lies in my design proficiency. Whether it's crafting visually appealing content or conceptualizing user-friendly interfaces, I take pride in my ability to blend creativity with functionality. Furthermore, my experience in managing social media platforms has equipped me with a profound understanding of digital marketing strategies and consumer behaviour, which I believe will be invaluable in the evolving landscape of banking and finance.
          In addition to my professional pursuits, I am deeply passionate about sports, particularly boxing. Beyond being a source of physical fitness, boxing has taught me discipline, perseverance, and the importance of strategic thinking. In my free time, I not only train diligently but also take pleasure in sharing my knowledge by occasionally teaching boxing classes. This experience has further developed my leadership skills and reinforced my commitment to continuous learning and improvement.
          What sets me apart is my relentless pursuit of excellence and my curiosity to solve complex problems. I thrive in environments that encourage innovation and collaboration.
        </p>
      </div>
      <img src="/oskused1.png" alt="Skills" class="skills-pic">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBio: false,
      isPhone: false, 
      isButtonVisible: true 
    };
  },
  mounted() {
  
    this.isPhone = window.innerWidth <= 767;
    
    this.isButtonVisible = window.innerWidth <= 1647;
    
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      
      this.isButtonVisible = window.innerWidth <= 1647;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

.page {
  background-image: url('/pilt1.png');
  background-size: auto;
  background-position: center;
  font-family: 'Arial', sans-serif;
  height: 100vh;
}

.container {
  position: relative;
  padding: 20px;
  color: #000000; 
}

.profile-pic {
  width: 260px; 
  height: auto;
  position: absolute;
  top: 100%;
  left: 22%;
}
.paperclip {
  width: 90px;
  height: auto;
  position: absolute;
  top: 30%; 
  left: 28%; 
  transform: rotate(20deg);
}

.extra-pic {
  width: 480px; 
  height: auto;
  position: absolute;
  top: 750%;
  left: 18%;
  transform: rotate(-8deg);
}

.caption {
  position: absolute;
  top: 120%;
  left: 50%;
  font-size: 20px;
  font-family: 'Shadows Into Light', cursive;
}

.bio {
  position: absolute;
  top: 200%;
  left: 45%;
  width: 20%;
  font-family: 'Shadows Into Light', cursive;
}
.rotate-left {
  transform: rotate(-8deg); 
}

.skills-pic {
  width: 320px;
  height: auto;
  position: absolute;
  top: 820%;
  right: 58%;
  transform: rotate(-8deg);
}
@media only screen and (max-width: 767px) {
  .page {
    background-image: url('/phoneabout2.png');
    background-size: cover;
    background-position: center;
    font-family: 'Arial', sans-serif;
    height: 100vh;
  }
  .bio-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .more-button {
    position: absolute;
    top: 10px; 
    left: -110px; 
    z-index: 100; 
  }

  .bio-modal img.phone-about-me {
    max-width: 90%; 
    max-height: 90vh; 
    cursor: pointer;
  }

  .bio-modal .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }

  .container {
    position: relative;
    padding: 20px;
    color: #000000; 
  }

  .profile-pic {
    width: 100px; 
    height: auto;
    position: absolute;
    top: 500%;
    left: 5%;
  }
  .paperclip {
    width: 50px; 
    height: auto;
    position: absolute;
    top: 415%; 
    left: 10%; 
    transform: rotate(20deg);
  }

  .extra-pic {
    width: 250px; 
    height: auto;
    position: absolute;
    top: 750%;
    left: -10%;
    transform: rotate(-8deg);
  }

  .caption {
    position: absolute;
    top: 575%;
    left: 40%;
    font-size: 20px;
    font-family: 'Shadows Into Light', cursive;
  }

  .bio {
    position: absolute;
    top: 620%;
    left: 80%;
    width: 40%;
    font-family: 'Shadows Into Light', cursive;
  }
  .rotate-left {
    transform: rotate(-8deg); 
  }

  .skills-pic {
    width: 150px;
    height: auto;
    position: absolute;
    top: 820%;
    right: 55%;
    transform: rotate(-8deg);
  }
}
</style>