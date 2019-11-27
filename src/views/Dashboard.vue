<template>
  <layout name="LayoutDefault">
    <section class="dashboard">
      <div class="row">
          <div class="col-md-12">
        <ClassroomList />
        </div>
      </div>
    </section>
  </layout>
</template>

<script>
import Layout from '@/layouts/Layout';
import ClassroomList from '@/components/ClassroomList.vue';

export default {
  name: 'home',
  components: {
    Layout,
    ClassroomList,
  },
};
</script>
