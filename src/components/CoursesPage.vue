<template>
  <div>
    <h2 class="rod" >Available Courses</h2>
    <router-link v-for="course in courses" :key="course.id" :to="{ name: 'courseDetails', params: { id: course.id } }" class = "roy">
      {{ course.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CoursesPage',
  data() {
    return {
      courses: [
        { id: 1, title: 'Introduction to Vue.js' },
        { id: 2, title: 'Advanced JavaScript' },
        { id: 3, title: 'Web Development Fundamentals' },
      ],
    };
  },
};
</script>


<style scoped>
  .rod{
    font-size: 24px;
    color: #aa4121;
    margin-bottom: 20px;
  }

  .roy {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: #086981;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  .roy:hover {
    color: #0056b3;
  }
</style>
