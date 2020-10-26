<template>
  <el-input
    v-if="column.el==='input'"
    :type="column.type ? column.type : 'text'"
    v-model="row[column.prop]"
    :size="column.size || 'small'"
    :maxlength="column.maxlength || ''"
    :minlength="column.minlength || ''"
    :placeholder="column.placeholder ? column.placeholder : column.label"
    :clearable="column.clearable || true"
    :disabled="column.disabled"
  ></el-input>
  <el-select
    v-else-if="column.el==='select'"
    v-model="row[column.prop]"
    :multiple="column.multiple"
    :placeholder="column.placeholder ? column.placeholder : column.label"
    :disabled="column.disabled"
    :size="column.size || 'small'"
    :clearable="column.clearable || true"
  >
    <el-option
      v-for="item in column.list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    column: Object,
    row: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>