<template>
  <div>
    
    <Select style="width:200px" @change="AwayPitcherChangeAction">
      <Option
        v-for="item in getAwayPitcherList"
        :value="item.player"
        :key="item.player"
      >
      {{ item.player }}
      </Option>
    </Select>
  </div>
</template>

<script>
import { mapState, mapGetters} from "vuex";

export default {
  computed: {
    ...mapState(["AwayIndex"]),
    ...mapGetters(["getAwayPitcherList"])
  },
  methods:{
    AwayPitcherChangeAction(e){
      this.$store.commit('AwayPitcherChange', e.target.value)
    }
  }
};
</script>
