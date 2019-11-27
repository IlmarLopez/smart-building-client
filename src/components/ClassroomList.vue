<template>
  <div class="portlet">
    <div class="portlet__head">
      <h4 class="portlet__head-title">Teaching 5</h4>
    </div>
    <div class="portlet__body">
      <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { GChart } from 'vue-google-charts';
import _ from 'lodash';

export default {
  name: 'ClassroomList',
  components: {
    GChart,
  },
  data() {
    return {
      classrooms: [],
      chartOptions: {
        chart: {
          title: 'Creating a Chart from a Teaching 5',
        },
      },
    };
  },
  computed: {
    chartData: function() {
      var chartData = [];
      var header = ['Name', 'Activations', { role: 'style' }];
      chartData.push(header);

      this.classrooms.forEach(element => {
        chartData.push([`Classroom ${element.classroom}`, element.alarms.length, 'color: #76A7FA']);
      });

      return chartData;
    },
    ...mapGetters({
      list: 'alarm/list',
      IsError: 'alarm/isError',
    }),
  },
  created() {
    setInterval(() => {
      this.onFetchAlarms();
    }, 1000);
  },
  methods: {
    onFetchAlarms() {
      this.fetchAlarms().then(() => {
        this.classrooms = _.chain(this.list)
          .groupBy('teachingId')
          .map((value, key) => ({ classroom: key, alarms: value }))
          .value();
      });
    },
    ...mapActions({
      fetchAlarms: 'alarm/FETCH_LIST',
    }),
  },
};
</script>
<style lang="sass"></style>
