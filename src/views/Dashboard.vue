<template>
  <Layout name="LayoutDefault">
    <section class="dashboard">
      <div class="row">
        <div class="col-md-12">
          <ClassroomList />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from '@/layouts/Layout';
import ClassroomList from '@/components/ClassroomList.vue';

export default {
  name: 'Home',
  components: {
    Layout,
    ClassroomList,
  },
};
</script>
