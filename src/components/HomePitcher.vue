<template>
  <div>
    
    <Select style="width:200px" @change="HomePitcherChangeAction">
      <Option
        v-for="item in getHomePitcherList"
        :value="item.player"
        :key="item.player"
        
      >
      {{ item.player }}
      </Option>
    </Select>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["HomeIndex","AwayPitcher"]),
    ...mapGetters(["getHomePitcherList"])
  },
  methods:{
    HomePitcherChangeAction(e){
      this.$store.commit('HomePitcherChange', e.target.value)
    }
  }
};
</script>
