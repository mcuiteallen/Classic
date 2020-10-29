<template>
  <div class="mainLayout" > 
  <!--<app-navbar2/>   -->
  <!--<b-navbar class="fixed-top" variant="faded" type="dark" style="background: rgb(51 51 51 / 93%);">
    <b-navbar-brand href="#">
      <label class="label" @click="chooseMenu(1)" >MR. 估車</label>
    </b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto navDiv" >
        <b-nav-item class="navImg" @click="chooseMenu(1)" ><i class="fa fa-home" style="font-size: 116%; " title="首頁"></i></b-nav-item>
        <b-nav-item class="navImg" @click="chooseMenu(2)" ><i class="fa fa-question-circle" style="font-size: 116%;" title="如何賣車?"></i></b-nav-item>
        <b-nav-item class="navImg" @click="chooseMenu(3)" ><i class="fa fa-address-book" style="font-size: 116%;" title="狂賀相簿"></i></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->
    <div class="mainContent">
      <div>
        <div v-show="selectedId === 1">
          <v-home></v-home>
        </div>  
        <div v-show="selectedId === 2">
          <v-sop></v-sop>
        </div>  
        <div v-show="selectedId === 3">
          <v-sample></v-sample>  
        </div>
      </div>
    </div>
    <div class="fixed-bottom footer row justify-content-center" style="background-color: rgba(51, 51, 51, 0.75);">
      <footer class="footerCss">
        估車先生&nbsp;版權所有@2020</footer>
    </div>
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import Sop from "@/components/Sop.vue";
import Sample from "@/components/Sample.vue";
import Vue from "vue";
//import swiper from "@/components/swipe/swipe.vue";
//import AppNavbar2 from './app-navbar/AppNavbar2'
import { BNavbar } from 'bootstrap-vue'
import { BNavbarNav } from 'bootstrap-vue'
import { BNavbarBrand } from 'bootstrap-vue'
import { BNavItem } from 'bootstrap-vue'
import { BCollapse } from 'bootstrap-vue'

let self = {};
export default {
  name: "v-main",
  components: {
    'v-home': Home,
    'v-sop': Sop,
    'v-sample': Sample,
    //"m-swipe": swiper,
    //AppNavbar2,
    'b-navbar': BNavbar,
    'b-navbar-nav': BNavbarNav,
    'b-nav-item': BNavItem,
    'b-collapse': BCollapse,
    'b-navbar-brand': BNavbarBrand,
  },
  data() {
    return {
      selectedId: 1,
      tops: [],
      opened: true,
    };
  },
  created () {
    if (document.documentElement.style.getPropertyValue('--baseTheme').trim() !== '') {
      this.options.activeColor = document.documentElement.style.getPropertyValue('--baseTheme').trim()
    }
  },
  mounted() {
    self = this;    
    this.$bus.$on('menuChange', async event => {
      if(event.id === 3){
        this.$bus.$emit('getCarMainten', {id: event.id})
      }       
      self.selectedId = event.id
    })      
    //let swiper = this.$refs.swiper;
    //if (swiper.dom) {
    //  this.swiper = swiper.dom;
   // }
  
  },  
  methods: {
    chooseMenu (tabId) {
      if(tabId === 3){
        this.$bus.$emit('getCarMainten', {id: tabId})
        this.$bus.$emit('menuChange', {id: tabId}) 
      }else{
        this.$bus.$emit('menuChange', {id: tabId}) 
      }    
    },
    getImgList () {
      self.tops=[{image: '/static/img/home/Fa.jpg', id: 0, title: 'test1'},{image: '/static/img/home/Lambor.jpg', id: 1, title: 'test2'},{image: '/static/img/home/welcome-3.jpg', id: 2, title: 'test3'}]
    }, 
  },
  beforeDestroy() {}
};
</script>

<style scoped lang="scss">
.mainLayout {
  padding: 0rem;
  background-color: #ffffff
}
.mainContent {
  width: 100uw;

  //height: 100uh;
  background: #333333;
}
.header-img {
  width: 30%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
}
.navbar-dark .navbar-nav .nav-link {
    color: #ffffff;
    font-family:微軟正黑體;
    font-size: 180%
}
.navImg {
  font-size: 100%; 
}
.navbar .navbar-nav .nav-item .nav-link {
  padding-right: 15px;
  padding-left: 15px;
  line-height: 0;
}
.label {
    display: inline-block;
    margin-bottom: 0rem;
    font-size: 172%;
    font-weight: 100;
    @media (max-width:483px) {
      font-size: 0%; 
    }      
}
.labelPhone {
    display: inline-block;
    margin-bottom: 0rem;
    font-size: 0%;
    @media (max-width:483px) {
      font-size: 80%; 
    }      
}
.footerCss {
  font-size: 16px;
  color:#FFFFFF; 
}
</style>
