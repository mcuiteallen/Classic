import Vue from 'vue'
import axios from 'axios'
import baseURL from '@/util/baseURL'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)
Vue.prototype.$ajax = axios





const Apis = {
  MessageBox: {
    Normal: function (obj, strTitle, strText, strIcon, showCancelBtn) {
      return obj.$swal({
        title: strTitle,
        text: strText,
        icon: strIcon,
        type: strIcon,
        confirmButtonText: '確認',
        cancelButtonText: '取消',
        showCancelButton: showCancelBtn
      })
    }
  },   
  file: {
    get: {
      jsonFile: function (path, others) {
        let api = path
        let oData = {}
        return axios.get(api, { params: oData })
      }
    }
  },
  uploadImg: {
    post: {
      uploadByFormData: function (data, others) {
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }        
        let api = baseURL.RMM + '/uploadPhoto'
        let oData = data
        return axios.post(api, oData, config)
      }
    }
  }
}

export default Apis
