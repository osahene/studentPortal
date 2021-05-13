<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      autogrow
      autofocus
      clearable
      :value="name"
      @input="$emit('update:name', $event)"
      class="col"
      ref="name"
      label="Write the task here"
      :rules="[ val => !!val || 'Please type something']"
    />
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>
