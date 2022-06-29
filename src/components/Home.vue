<template>
  <div>
      <vuestic-widget class="no-v-padding homeNavCss " >
        <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage"></loading>
        <!--<div class="row justify-content-center backgroundDiv">
          <img class="sopImg" src="/static/img/home/background.jpg">    
        </div> -->     
        <nav class="social">
            <ul>
                <li>
                    <a :href="'tel:0926624664'"><i class="fas fa-phone" style="color: rgb(27 80 96);"></i></a>
                    <a :href="'tel:0926624664'">0926-624664 </a>
                </li>
                <li>
                    <a @click="openWindows()"><i class="fab fa-line" style="color: #07b53b;"></i></a>
                    <a @click="openWindows()">ID: Qqaz12345678</a>
                </li>                  
            </ul>
        </nav>               
        <div class="row justify-content-center logoDiv">
          <img class="logoImg" src="/static/img/home/logo.png" alt="估車先生">     
        </div>              
        <!--<div class="row justify-content-center imgDiv" >
          <img  class="buttonImg priceImg" src="/static/img/home/price.png" >  
          <img  class="buttonImg transactionImg" src="/static/img/home/transaction.png">                
        </div>-->  
        <div class="row justify-content-center introductionDiv" >
          <div class="col-md-5" style="width: 82%;text-align: justify;line-height: 2.3;">
            <p><strong>估車先生</strong>設計一個線上平台讓不想面對面的賣家可以輕鬆的獲得報價，這些資訊將直接傳送到<strong>估車先生</strong>的手機，經過合理的評估後，將直接給您最符合期待的價格！</p> 
          </div>
        </div>             
        <!--<div class="row justify-content-center" >
          <img  class="priceImg col-md-3" src="/static/img/home/price.jpg" >  
          <img  class="transactionImg col-md-3" src="/static/img/home/tran.jpg">  
          <img  class="bookImg col-md-3" src="/static/img/home/book.jpg">                 
        </div>  -->          
        <div v-if="bling" class="row justify-content-center buttonImgDiv" >
          <button type="button"  class="btn btn-primary priceBlingBtn col-md-3"  @click="openModal()" > 為您估價 </button>
          <button type="button" class="btn btn-primary transactionBtn col-md-3"  @click="chooseMenu(2)" > 如何賣車 </button>          
          <button type="button" class="btn btn-primary sampleBtn col-md-3"  @click="chooseMenu(3)" > 相簿 </button>                 
        </div>  
        <div v-else class="row justify-content-center buttonImgDiv" >
          <button type="button"  class="btn btn-primary priceBtn col-md-3"  @click="openModal()" > 為您估價 </button>
          <button type="button" class="btn btn-primary transactionBtn col-md-3"  @click="chooseMenu(2)" > 如何賣車 </button>          
          <button type="button" class="btn btn-primary sampleBtn col-md-3"  @click="chooseMenu(3)" > 相簿 </button>                 
        </div>            
        <!--<div class="row justify-content-center phoneDiv" >
          <p ><a @click="openWindows()"><img class="lineButtonByPhone" src="/static/img/home/LINEIMG.png" alt="估車聯絡資訊"> </a>  </p>
          <p ><a :href="'tel:0926624664'"><img class="phoneButtonByPhone" src="/static/img/home/PHONEIMG.png" alt="估車聯絡資訊"></a> </p>                         
        </div> 
        <div class="row justify-content-start" >
          <img @click="openLineModal()" class="lineButtonImg" src="/static/img/home/LINEIMG.png" alt="估車聯絡資訊">                  
        </div> 
        <div class="row justify-content-center" >      
 
        </div>-->     
        <div class="row justify-content-center" > 
          <div class="promiseDiv col-md-4">
            <h3 style="color:rgb(51 121 137); margin-top: 50px;text-align:center;">關於<strong>估車先生</strong></h3>
            <h3 class="promiseText"><span >全新的想法，創造一個<strong>估車</strong>的品牌，<strong>高價收購二手車</strong>/
            <strong>高價收購中古車</strong>為宗旨，正逢疫情，我們秉持著少賺些讓想<strong>賣車</strong>的大家可以更加歡喜的心態創立這個<strong>線上估車</strong>平台
            透過這個平台，可以減少與買家面對面接觸的次數，只懇求一個報價的機會!!<strong>買賣中古車</strong>/<strong>買賣二手車</strong>請找估車先生。</span> </h3>             
            <h3 style="color: rgb(51 121 137); margin-top: 22%;text-align:center;"><strong>收購二手車</strong>保證</h3>
            <h3 class="promise"> 價格 </h3>
            <h3 class="promiseText"><span >市面上任何廠牌都依照<strong>二手車</strong>公定價再往上加三萬!!免仲介費一萬、免中盤抽成一萬、估車先生多送一萬。</span></h3>
            <h3 class="promise"> 簡單 </h3>
            <h3 class="promiseText"><span >簡單好用的線上平台，快速有效的估車方式，上傳照片即可估價，讓您不必尷尬面對買家!!!</span> </h3> 
            <h3 class="promise"> 服務 </h3>
            <h3 class="promiseText"><span ><strong>到府估車</strong>提供給您最優質的服務，貸款、違規、欠稅都可代為結清過戶，當天完成。</span> </h3>             
            <h3 class="promise"> 透明 </h3>
            <h3 class="promiseText"><span >簽訂合約後，依雙方同意之成交車款與約定過戶日期完成交易與所有權變更。</span> </h3>   
            <h3 class="promise"> 信任 </h3>
            <h3 class="promiseText"><span >過戶所需各項證件，僅用於車輛過戶用途，我們負擔保管責任，直到證件交還，並保證不做它用。</span> </h3>   
          </div>           
          <div class="keyWord col-md-4">
            <h3 style="color: rgb(51 121 137); margin-top: 20px;text-align:center;"><strong>二手車收購</strong>專區</h3>
            <h3><span style="font-size: medium;">恭賀! <strong>豐田 ALTIS</strong> 台北廖先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>TOYOTA YARIS</strong> 基隆林小姐 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>TOYOTA AURIS</strong> 新北呂大哥 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>本田 FIT</strong> 桃園 邱先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>HONDA CIVIC K12</strong> 新竹 楊大哥 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>HONDA HRV</strong> 台中 吳小姐 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>現代 ELANTRA</strong> 宜蘭 劉先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>HYUDAI IX35</strong> 嘉義 邱先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>馬自達 MAZDA3</strong> 南投 高大哥成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>MAZDA CX5</strong> 新北 呂先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>賓士 C300</strong> 台北廖先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>BENZ C250</strong> 基隆林小姐 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>賓士 E250</strong> 苗栗 沈先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>BMW 320</strong> 桃園 邱先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>寶馬 116</strong>  宜蘭 劉先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>福斯 GOLF</strong> 宜蘭 林小姐 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>VW GTI</strong> 宜蘭 林小姐 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>VOLKSWAGEN 高爾夫</strong> 台中 劉小姐 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>凌志 IS200</strong> 桃園 吳先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>LEXUS IS300</strong> 宜蘭 林小姐 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>福特 FOCUS</strong> 基隆 呂先生 成交</span></h3>
            <h3><span style="font-size: medium;">恭賀! <strong>FORD FIESTA</strong> 台中 吳小姐 成交</span></h3>	 
          </div>               
        </div>             
    <vuestic-modal
      v-bind:force="true"
      v-bind:large="true"
      ref="ModalSaleInfo"
      @cancel="cancelModal()"
    >
      <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage"></loading>
      <div slot="title">愛車資訊</div>
      <div>
        <div class="row">
          <div class="col-md-12">
            <fieldset>
              <div
                class="form-group with-icon-right"
              >
                <div class="input-group">
                  <input name="nameInput" v-model="nameInput" v-validate="'required'" />
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label
                    class="control-label"
                    for="nameInput"
                  >您的大名</label>
                  <i class="bar"></i>
                </div>
              </div>
            </fieldset>
          </div>  
        </div>          
        <div class="row">
          <div class="col-md-6">
            <!--<vuestic-simple-select
              label="廠牌"
              v-model="selectFactory"
              option-key="name"
              v-bind:options="factoryList"
              :unselect-disabled="false"
              :notCollapse="true"
              :showSearchBox="false"
              :searchText="$t('deviceon.device.view.searchText')"
            />-->
            <fieldset>
              <div
                class="form-group with-icon-right"
              >
                <div class="input-group">
                  <input name="factoryInput" v-model="factoryInput" v-validate="'required'" />
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label
                    class="control-label"
                    for="factoryInput"
                  >廠牌 & 車款</label>
                  <i class="bar"></i>
                </div>
              </div>
            </fieldset>            
          </div> 
          <div class="col-md-6">
            <fieldset>
              <div
                class="form-group with-icon-right"
              >
                <div class="input-group">
                  <input name="yearInput" v-model="yearInput"  type="number"  v-validate="'required'" />
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label
                    class="control-label"
                    for="yearInput"
                  >年份</label>
                  <i class="bar"></i>
                </div>
              </div>
            </fieldset>             
          </div>           
        </div>     
        <div class="search-box">
          <div class="row">
            <div class="col-md-6">
              <vuestic-simple-select
                label="車子所在地"
                v-model="selectLocate"
                option-key="name"
                v-bind:options="locateList"
                :unselect-disabled="true"
                :notCollapse="true"
                :showSearchBox="false"
                searchText="搜尋"
              />
            </div> 
            <div class="col-md-6">
              <fieldset>
                <div
                  class="form-group with-icon-right"
                >
                  <div class="input-group">
                    <input name="milageInput" v-model="milageInput" type="number" v-validate="'required'" />
                    <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                    <label
                      class="control-label"
                      for="milageInput"
                    >里程數</label>
                    <i class="bar"></i>
                  </div>
                </div>
              </fieldset>
            </div>           
          </div> 
          <div class="row">
            <div class="col-md-6">
              <fieldset>
                <div
                  class="form-group with-icon-right"
                >
                  <div class="input-group">
                    <input name="lineIdInput" v-model="lineIdInput" v-validate="'required'" />
                    <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                    <label
                      class="control-label"
                      for="lineIdInput"
                    >Line ID</label>
                    <i class="bar"></i>
                  </div>
                </div>
              </fieldset>            
            </div> 
            <div class="col-md-6">
              <fieldset>
                <div
                  class="form-group with-icon-right"
                >
                  <div class="input-group">
                    <input name="phoneInput" v-model="phoneInput" type="number" v-validate="'required'" />
                    <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                    <label
                      class="control-label"
                      for="phoneInput"
                    >電話</label>
                    <i class="bar"></i>
                  </div>
                </div>
              </fieldset>   
            </div>           
          </div> 
        </div>        
        <div class="row">
          <div class="col-md-12">
            <fieldset>
              <div
                class="form-group with-icon-right"
              >
                <div class="input-group">
                  <input name="prePriceInput" v-model="prePriceInput" type="number" v-validate="'required'" />
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label
                    class="control-label"
                    for="prePriceInput"
                  >期待售出金額</label>
                  <i class="bar"></i>
                </div>
              </div>
            </fieldset>   
          </div>           
        </div>                       
        <!--
            <div class="form-group with-icon-right" :class="{'has-error': errors.has('txtSMSPhone')}">
              <div class="input-group">
                <vue-phone-number-input
                  v-model="Phone"
                  ref="phone"
                  name="txtSMSPhone"
                  data-vv-as="Recipient Phone"
                  v-validate="'required'"
                  color="red"
                  @update="onPhone"
                  :translations="phoneTranslations"
                  :error="hasPhoneErrorActive"
                  size="lg"
                />
              </div>
            </div>            
        -->
                        
        <vuestic-file-upload
          type="gallery"
          :btnName = btnName
          v-model="imgFiles"
          fileTypes=".png,.jpg,.jpeg,.gif"
        />
      </div>
      <div slot="footer">
        <button
          type="button"
          class="btn btn-primary"
          v-on:click="sendToBoss()"
        >送出</button>
      </div>
    </vuestic-modal>   
    <vuestic-modal
      v-bind:force="true"
      v-bind:large="true"
      ref="AddLine"
      :noButtons="true"
    >
      <div class="row justify-content-center">
        <img @click="openWindows()"  class="addLine" src="/static/img/home/bossLine.png">          
      </div>
      <div class="row justify-content-center">       
        <img @click="openWindows()" class="addLine" style="margin-top: 10px" src="/static/img/home/addfriends_en.png">
      </div>    
    </vuestic-modal>                                     
      </vuestic-widget>
  </div>
