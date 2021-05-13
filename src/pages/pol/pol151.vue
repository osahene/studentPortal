<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{dept}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">POL 151 Introduction to Political Studies I</div>
          <div class="text-caption text-grey">
            The course examines the principal concepts, ideas and analytical methods of modern political studies.  Particularly the “political element of the social structure; conflict; power and legitimacy: authority, state nation; government and sovereignty; major and elementary methods of study of the political etc.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />
        <q-list >
            <q-item>
                <q-item-label class="text-sm underline" header><span><q-icon name="fas fa-book-reader fa-2x q-mr-sm" color="black" /></span> Reading List</q-item-label>
                
            </q-item>
            <q-item>
                <q-avatar color="primary q-mr-sm" text-color="white">T</q-avatar>
                <q-item-section>{{ material.title }}</q-item-section>
                <q-item-section side>
                    <q-icon name="fas fa-file-download cursor-pointer" @click="fileDownload" color="black" />
                </q-item-section>
            </q-item>

            <q-separator spaced inset="item" />            
        </q-list>  
    </q-card>    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dept: 'Department of Political Science',
      material:{
        title:'The Oxford Handbook of Political Theory (Oxford Handbooks of Political Science',
        src: require('../pol/read/Daniele.svg')
      }
    }
  },
  methods:{
    // fDownload(response, title){
    //   const blob = new Blob([res.data], { type: res.data.type })
    //   const url = window.URL.createObjectURL(blob)
    //   const link = document.createElement('a')
    //   link.href = url
    //   const contentDisposition = res.headers['content-disposition']
    //       let fileName = 'unknown'
    //       if (contentDisposition) {
    //         const fileNameMatch = contentDisposition.match(/filename="(.+)"/)
    //         if (fileNameMatch.length === 2) {
    //           fileName = fileNameMatch[1]
    //         }
    //       }
    //   link.setAttribute('download', title)
    //   document.body.appendChild(link)
    //   link.click()
    // },
    fileDownload(url, title){
      axios({
        method: 'get',
        url: 'https://source.unsplash.com/random/500x500',
        responseType: 'blob',
      })
        .then((response) => {
          const url = window.URL
          .createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'image.jpg');
                document.body.appendChild(link);
                link.click();
        })
        .catch(() => console.log('error occured'))
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>