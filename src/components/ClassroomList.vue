<template>
  <div>
    <ul>
      <li v-for="(item, key) in list" :key="key">{{ item.teachingId }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import _ from 'lodash';

export default {
  name: 'ClassroomList',
  data() {
    return {
      classrooms: [],
    };
  },
  created() {
    this.onFetchAlarms();
  },
  computed: {
    ...mapGetters({
      list: 'alarm/list',
      IsError: 'alarm/isError',
    }),
  },
  methods: {
    onFetchAlarms() {
      this.fetchAlarms().then(() => {
        this.classrooms = _.chain(this.list).groupBy('teachingId').map((value, key) => ({ classroom: key, alarms: value })).value();
        console.log(this.classrooms);
      });
    },
    ...mapActions({
      fetchAlarms: 'alarm/FETCH_LIST',
    }),
  },
};
</script>
<style lang="sass">

</style>
