<template>
  <div>
    <vuestic-widget  class="no-v-padding sampleNavCss">   
        <div class="row justify-content-center">
          <i class="fa fa-arrow-circle-left iconCss" style="font-size: 250%; " @click="chooseMenu(1)" title="首頁"></i>
        </div>              
        <div class="card text-center m-3">
            <h3 class="card-header" style="font-family:微軟正黑體;">狂賀!!</h3>
            <div class="card-body">            
              <div class="row" style="padding: 2%;">
                <div  v-for="(item, i) in pageOfItems"  :key="i" class="col-md-3">
                  <img :src="item.img" style="width: 100%;" alt="高價收購二手車、收購中古車、線上估車、賣二手車">
                  <span>{{item.text}}</span>
                </div>   
              </div>               
            </div>
            <div class="card-footer pb-0 pt-3">
                <jw-pagination :items="carInfo" @changePage="onChangePage" :labels="customLabels" :pageSize=8></jw-pagination>
            </div>
        </div> 
                
    </vuestic-widget>
  </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios'
import JwPagination from 'jw-vue-pagination';
import Apis from '@/util/Apis'
Vue.component('jw-pagination', JwPagination);
Vue.use(axios)
let self = {};

export default {
  name: "Sample",
  computed: {      
  },
  components: {
  },
  data() {
    return {
      carInfo: [],     
      pageOfItems: [],
      customLabels: {
        first: '<<',
        last: '>>',
        previous: '<',
        next: '>'
      },      
    };
  },
  mounted() {
    self = this
    this.$bus.$on('getCarMainten', async event => {
      self.getCarMainten()
    })     
  },
  watch: {      
  },
  methods: {
    getCarMainten: function () {
      this.isLoading = true
      Apis.file.get
        .jsonFile('/static/carMainten.json')
        .then(function (xhr) {
          self.isLoading = false
          if (xhr.data) {
            self.carInfo = xhr.data.buy
          }
        })
        .catch(function (error) {
          self.isLoading = false
          //DeviceOnApis.MessageBox.Error(self, error)
        })
    },    
    onChangePage(pageOfItems) {
      // update page of items
      self.pageOfItems = pageOfItems;
    },
    chooseMenu (tabId) {
      this.$bus.$emit('menuChange', {id: tabId})   
    },              
  }, 
  beforeDestroy() {}
};
</script>

<style>
.sampleNavCss{
  margin-top: 10px;   
}

a:not([href]):not([tabindex]) {
    color: #000000;
    cursor: pointer;
}
.iconCss{
  color: #34495e;
}
.iconCss:hover{
  color: #34495ea6;
}
</style>
