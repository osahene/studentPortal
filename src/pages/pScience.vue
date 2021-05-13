<template>
  <div class="q-pa-md">
    <div style="">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
      >
        <q-tab class="text-purple" name="level1" label="Level 100" />
        <q-tab class="text-orange" name="level2" label="Level 200" />
        <q-tab class="text-teal" name="level3" label="Level 300" />
        <q-tab class="text-teal" name="level4" label="Level 400" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          class="text-black text-center"
        >
          <q-tab-panel name="level1">
            <div class="text-h6">First Semester</div>
                <q-card-section>
                    <div class="text-subtitle2">POL 151 Introduction to Political Studies I </div>
                </q-card-section>

                <vue-show-more-text
                    :text="txtString"
                    :lines="2"
                    additional-container-css="margin:1px;"
                    additional-content-css="font-size:16px;"
                    additional-content-expanded-css="font-size:16px;"
                    additional-anchor-css="font-size: 16px;"
                    @click="change"
                />
                <q-card-actions>
                    <q-btn flat to="/dashboard/pol/pol151">Course Outline</q-btn>
                </q-card-actions>

                <!-- text begins -->
                <q-separator red/>
                <q-separator red/>
                
                <q-card-section>
                    <div class="text-subtitle2">POL 152 Introduction to Political Studies II </div>
                </q-card-section>

                <vue-show-more-text
                    :text="txtString2"
                    :lines="2"
                    additional-container-css="margin:1px;"
                    additional-content-css="font-size:16px;"
                    additional-content-expanded-css="font-size:16px;"
                    additional-anchor-css="font-size: 16px;"
                    @click="change"
                />
                <q-card-actions>
                    <q-btn flat>Course Outline</q-btn>
                </q-card-actions>
            <!-- text ends -->

                <!-- text begins -->
                <q-separator red/>
                <q-separator red/>
                
                <q-card-section>
                    <div class="text-subtitle2">MATH 153 Social Statistics (2, 1, 2) </div>
                </q-card-section>

                <vue-show-more-text
                    :text="txtString3"
                    :lines="2"
                    additional-container-css="margin:1px;"
                    additional-content-css="font-size:16px;"
                    additional-content-expanded-css="font-size:16px;"
                    additional-anchor-css="font-size: 16px;"
                    @click="change"
                />
                <q-card-actions>
                    <q-btn flat>Course Outline</q-btn>
                </q-card-actions>
            <!-- text ends -->

                <!-- text begins -->
                <q-separator red/>
                <q-separator red/>
                
                <q-card-section>
                    <div class="text-subtitle2">MATH 154: Social Statistics II (2, 1, 2) </div>
                </q-card-section>

                <vue-show-more-text
                    :text="txtString4"
                    :lines="2"
                    additional-container-css="margin:1px;"
                    additional-content-css="font-size:16px;"
                    additional-content-expanded-css="font-size:16px;"
                    additional-anchor-css="font-size: 16px;"
                    @click="change"
                />
                <q-card-actions>
                    <q-btn flat>Course Outline</q-btn>
                </q-card-actions>
            <!-- text ends -->

                <!-- text begins -->
                <q-separator red/>
                <q-separator red/>
                
                <q-card-section>
                    <div class="text-subtitle2">ENGL 157: Communication Skills I (2, 1, 2) </div>
                </q-card-section>

                <vue-show-more-text
                    :text="txtString5"
                    :lines="2"
                    additional-container-css="margin:1px;"
                    additional-content-css="font-size:16px;"
                    additional-content-expanded-css="font-size:16px;"
                    additional-anchor-css="font-size: 16px;"
                    @click="change"
                />
                <q-card-actions>
                    <q-btn flat>Course Outline</q-btn>
                </q-card-actions>
            <!-- text ends -->
        
         </q-tab-panel>
        </q-tab-panels>

        <q-tab-panels
          v-model="tab"
          animated
          class="bg-orange text-white text-center"
        >
          <q-tab-panel name="level2">
            <div class="text-h6">First Semester</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

        </q-tab-panels>

        <q-tab-panels
          v-model="tab"
          animated
          class="bg-teal text-white text-center"
        >          
          <q-tab-panel name="level3">
            <div class="text-h6">Alarms</div>
            Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
          </q-tab-panel>
        </q-tab-panels>

      </div>
        <q-tab-panels
          v-model="tab"
          animated
          class="bg-teal text-white text-center"
        >          
          <q-tab-panel name="level4">
            <div class="text-h6">First Semester thuf</div>
          </q-tab-panel>
         
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
import vueShowMoreText from 'vue-show-more-text'
export default {
components: {
    vueShowMoreText,
  },
  data () {
    return {
      tab: 'level1',
      txtString: `The course examines the principal concepts, ideas and analytical methods of modern political studies.  Particularly the “political element of the social structure; conflict; power and legitimacy: authority, state nation; government and sovereignty; major and elementary methods of study of the political etc.`,
      txtString2: `The course aims to deepen the knowledge of basic concepts, ideas methods of study etc. acquired in POL 151 through the use of illustrative materials from the political systems of Ghana, one Francophone West African country and Britain.  In particular, institutions (structures) and political processes in these systems will be examined.`,
      txtString3: `The introduction to the nature and use of statistics and some basic concepts.  Descriptive analysis of data: Graphic and tabular representation of data, calculation of measures of central tendency and dispersion.  Coefficients of Skewness and kurtosis.`,
      txtString4: `Probability: Definition of some basic terms; conditional and independent events; some basic laws and rules in probability random variables and probability distributions; expectations and variance of random variables; discrete distributions: binomial and Poisson; continuous distributions: normal; sampling theory.`,
      txtString5: `The course takes all first year students through a review of English grammar, and is a required course for all first year students of KNUST.  Students will be assisted to review some of the common problem areas of their writing, such as verb/tense system, concord, sentence construction and paragraph organization.  There shall also be a study of basic grammatical structures that shall involve teaching students to write formally correct sentences, avoiding sentence errors, and using punctuation effectively.`,
      txtString6: `The course examines the principal concepts, ideas and analytical methods of modern political studies.  Particularly the “political element of the social structure; conflict; power and legitimacy: authority, state nation; government and sovereignty; major and elementary methods of study of the political etc.`,
      txtString7: `The course examines the principal concepts, ideas and analytical methods of modern political studies.  Particularly the “political element of the social structure; conflict; power and legitimacy: authority, state nation; government and sovereignty; major and elementary methods of study of the political etc.`,
      txtString8: `The course examines the principal concepts, ideas and analytical methods of modern political studies.  Particularly the “political element of the social structure; conflict; power and legitimacy: authority, state nation; government and sovereignty; major and elementary methods of study of the political etc.`,
      txtString9: `The course examines the principal concepts, ideas and analytical methods of modern political studies.  Particularly the “political element of the social structure; conflict; power and legitimacy: authority, state nation; government and sovereignty; major and elementary methods of study of the political etc.`,
      txtString10: `The course examines the principal concepts, ideas and analytical methods of modern political studies.  Particularly the “political element of the social structure; conflict; power and legitimacy: authority, state nation; government and sovereignty; major and elementary methods of study of the political etc.`,
      txtString11: `The course examines the principal concepts, ideas and analytical methods of modern political studies.  Particularly the “political element of the social structure; conflict; power and legitimacy: authority, state nation; government and sovereignty; major and elementary methods of study of the political etc.`,
    }
  },
  methods:{
      change(showAll){
          console.log(showAll)
      }
  }
}
</script>
<style lang="sass" scoped>

</style>