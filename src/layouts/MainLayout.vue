<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title v-if="$q.screen.gt.xs" to="/dashboard" shrink class="row items-center cursor-pointer no-wrap">
          <img  style="height: 50px" src="../../1knust_ghana.svg">
          <span class="q-ml-sm">Department of History & Political Science</span>
        </q-toolbar-title>

        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <!-- <q-btn v-if="$q.screen.gt.sm" round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn> -->
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer reveal elevated>
      <q-toolbar side>
        <div style="margin-right: 50%">
          Dave
        </div>
        <ul class="text-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item 
            clickable 
            v-ripple           
          >
              <q-item-section avatar>
                <q-icon name="far fa-id-card" />
              </q-item-section>

              <q-item-section>
                Profile
              </q-item-section>
          </q-item>
            <q-separator></q-separator>
          <q-expansion-item
            expand-separator
            icon="fas fa-university"
            label="Department"           
            default-closed         
            
          >
             <q-item 
              clickable 
              v-ripple 
              to="/dashboard/pScience"          
            >
                <q-item-section avatar>
                  <q-icon name="fas fa-fist-raised" />
                </q-item-section>

                <q-item-section>
                  Political Science
                </q-item-section>
            </q-item>
            <q-separator></q-separator>
             <q-item 
              clickable 
              v-ripple           
            >
                <q-item-section avatar>
                  <q-icon name="fab fa-pied-piper-alt"/>
                </q-item-section>

                <q-item-section>
                  History
                </q-item-section>
            </q-item>
          </q-expansion-item>
                  <q-separator></q-separator>
          <q-expansion-item
            expand-separator
            icon="fas fa-calendar-week"
            label="Timetable"           
            default-closed         
            
          >
             <q-item 
              clickable 
              v-ripple
              to="/dashboard/timetable/class"
            >
                <q-item-section avatar>
                  <q-icon name="fas fa-chalkboard-teacher"/>
                </q-item-section>

                <q-item-section>
                  Class
                </q-item-section>
            </q-item>
            <q-separator></q-separator>
             <q-item 
              clickable 
              v-ripple           
            >
                <q-item-section avatar>
                  <q-icon name="fas fa-diagnoses"/>
                </q-item-section>

                <q-item-section>
                  Examination
                </q-item-section>
            </q-item>
            <q-separator></q-separator>
             <q-item 
              clickable 
              v-ripple
              to="/dashboard/todo"
            >
                <q-item-section avatar>
                  <q-icon name="fas fa-list-ul"/>
                </q-item-section>

                <q-item-section>
                  To Do
                </q-item-section>
            </q-item>
          </q-expansion-item>
            <q-separator></q-separator>
           <!-- <q-item 
              clickable 
              v-ripple
              to='/dashboard/cwa'
            >
                <q-item-section avatar>
                  <q-icon name="fas fa-calculator"/>
                </q-item-section>

                <q-item-section>
                 CWA Calculator
                </q-item-section>
            </q-item> 
            <q-separator></q-separator> -->
           <q-item 
              clickable 
              v-ripple
              to='/dashboard/cal'
            >
                <q-item-section avatar>
                  <q-icon name="fas fa-calculator"/>
                </q-item-section>

                <q-item-section>
                 CWA Calculator
                </q-item-section>
            </q-item> 
            <q-separator></q-separator>
            <q-item 
              clickable 
              v-ripple           
            >
                <q-item-section avatar>
                  <q-icon name="fas fa-box-open"/>
                </q-item-section>

                <q-item-section>
                  Resources
                </q-item-section>
            </q-item>
          

          <q-separator inset class="q-my-sm" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { fasGlobeAmericas, fasFlask } from '@quasar/extras/fontawesome-v5'
export default {
  name: 'GoogleNewsLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: '',
      hasWords: '',
      excludeWords: '',
      byWebsite: '',
      byDate: 'Any time',     
    }
  },
  methods: {
    onClear () {
      this.exactPhrase = ''
      this.hasWords = ''
      this.excludeWords = ''
      this.byWebsite = ''
      this.byDate = 'Any time'
    },
    changeDate (option) {
      this.byDate = option
      this.showDateOptions = false
    }
  }
}
</script>

<style lang="sass">
  .GNL
    &__toolbar
      height: 64px
    &__toolbar-input
      width: 55%
    &__drawer-item
      line-height: 24px
      border-radius: 0 24px 24px 0
      margin-right: 12px
      .q-item__section--avatar
        .q-icon
          color: #5f6368
      .q-item__label
        color: #3c4043
        letter-spacing: .01785714em
        font-size: .875rem
        font-weight: 500
        line-height: 1.25rem
    &__drawer-footer-link
      color: inherit
      text-decoration: none
      font-weight: 500
      font-size: .75rem
      &:hover
        color: #000
</style>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
  float: right;
}

li {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>