</template>

<script>
import Vue from 'vue'
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Apis from '@/util/Apis'

let self = {};
export default {
  name: "Home",
  computed: {},
  components: {
    loading: VueLoading
  },
  data() {
    return {
      isLoading: false,
      fullPage: false,
      imgFiles: [],
      btnName: '上傳照片',
      newImgSrc: '',
      defaultLogo: '',
      isHasMessageBox: true,    
      //selectFactory: '',
      //factoryList: [{name: '寶馬'},{name: '賓士'}],
      yearInput: '',
      //yearList: [{name: '1990以下'},{name: '1991~1995'},{name: '1996~2000'},{name: '2001~2005'},{name: '2006~2010'},{name: '2011~2015'},{name: '2016~2020'}],      
      milageInput: '',
      prePriceInput: '',
      //milageList: [{name: '3萬以下'},{name: '5萬以下'},{name: '10萬以下'},{name: '15萬以下'},{name: '20萬以下'},{name: '30萬以下'},{name: '50萬以下'}],  
      selectLocate: '',
      locateList: [{name: '台北市'},{name: '新北市'},{name: '基隆市'},{name: '宜蘭縣/市'},{name: '桃園市'},{name: '新竹縣/市'},{name: '苗栗縣/市'},{name: '台中市'},{name: '彰化縣/市'},{name: '雲林縣'},{name: '嘉義縣/市'},{name: '台南縣/市'},{name: '高雄縣/市'},{name: '屏東縣/市'},{name: '台東縣/市'},{name: '花蓮縣/市'}],    
      //locateList: [{name: '北北基'},{name: '桃竹苗'},{name: '中彰雲'},{name: '宜蘭'},{name: '花東'},{name: '高屏'}],    
      nameInput: '',   
      factoryInput: '', 
      Phone: '',
      PhoneFormat: false,
      onChangePhone: true,
      showPhone: true,     
      phoneInput: '',  
      lineIdInput: '',  
      hasPhoneErrorActive: false,    
      inputIsValid: false,    
      bling: true,
      openBling: true,
      clientSource: '',
      //phoneTranslations: {
      //  countrySelectorLabel: '',
      //  countrySelectorError: '',
      //  phoneNumberLabel: '',
      //  example: 'Exemple :'
      //},           
    };
  },
  mounted() {
    self = this
    let href = window.location.href
    let regex = /gclid=/g;
    let match = regex.exec(href)
    if(match && match.length > 0){
      self.clientSource = 'A' //來自Google廣告
    }else{
      self.clientSource = 'B' //來自seo自然排序
    }
    setInterval(function(){
      if(self.openBling){
        self.bling = !self.bling
      }
    },500);    
  },  
  watch: {},
  computed:{
  },  
  methods: {       
    openModal () {
      self.openBling = false
      self.bling = false
      self.$refs.ModalSaleInfo.open()
    },
    openLineModal () {
      self.$refs.AddLine.open()
    }, 
    openWindows() {
      window.open('https://line.me/ti/p/trvCNPQC5u', '_blank')
    },   
    chooseMenu (tabId) {
      this.$bus.$emit('menuChange', {id: tabId})      
    },   
    cancelModal () {
      self.clearInput()
      self.$refs.ModalSaleInfo.close()
      self.$refs.AddLine.close()
    },  
    clearInput () {
      //self.selectFactory = ''
      self.yearInput = ''
      self.milageInput = ''
      self.prePriceInput = ''
      self.selectLocate = ''
      //self.PhoneFormat = false
      //self.Phone = ''
      self.lineIdInput = ''
      self.phoneInput = ''
      self.nameInput = ''
      self.factoryInput = ''
      self.imgFiles = []
      setTimeout(function () {
        self.errors.clear()
      }, 10)         
    }, 
    //onPhone (Data) {
    //  if (this.Phone !== '') {
    //    this.onChangePhone = false
    //  }
    //  this.PhoneFormat = false
    //  if (Data.isValid) {
    ////    this.PhoneFormat = true
    //  }
    //  this.PhoneInput = Data
    //},  
    buttonEnable () {
      if (self.selectLocate !== '') {
        if (self.nameInput.trim() !== '' && self.yearInput.trim() !== ''  && self.milageInput.trim() !== ''  && self.prePriceInput.trim() !== ''  && self.factoryInput.trim() !== '' && self.phoneInput.trim() !== '' && self.lineIdInput.trim() !== '') {
          return true
        } else return false
      } else {
        return false
      }
    }, 
    dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], {type: mimeString});
    },         
    sendToBoss () {
      let manyImg = self.imgFiles    
      let pictureNameList = []    
      if(self.buttonEnable()){
        if(manyImg.length > 0){
          if (manyImg.length >= 5) {
            Apis.MessageBox.Normal(
              self,
              '照片已超過上傳數量!!',
              '',
              'warning'
            )
            return false
          }
          for(let j = 0 ; j < manyImg.length ; j++){
            let tmpData = manyImg[j]
            let orgName = tmpData.name.split('.')
            let pictureNum = j+1
            pictureNameList.push('picture' + pictureNum + '.' + orgName[1])
          }
          self.isLoading = true
          let session = self.nameInput + Date.now()
          let carDetail = {}
          carDetail['Name'] = self.nameInput
          carDetail['Phone'] = self.phoneInput
          carDetail['LineID'] = self.lineIdInput
          //carDetail['Factory'] = self.selectFactory.name
          carDetail['Factory'] = self.factoryInput
          carDetail['Year'] = self.yearInput
          carDetail['Milage'] = self.milageInput
          carDetail['PrePrice'] = self.prePriceInput
          carDetail['Locate'] = self.selectLocate.name
          carDetail['pictureNameList'] = pictureNameList
          let message = '\n大名: ' + carDetail.Name + '\n' + 
            '電話: ' + carDetail.Phone + '\n' + 
            'LINE ID: ' + carDetail.LineID + '\n' + 
            '廠牌: ' + carDetail.Factory + '\n' +
            '年份: ' + carDetail.Year + '\n' + 
            '里程: ' + carDetail.Milage + '\n' +
            '所在地: ' + carDetail.Locate + '\n' +
            '期望售出金額: ' + carDetail.PrePrice + '\n'  +
            '來源: ' + self.clientSource + '\n' 
          for(let i = 0 ; i < manyImg.length ; i++){
            let fd = new FormData();
            let tmpFile = manyImg[i]
            let pictureNum = i+1
            let lastest = false
            if(i === manyImg.length-1){
              lastest = true
            }
            let reader = new FileReader()
            reader.readAsDataURL(tmpFile)
            reader.onload = function (e) {
              let Img = new Image()
              let canvas = document.createElement('canvas')
              let context = canvas.getContext('2d')
              canvas.width = 1000
              canvas.height = 800
              Img.src = this.result
              context.drawImage(Img, 0, 0, canvas.width, canvas.height);
              if (tmpFile.type === 'image/jpeg' || tmpFile.type === 'image/jpg') {
                Img.src = canvas.toDataURL('image/jpeg', 0.8)
              } else if (tmpFile.type === 'image/gif') {
              } else {
                Img.src = canvas.toDataURL()
              }              
              let blob = self.dataURItoBlob(Img.src);
              fd.append('myImage', blob, tmpFile.name)
              fd.append('session', session) 
              fd.append('newName', 'picture' + pictureNum.toString())   
              fd.append('message', message) 
              fd.append('orgName', tmpFile.name) 
              fd.append('pictureNameList', carDetail['pictureNameList'].toString())
              fd.append('lastData', lastest) 
              let api = '/uploadPhoto'

              Apis.uploadImg.post
                .uploadByFormData(fd)
                .then(function (xhr) {
                  if(lastest){
                    self.isLoading = false
                    //self.cancelModal()
                    gtag_report_conversion();
                    Apis.MessageBox.Normal(
                      self,
                      '送出成功!!',
                      '經過評估過後會立即連絡您，請耐心等候~',
                      'success'
                    ).then(
                      self.cancelModal()
                    )
                  }
                })
                .catch(function (error) {
                  self.isLoading = false
                })    
            }           
          }
        }               
      }else{
        Apis.MessageBox.Normal(
          self,
          '有資料沒填到喔',
          '或是格式不正確喔',
          'warning'
        )
      }
    },          
  },
  beforeDestroy() {
    self.cancelModal
  }
};
</script>

