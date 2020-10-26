<template>
  <el-form
    :model="formData"
    :rules="rules"
    :inline="inline"
    :label-position="labelPosition||'right'"
    :label-width="labelWidth"
    :label-suffix="lableSuffix"
    :show-message="showMessage"
    :inline-message="inlineMessage"
    :status-icon="statusIcon"
    :validate-on-rule-change="validateOnRuleChange"
    :size="size || 'mini'"
    :disabled="formDisabled"
  >
    <el-col :span="column.span||11" v-for="column in columns" :key="column.prop">
      <el-form-item :label="column.label || ''">
        <slot :name="column.prop">
          <mItem :column="column" :row="formData"></mItem>
        </slot>
      </el-form-item>
    </el-col>
  </el-form>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default() {
        return {};
      },
    },
    columns: Array,
    labelWidth: {
      type: String,
      default: "100px",
    },
    inline: Boolean,
    rules: Object,
    labelPosition: String,
    lableSuffix: String,
    showMessage: {
      type: Boolean,
      default: true,
    },
    inlineMessage: Boolean,
    statusIcon: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true,
    },
    size: String,
    formDisabled: Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>