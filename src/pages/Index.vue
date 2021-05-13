<template>
  <div class="q-pa-md">
    <!-- News begins -->
    <q-carousel
      v-model="slide"      
      animated
      arrows
      navigation
      infinite
      :autoplay = "autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      navigation-icon="radio_button_unchecked"
      control-type="regular"
      control-color="orange"
      control-text-color="grey-8"
      height="300px"
      class="bg-purple text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="q-pa-none">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="q-pa-none">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="layers" class="q-pa-none">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="map" class="q-pa-none">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
    </q-carousel>
    <!-- news ends -->
   <!-- <q-separator inset="item-thumbnail" />
   <q-separator inset="item-thumbnail" /> -->

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>




    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>



    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>



    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    

    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card> 
    
       
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>    

  </div>
</div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'style',
      autoplay: true,
      expanded: false,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },

  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }

}
</script>
<style lang="sass" scoped>

.row + .row
  margin-top: 5rem

.my-card
  width: 100%
  max-width: 300px
</style>

<style scoped>
/* .q-card {
 position:relative
}
.q-card {
 box-shadow:0 1px 5px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12);
 border-radius:4px;
 vertical-align:top;
 background:#fff
}
.q-card>div:first-child,
.q-card>img:first-child {
 border-top:0;
 border-top-left-radius:inherit;
 border-top-right-radius:inherit
}
.q-card>div:last-child,
.q-card>img:last-child {
 border-bottom:0;
 border-bottom-left-radius:inherit;
 border-bottom-right-radius:inherit
}
.q-card>div:not(:first-child),
.q-card>img:not(:first-child) {
 border-top-left-radius:0;
 border-top-right-radius:0
}
.q-card>div:not(:last-child),
.q-card>img:not(:last-child) {
 border-bottom-left-radius:0;
 border-bottom-right-radius:0
}
.q-card>div {
 border-left:0;
 border-right:0;
 box-shadow:none
} */
</style>