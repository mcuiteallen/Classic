<template>
  <div :class="`vuestic-file-upload-${type}`">
    <template v-if="type === 'list'">
      <vuestic-file-upload-list-item
          v-for="(file, index) in newfiles"
          :key="file.name"
          :file="file"
          @remove="$emit('remove', index)"
      />
    </template>
    <template v-if="type === 'gallery'">
      <div class="row">
        <vuestic-file-upload-gallery-item
            v-for="(file, index) in newfiles"
            :key="file.name"
            :file="file"
            @remove="$emit('remove', index)"
        />
      </div>
    </template>
    <vuestic-file-upload-single-item
        v-if="type === 'single' && newfiles.length"
        :file="newfiles[files.length - 1]"
        @remove="$emit('remove-single')"
    />
  </div>
</template>

<script>
import VuesticFileUploadListItem from './VuesticFileUploadListItem'
import VuesticFileUploadGalleryItem from './VuesticFileUploadGalleryItem'
import VuesticFileUploadSingleItem from './VuesticFileUploadSingleItem'
let self = {}

export default {
  name: 'vuestic-file-upload-list',
  components: {
    VuesticFileUploadListItem: VuesticFileUploadListItem,
    VuesticFileUploadGalleryItem: VuesticFileUploadGalleryItem,
    VuesticFileUploadSingleItem: VuesticFileUploadSingleItem
  },
  props: {
    type: {
      type: String
    },
    files: {
      default: null
    }
  },
  data () {
    return {
      newfiles: null,
    }
  },
  mounted () {
    self = this
    this.newfiles = this.files.map(this.convertFile)
    this.$bus.$on('fileUploading', async event => {
      for (var i = 0; i < self.newfiles.length; i++) {
        if (self.newfiles[i].name === event.pkgName) {
          self.newfiles[i].percentCompleted = event.percentCompleted
          break
        }
      }
    })
  },
  watch: {
    files (data) {
      this.newfiles = data.map(this.convertFile)
    },
  },
  computed: {
    filesList () {
      return this.files.map(this.convertFile)
    },
  },
  methods: {
    convertFile (file) {
      return {
        name: file.name,
        size: this.formatSize(file.size),
        date: this.formatDate(file.lastModifiedDate) || this.formatDate(new Date(file.lastModified)),
        percentCompleted: file.percentCompleted,
        image: file
      }
    },
    formatSize (bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    formatDate (date) {
      if (!date) return ''
      return date.toLocaleDateString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }
}
</script>

<style lang='scss'>
  .vuestic-file-upload {
    &-list {
      padding-bottom: 2rem;
      margin: 0 -1rem;
    }
    &-gallery {
      padding: 0 0 1rem;
    }
  }
</style>
