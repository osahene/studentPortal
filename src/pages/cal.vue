<template>
<q-page class="q-pa-md">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Cumulative Weight Average Calculator</div>
      </q-card-section>

      <q-card-section>
        <q-btn
            rounded
            @click.prevent="startCalculator"
            v-if="start"
            class=" text-white"
          >
            {{ startTitle }}
          </q-btn>
          <div  v-if="process">
            <div   class="row"       
            v-for="(data, index) in formData"
            :key="index"
            >
            
           
                <q-input
                label="Course"
                :for="count"
                type="text"
                class="col-4 col-md-4"
                v-model="data.course"
                />
         

            
                <q-select
                class="col-4 col-md-4"
                :for="count"
                v-model="selected"
                label="Grade"
                type="text"                          
                :options="grades"
                >
                </q-select>
            
            
                <q-input
                class="col-4 col-md-4"
                label="Credit"
                :for="count"
                type="number"
                v-model="unit"
                />
         
                <q-icon 
                name="cancel" 
                @click="removePreviousField(index)" 
                class="cursor-pointer" 
                />
            
            
            </div>
            <app-button>
            <q-btn
                @click.prevent="addNewField"              
                class=" btn block text-white rounded px-4 py-4 text-xl  font-bold text-center sm:text-2xl font-textFont shadow-xl  mt-6 w-full sm:w-1/2 mx-auto my-6"
            >
                {{ newTitle }}
            </q-btn>
             </app-button>
            <app-button>
              <q-btn
                @click.prevent="calculateGrade"
                :class="['btn--yellow']"
                class=" btn block text-white rounded px-4 py-4 text-xl  font-bold text-center sm:text-2xl font-textFont shadow-xl  mt-6 w-full sm:w-1/2 mx-auto my-6"
            >
                Calculate GPA
              </q-btn>
            </app-button>
            <div class="grade__gpa" v-if="showGPA">
            <p class="text-xl sm:text-2xl">Your GPA is: </p>
            <p>{{ GPA }}</p>
            </div>
        </div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  <section class="grade">
    <h1 class="text-4xl sm:text-6xl font-bold headingFont text-center">
      .
    </h1>
    <p class="textFont mb-3 sm:text-2xl text-xl">
      Using GPA Buddy, you can easily calculate grade point average.
    </p>
    <form action="">
      

      
    </form>
  </section>
 </q-page>
</template>

<script>
import Button from '../components/Button.vue';
export default {
  data() {
    return {
      start: true,
      process: false,
      startTitle: 'Get Started',
      newTitle: 'Add a new field',
      numOfCourses: 5,
      totalUnits: '',
      selected: '',
      unit: 0,
      grades:  ['AB', 'B','BC','C', 'CD', 'D', 'E', 'F' ],
      GPA: 0,
      showGPA: false,
      formData: [{ course: '', grade: '', unit: 0 }]
    };
  },
  computed: {
    count() {
      let count = 0;
      return count++;
    }
  },
  components: {
    appButton: Button
  },
  methods: {
    startCalculator() {
      this.start = false;
      this.process = true;
    },
    addNewField() {
      this.formData.push({ course: '', grade: '', unit: '' });
    },
    removePreviousField(index) {
      this.formData.splice(index, 1);
      this.calcul
    },
    calculateGrade() {
      let totalGrades = 0,
        totalUnits = 0,
        GPA = 0;
      const formDataArr = this.formData.map(el => {
        let grade = el.grade;
        let gradePoint = 0;
        let unit = parseInt(el.unit, 10);
        switch (grade) {
          case 'A':
            gradePoint = 4.0 * unit;
            break;
          case 'AB':
            gradePoint = 3.5 * unit;
            break;
          case 'B':
            gradePoint = 3.25 * unit;
            break;
          case 'BC':
            gradePoint = 3.0 * unit;
            break;
          case 'C':
            gradePoint = 2.75 * unit;
            break;
          case 'CD':
            gradePoint = 2.5 * unit;
            break;
          case 'D':
            gradePoint = 2.25 * unit;
            break;
          case 'E':
            gradePoint = 2.0 * unit;
            break;
          case 'F':
            gradePoint = 0 * unit;
            break;
        }
        totalGrades += gradePoint;
        totalUnits += unit;
      });
      console.log(totalGrades, totalUnits);
      GPA = totalGrades / totalUnits;
      this.GPA = GPA;
      this.showGPA = true;
      console.log(formDataArr);
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.grade {
  width: 100%;
  max-width: 50rem;
  margin: 4rem auto;

  &__input {
    // width: 43%;
    width: 100%;
    border: 3px solid transparent;
    background: var(--color-primary);

    &:focus {
      border: 3px solid var(--color-blue);
      outline: none;
    }

    &-select {
      padding: .65rem;
    }
  }

  &__form-group {
    flex: 1 0 25%;
    &-2 {
      flex: 1 0 6%;
    }
  }

  &__gpa {
    font-size: 3rem;
    background: lightgreen;
    margin-top: 2rem;
    padding: 1rem;
    font-weight: 700;
    text-align: center;
  }
}

.remove-field {
  background: var(--color-paragraph);
  padding: 0.2rem;
}

@media only screen and (min-width: 37.5em) {
  .grade {
    margin: 3rem auto;
  }
}
</style>
