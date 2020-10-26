<template>
  <mCard>
    <el-button @click="handleClick">1212</el-button>
    <mForm :formData="formData" :columns="columns">
      <!-- <template slot="selectValue">
         <el-button @click="handleClick">11212212</el-button>
      </template> -->
    </mForm>
  </mCard>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
      formData:{},
      columns:[
        {
          el: "input",
          prop:"inputValue",
          // type: "textarea",
          label:"请输入",
          span:6
        },
        {
          el: "select",
          prop:"selectValue",
          // label:"下拉框",
          multiple:true,
          list:[
            {label:'选我啊',value:'123'},
            {label:'选我啊1',value:'456'}
          ],
          span:6
        }
      ]
    }
  },
  methods:{
    handleClick(){
      console.log(this.formData);
    },
  },
}
</script>
