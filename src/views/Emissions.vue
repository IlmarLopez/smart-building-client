<template>
  <Layout name="LayoutDefault">
    <section class="emissions">
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
  data() {
    return {};
  },
  methods: {
    // onChartReady(chart, google) {
    //   const query = new google.visualization.Query(
    //     'https://docs.google.com/spreadsheets/d/1qhyJnMpiuuwKLCY3t6W4bp6XKnixTFekAPlCpR8AcK0/edit?usp=sharing',
    //   );
    //   query.send(response => {
    //     const options = {
    //       title: 'Creating a Chart from a Teaching 5',
    //     };
    //     const data = response.getDataTable();
    //     chart.draw(data, options);
    //   });
    // },
  },
};
</script>
