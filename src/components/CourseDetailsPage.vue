<template>
  <div>
    <h2 class="mad">Course Details</h2>
    <p>Course ID: {{ $route.params.id }}</p>
    <!-- Display more detailed information about the course -->
  </div>
</template>

<script>
export default {
  name: 'CourseDetailsPage',
};
</script>


<style scoped>
  /* Style for the heading */
  .mad {
    font-size: 24px;
    color: #ad2727;
    margin-bottom: 20px;
  }

  /* Style for the course ID */
  p {
    font-size: 16px;
    color: #285b68;
    margin-bottom: 10px;
  }
</style>
