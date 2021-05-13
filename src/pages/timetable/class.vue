<template>
  <div class="q-pa-md">
    <div style="">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
      >
        <q-tab class="text-purple" name="level1" label="class" />
        <q-tab class="text-orange" name="level2" label="personal" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          class="text-black text-center"
        >
          <q-tab-panel name="level1">
                <q-card-section>
                    <q-option-group
                    v-model="separator"
                    inline
                    class="q-mb-md"                    
                    />

                    <q-table
                    :title="title.label"
                    :data="data"
                    :columns="columns"
                    row-key="name"
                    :separator="separator"
                    />
                </q-card-section>              
                

                <!-- text begins -->
                <q-separator red/>
                <q-separator red/>
                
                
            <!-- text ends -->
        
         </q-tab-panel>
        </q-tab-panels>

        <q-tab-panels
          v-model="tab"
          animated
          class="bg-white text-white text-center"
        >
          <q-tab-panel name="level2">
            <div class="text-h6">First Semester</div>
            <q-table
              title="Treats"
              :data="data"
              :columns="columns"
              row-key="id"
              :filter="filter"
              :loading="loading"
              binary-state-sort
            >
              <template v-slot:top>
                <q-btn color="primary" :disable="loading" label="Add row" @click="addRow" />
                <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />
                <q-space />
                <q-input borderless dense debounce="300" color="primary" v-model="filter">
                
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="desc" :props="props">
                    {{ props.row.name }}
                    <q-popup-edit v-model="props.row.name">
                      <q-input v-model="props.row.name" dense autofocus counter />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="calories" :props="props">
                    {{ props.row.calories }}
                    <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
                      <q-input type="number" v-model="props.row.calories" dense autofocus />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="fat" :props="props">
                    <div class="text-pre-wrap">{{ props.row.fat }}</div>
                    <q-popup-edit v-model="props.row.fat">
                      <q-input type="textarea" v-model="props.row.fat" dense autofocus />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="carbs" :props="props">
                    {{ props.row.carbs }}
                    <q-popup-edit v-model="props.row.carbs" title="Update carbs" buttons persistent>
                      <q-input type="number" v-model="props.row.carbs" dense autofocus hint="Use buttons to close" />
                    </q-popup-edit>
                  </q-td>
                  <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
                  <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                  <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
                  <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
                </q-tr>
              </template>
            </q-input>
          </template>
            </q-table>
          </q-tab-panel>

        </q-tab-panels>
      </div>
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
      separator: 'cell',
      loading: false,
      filter: '',
      rowCount: 10,

      title:{
        name: 'Semester',
        label:'2021/2022 First Semester',
        align:'center'
      },

      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Days',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: '7:00 - 9:00', field: 'calories', sortable: true },
        { name: 'fat', label: '9:00 - 11:00', field: 'fat', sortable: true },
        { name: 'carbs', label: '11:00 - 13:00', field: 'carbs' },
        { name: 'protein', label: '13:00 - 15:00', field: 'protein' },
        { name: 'sodium', label: '15:00 - 17:00', field: 'sodium' }
      ],
      data: [
        {
          id: 1,
          name: 'Monday',
          calories: 'PS151',
          fat: 'PS151',
          carbs: 'PS151',
          protein: 'PS151',
          sodium: 'PS151',
        },
        {
          id: 2,
          name: 'Tuesday',
          calories: 'PS151',
          fat: 'PS151',
          carbs: 'PS151',
          protein: 'PS151',
          sodium: 'PS151',
          
        },
        {
          id: 3,
          name: 'Wednesday',
          calories: 'PS151',
          fat: 'PS151',
          carbs: 'PS151',
          protein: 'PS151',
          sodium: 'PS151',
        },
        {
          id: 4,
          name: 'Thursday',
          calories: 'PS151',
          fat: 'PS151',
          carbs: 'PS151',
          protein: 'PS151',
          sodium: 'PS151',
        },
        {
          id: 5,
          name: 'Friday',
          calories: 'PS151',
          fat: 'PS151',
          carbs: 'PS151',
          protein: 'PS151',
          sodium: 'PS151',
        },
        
      ]
    }
  },
  methods:{
   // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [ ...this.data.slice(0, index), addRow, ...this.data.slice(index) ]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [ ...this.data.slice(0, index), ...this.data.slice(index + 1) ]
        this.loading = false
      }, 500)
    }
  }
}
</script>
<style lang="sass" scoped>

</style>