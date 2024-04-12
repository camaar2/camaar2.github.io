<template>
  <div>
    <nav class="bg-pink-200 py-2 sm:py-4">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="logo">
            <img src="/logo2.png" alt="Logo" class="logo-img" />
          </router-link>
        </div>
        <div class="nav-links">
          <!-- Regular links for larger screens -->
          <div class="regular-links" v-if="!isPhone">
            <router-link to="/" class="nav-link" active-class="active-link">HomePage</router-link>
            <router-link to="/about_me" class="nav-link" active-class="active-link">About Me</router-link>
            <router-link to="/projects" class="nav-link" active-class="active-link">Projects</router-link>
            <router-link to="/contact" class="nav-link" active-class="active-link">Contact</router-link>
          </div>
          <!-- Dropdown menu for phones -->
          <div class="dropdown" v-else>
            <button class="dropbtn" @click="toggleDropdown">&#61;</button>
            <div class="dropdown-content" :class="{ active: showDropdown }">
              <button class="closebtn" @click="toggleDropdown">X</button>
              <router-link to="/" class="nav-link" active-class="active-link">HomePage</router-link>
              <router-link to="/about_me" class="nav-link" active-class="active-link">About Me</router-link>
              <router-link to="/projects" class="nav-link" active-class="active-link">Projects</router-link>
              <router-link to="/contact" class="nav-link" active-class="active-link">Contact</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isPhone = ref(false);
const showDropdown = ref(false);

onMounted(() => {
  // Check screen size on mount and whenever the window is resized
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

function checkScreenSize() {
  // Set isPhone to true if the window width is less than 640 pixels
  isPhone.value = window.innerWidth < 640;
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<style scoped>
.nav-link {
  cursor: pointer;
  color: #000000;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.2s, color 0.2s;
}

.nav-link:hover {
  background-color: #f2afb8;
  color: white;
}

.active-link {
  background-color: #fcecf3;
  color: rgb(0, 0, 0);
}

.logo-img {
  height: 15rem;
  width: auto;
  margin-top: -50px;
}

/* Positioning the route buttons to the right */
.nav-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: -180px;
}

@media screen and (max-width: 640px) {
  .max-w-7xl {
    max-width: 100%;
  }
  .flex {
    flex-direction: column;
    align-items: center;
  }
  .bg-pink-200 {
    background-size: cover; /* Fix background size for phones */
  }
  .nav-link {
    cursor: pointer;
    color: #000000;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.2s, color 0.2s;
  }

  .nav-link:hover {
    background-color: #f2afb8;
    color: white;
  }
  
  .logo-img {
    height: 10rem;
    width: auto;
    margin-top: -10px;
  }
  .nav-links {
    margin-top: -90px; /* Adjusted margin top for smaller screens */
  }
  .bg-pink-200 {
    background-size: contain; /* Making background picture smaller */
    background-repeat: no-repeat;
    background-position: center;
  }
  .nav-link {
    font-size: 0.8rem; /* Adjusted font size for smaller screens */
  }
  .dropbtn {
    cursor: pointer;
    color: #000000;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    font-weight: bold;
    padding: 12px 20px;
    border-radius: 10px;
    margin-top: 10px;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
    right: 0;
    top: 60px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }

  /* Show the dropdown content when dropdown is active */
  .dropdown-content.active {
    display: block;
  }

  /* Dropdown links */
  .dropdown-content a {
    color: #000000;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.2s, color 0.2s;
  }

  /* Style the dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #f2afb8;
    color: white;
  }

  /* Close button */
  .closebtn {
    float: right;
    cursor: pointer;
    padding: 8px 16px;
  }

  /* Regular links for larger screens */
  .regular-links {
    display: flex;
    gap: 1rem;
  }


  /* Positioning the route buttons to the right */
  .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin-top: -180px;
  }
}
</style>