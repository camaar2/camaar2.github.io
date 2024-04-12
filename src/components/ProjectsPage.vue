<template>
  <div class="projects-page">
    <div class="project-section">
      <div class="project">
        <img src="/tudengid.png" alt="Project Image" class="project-image" />
        <div class="project-description">
          <h2>Tudengid Köögis Web Application</h2>
          <p>{{ projectDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projectDescription: `The biggest project I have worked on and am most proud of is the Tudengid Köögis web application. In a team of four, I proposed the idea of ​​creating a website with the functionality of a smart fridge. Clients would be able to add their food items and expiration dates. When products expire, they are marked in red. The application recommends recipes based on the contents of the fridge, and users can also search for recipes, mark them as favorites, and save them. Users can add their own recipes and share them with others. Recipes can be sorted according to user intolerances. I also emphasized the front-end development of the project, which deepened my love for web design and user experience.`
    };
  }
};
</script>

<style>
.projects-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.project-section {
  display: flex;
  justify-content: center;
}

.project {
  text-align: center;
}

.project-image {
  width: 800px;
  height: auto;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.project-description {
  margin-left: 40px;
  margin-right: 40px;
}

.project-description h2 {
  margin-bottom: 10px;
}

.project-description p {
  line-height: 1.6;
}
@media only screen and (max-width: 767px)
{
  .projects-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }

  .project-section {
    display: flex;
    justify-content: center;
  }

  .project {
    text-align: center;
  }

  .project-image {
    width: 400px;
    height: auto;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    margin-top: 50px;
  }

  .project-description {
    margin-left: 40px;
    margin-right: 40px;
  }

  .project-description h2 {
    margin-bottom: 10px;
  }

  .project-description p {
    line-height: 1.6;
  }
}
</style>