<style scoped lang="scss">
.content {
  padding: 1rem;
  margin-top: 8%;
  min-height: auto;
  background-color: #ffffff;
  @media (max-width:1024px){
    margin-top: 12%; 
  }
  @media (max-width:768px){
    margin-top: 15%;
  }     
  @media (max-width:483px) {
    margin-top: 36%;    
  }    
} 
.btn{
  margin: 20px 0;
  width: 262px;
  height: 58px;
  line-height: 0px;
  min-height: auto;
  //border: 1px solid #ccc;
  font-size: 30px;
  font-weight: 900;
  text-align: center;  
  @media (max-width:483px) {
    font-size: 23px;
    height: 48px;
    width: 230px;
    padding: 10px;
  }  
  @media (max-width:375px) {
    font-size: 23px;
    height: 48px;
    width: 203px;
    padding: 10px;
  }    
  @media (max-width:320px) {
    font-size: 23px;
    height: 48px;
    width: 177px;
    padding: 10px;
  }     
}
.btn:hover {
    background-color: #bebebe; 
}
.sopImg{
  min-height: auto;
  width: 100%;  
  filter: brightness(20%);
  @media screen and (max-height: 1400px) and (max-width: 1024px){  
    filter: brightness(100%);
  }    
  @media screen and (max-height: 823px) and (max-width: 483px){  
    width: 0%; 
  }  
}
.logoImg{
  min-height: auto;
  width: 313px; 
  height: 312px;   
  @media screen and (max-height: 823px) and (max-width: 483px){  
    width: 175px; 
    height: 176px; 
  }   
}
.buttonImg{
  padding-top: 5%;
  width: 10%;  
  min-height: auto;
  @media (max-width:1024px){
    padding-top: 0%;
    width: 15%;
  }
  @media (max-width:768px){
    padding-top: 0%;
    width: 20%;
  }     
  @media (max-width:483px) {
    padding-top: 0%;
    width: 25%;
  }   
  @media (max-width:320px) {
    padding-top: 0%;
    width: 25%;
  }    
}
.buttonImgDiv{
  margin-top: 3%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  @media (max-width:1024px){
    width: 100%;
  }
  @media (max-width:768px){
    width: 100%;
  }     
  @media (max-width:483px) {
    width: 100%;
  }    
}
.phoneDiv{
  margin-top: 0%;
  @media screen and (max-height: 823px) and (max-width: 375px){     
    margin-top: 5%;
  }    
}
.transactionBtn{
  //background-color: #333333;
  min-height: auto;
  background-color: #333333;    
  color: #ffffff;  
  margin: 10px;
  flex: 0 0 25%; 
  max-width: 25%;    
  @media (max-width:1024px){  
    flex: 0 0 28%; 
    max-width: 28%;      
  }
  @media (max-width:768px){   
    flex: 0 0 48%; 
    max-width: 48%;          
  }     
  @media (max-width:483px) {     
    flex: 0 0 55%; 
    max-width: 55%;       
  }   
  @media (max-width:320px) { 
    flex: 0 0 55%; 
    max-width: 55%;          
  }    
}
.priceBtn{
  min-height: auto;
  background-color: #333333;    
  color: #ffffff; 
  margin: 10px;
  flex: 0 0 25%; 
  max-width: 25%;   
  @media (max-width:1024px){  
    flex: 0 0 28%; 
    max-width: 28%;        
  }
  @media (max-width:768px){
    flex: 0 0 48%; 
    max-width: 48%;      
  }     
  @media (max-width:483px) {
    flex: 0 0 55%; 
    max-width: 55%;       
  }   
  @media (max-width:320px) {  
    flex: 0 0 55%;  
    max-width: 55%;
  }    
}
.priceBlingBtn{
  min-height: auto;
  background-color: #333333;    
  color: #333333; 
  margin: 10px;
  flex: 0 0 25%; 
  max-width: 25%;   
  @media (max-width:1024px){
    flex: 0 0 28%; 
    max-width: 28%;        
  }
  @media (max-width:768px){
    flex: 0 0 48%; 
    max-width: 48%;      
  }     
  @media (max-width:483px) {
    flex: 0 0 55%; 
    max-width: 55%;       
  }   
  @media (max-width:320px) {  
    flex: 0 0 55%;  
    max-width: 55%;
  }    
}
.sampleBtn{
  min-height: auto;
  background-color: #333333;    
  color: #ffffff; 
  margin: 10px;
  flex: 0 0 25%; 
  max-width: 25%;    
  @media (max-width:1024px){ 
    flex: 0 0 28%; 
    max-width: 28%;      
  }
  @media (max-width:768px){   
    flex: 0 0 48%; 
    max-width: 48%;          
  }     
  @media (max-width:483px) { 
    flex: 0 0 55%; 
    max-width: 55%;          
  }   
  @media (max-width:320px) {
    flex: 0 0 55%; 
    max-width: 55%;          
  }    
}
.priceImg{
  min-height: auto;
  @media (max-width:1024px){
  }
  @media (max-width:768px){
  }     
  @media (max-width:483px) {

  }   
  @media (max-width:320px) {

  }    
}
.transactionImg{

  min-height: auto;
  @media (max-width:1024px){

  }
  @media (max-width:768px){

  }     
  @media (max-width:483px) {

  }   
  @media (max-width:320px) {

  }    
}
.bookImg{
  min-height: auto;
  @media (max-width:1024px){

  }
  @media (max-width:768px){

  }     
  @media (max-width:483px) {

  }   
  @media (max-width:320px) {

  }    
}
.backgroundDiv{
  //height: 600px;
  min-height: auto;
  @media screen and (max-height: 823px) and (max-width: 1024px){  
    position: unset;
    min-height: auto;
    height: auto;
  }
  @media screen and (max-height: 823px) and (max-width: 768px){    
    position: unset;
    min-height: auto;
    height: auto;
  }     
  @media screen and (max-height: 823px) and (max-width: 483px){  
    position: unset;
    min-height: auto;
    max-height:275px;
  }   
  @media screen and (max-height: 823px) and (max-width: 375px){  
    position: unset;
    min-height: auto;
    max-height:275px;
  } 
  @media screen and (max-height: 823px) and (max-width: 320px){
    max-height:275px;
  }   
}
.logoDiv{
  //height: 600px;
  margin-top: 30px;
  min-height: auto;
  max-height:175px;  
  @media screen and (max-height: 823px) and (max-width: 1024px){  
    min-height: auto;
    max-height:175px;
  }
  @media screen and (max-height: 823px) and (max-width: 768px){    
    min-height: auto;
    max-height:175px;
  }     
  @media screen and (max-height: 823px) and (max-width: 483px){  
    min-height: auto;
    max-height:175px;
  }   
}
.imgDiv{ 
  @media screen and (max-height: 823px) and (max-width: 483px){     
    max-height: 10px;
  }  
  @media screen and (max-height: 823px) and (max-width: 414px){     
    max-height: 50px;
  } 
  @media screen and (max-height: 823px) and (max-width: 320px){     
    max-height: 44px;
  }       
}
.lineButtonByPhone{
  width: 0%;
  @media screen and (max-height: 1366px) and (max-width: 1024px){  
    width: 0%;
  }
  @media screen and (max-height: 1024px) and (max-width: 768px){     
    width: 0%;
  }     
  @media screen and (max-height: 823px) and (max-width: 483px){     
    width: auto;
    max-height: 65px;
  }      
}
.phoneButtonByPhone{
  width: 0%;
  margin-left: 5%;
  @media screen and (max-height: 1366px) and (max-width: 1024px){  
    width: 0%;
  }
  @media screen and (max-height: 1024px) and (max-width: 768px){     
    width: 0%;
  }     
  @media screen and (max-height: 823px) and (max-width: 483px){     
    width: auto;
    max-height: 65px;
  }    
}
.lineButtonByPhoneDiv{
  padding: 0%;    
  @media screen and (max-height: 823px) and (max-width: 483px){     
    padding: 7%;
  }     
} 
.lineButtonImg{
  width: 4%;
  margin-top: -20%;
  margin-left: 2%;
  position:fixed;
  z-index: 99;
  @media screen and (max-height: 1366px) and (max-width: 1024px){  
    margin-top: 0%;
    width: 9%;
  }
  @media screen and (max-height: 1024px) and (max-width: 768px){     
    width: 9%;
    margin-top: -12%;
  }     
  @media screen and (max-height: 823px) and (max-width: 483px){     
    margin-top: 0%;
    width: 0%;
    position: unset;
  }  

}
.phoneButtonImg{
  width: 6%;
  margin-top: -40%;
  margin-left: 2%;
  position:fixed;
  @media screen and (max-height: 1366px) and (max-width: 1024px){  
    margin-top: -20%;
    width: 6%;
  }
  @media screen and (max-height: 1024px) and (max-width: 768px){     
    width: 6%;
    margin-top: -55%;
  }     
  @media screen and (max-height: 823px) and (max-width: 483px){     
    margin-top: 0%;
    width: 0%;
    position: unset;
  }    
}
.buttonDiv{
  margin-top: 1%;
  margin-left: 2%;
  margin-right: 2%;
  min-height: auto;
  @media (max-width:1024px){
    margin-left: 0%;
    margin-right: 0%;
  }
  @media (max-width:768px){
    margin-left: 0%;
    margin-right: 0%;
  }     
  @media (max-width:483px) {
    margin-left: 0%;
    margin-right: 0%;
  }   
  @media (max-width:320px) {
    margin-left: 0%;
    margin-right: 0%;
  }    
}

