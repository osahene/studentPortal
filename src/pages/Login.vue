<template>
  <div class="">

    <div class="q-gutter-y-md q-ma-lg" >
  
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3 text-grey-7 "
          active-color="primary"
          indicator-color="purple"
          align="justify"
        >
          <q-tab name="mails" label="Enter your credentials" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="bg-grey-3 text-white text-center ">
          <q-tab-panel name="mails">
            <!-- <div class="text-h6">Mails</div> -->
              <q-form
                @submit="toDash"
                @reset="onReset"
                class="q-gutter-md"
              >
               <q-input
                filled
                v-model="cred.username"
                label="Username *"
                type = "text"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              >
              <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
                <q-input
                  filled
                  v-model="cred.password"
                  label="Password *"
                  :type="isPwdL ? 'password' : 'text'"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Enter your password']"
                >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwdL ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwdL = !isPwdL"
                  />
                </template>
                </q-input> 

                <div>
                  <q-btn label="Submit" type="submit" @click="onDash" to="/dashboard" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
          </q-tab-panel>
        </q-tab-panels>

    

  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: null,
      tab: 'mails',      
      isPwdL: true,
      cred:{
        username:'',
        password:''
      }
    }
  },

  methods: {
    onDash () {
      if (this.cred.username <= 0) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          type: 'warning',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Welcome '+ this.cred.username
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>