.addLine{
  max-height: auto;
  width:30%;
  @media (max-width:483px) {
    width: 50%;
  } 
}
.header3 {
  font-size: 3.75rem;
  color: #ffffff;
  position:fixed;
  min-height: auto;
  text-align: center;
  margin-top: -35%;
  @media screen and (max-height: 1366px) and (max-width: 1024px){
    font-size: 3.75rem;
    color: #a7a8a9e0;
    margin-top: 7%;
  }
  @media screen and (max-height: 1024px) and (max-width: 768px){
    position: unset;
    margin-top: 3%;
    font-size: 2.75rem;
    color: #a7a8a9e0;
  }     
  @media screen and (max-height: 823px) and (max-width: 483px){
    font-size: 1.65rem;
    margin-top: -100%;
    color: #a7a8a9e0;
  }     
}
.homeNavCss{
  min-height: auto;
  margin-top: 20px;
  @media (max-width:483px) {
    margin-top: 20px;
  }    
}
.ul {
  list-style: none;
  padding: 0;
}
.li {
  padding-left: 1.3em;
}
.li:before {
  content: "\f00c"; /* FontAwesome Unicode */
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1.3em; /* same as padding-left set on li */
  width: 1.3em; /* same as padding-left set on li */
}
p {
    display: table-cell;
    align-items: center;
}
.keyWord{
    text-align: center;
    border-style:solid;
    border-color: #6c757d;
    padding:5px;
    margin: 40px 2.5%;
    letter-spacing: -1px;
    margin-bottom: 25px;  
    width: 80%;
    background: #fff;   
    border-radius: 90px 90px 90px 90px;
}
.promiseDiv{
    border-style:solid;
    border-color: #6c757d;
    padding:5px;
    text-align: left;
    margin: 40px 2.5%;
    letter-spacing: -1px;
    margin-bottom: 25px;  
    width: 80%;
    background: #fff;
    border-radius: 90px 90px 90px 90px;
}
.promiseDiv:hover{
  background: #eefeff;
}
.keyWord:hover{
  background: #eefeff;
}
.introductionDiv{
  margin-top: 5%;
  text-align: center;
  color: rgb(152, 152, 152);
  font-weight:normal; 
  @media (max-width:483px) {
    margin-top: -10%;
  }   
  @media (max-width:320px) {
    margin-top: -10%;
  }    
}
.promise { 
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 5%;
}
.promiseText { 
  text-align: justify;
  font-size: medium;
  width: 80%;
  margin-left: 10%;  
  line-height: 2.3;
}
.keyWordH3{
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 5%;  
}
  .social {
    position: fixed;
    top: 200px;
    z-index: 5;
    right: -270px;
  }
  .social a {
    color: #fff;
    text-decoration: none;
    margin-left: 8px;
  }
  .social ul {
    padding: 0px;
    -webkit-transform: translate(0px, 0);
    -moz-transform: translate(0px, 0);
    -ms-transform: translate(0px, 0);
    -o-transform: translate(0px, 0);
    transform: translate(0px, 0);
  }
  .social ul li {
    display: block;
    margin: 5px 25px 0px 0px;
    background: rgba(0, 0, 0, 0.36);
    width: 300px;
    text-align: left;
    padding: 6px;
    -webkit-border-radius: 30px 0px  0 30px;
    -moz-border-radius: 30px 0px  0 30px;
    border-radius: 30px 0px  0 30px;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .social ul li:hover {
    -webkit-transform: translate(-150px, 0);
    -moz-transform: translate(-150px, 0);
    -ms-transform: translate(-150px, 0);
    -o-transform: translate(-150px, 0);
    transform: translate(-150px, 0);
  }
  .social ul li:hover a {
    color: #fff;
  }
  .social ul li:hover i {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .social ul li i {
    margin-left:0px;
    color: #000;
    background: #fff;
    padding: 8px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 20px;
    background: #ffffff;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
</style>
