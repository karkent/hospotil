<template>
  <div>
    <div style="margin-bottom: 20px;">
      <el-button
        size="small"
        @click="addTab(editableTabsValue,data2)"
      >
        add tab
      </el-button>
    </div>
    <el-tabs v-model="editableTabsValue" type="card"  @tab-remove="removeTab">

      <el-tab-pane
        key="1"
        label="主页"
        name="1"
        :closable=false>
      </el-tab-pane>

      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable=true
      >
        {{item.content}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editableTabsValue: '1',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 1,
      data2:1
    }
  },
  methods: {
    addTab(targetName,data) {
      console.log(this.tabIndex)
      console.log(this.editableTabsValue)

      let newTabName = ++this.tabIndex + '';
      let data1 = data+1;
      this.data2 = data1;
      this.editableTabs.push({
        title: "dsadadada",
        name: newTabName,
        content: data1
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      console.log(targetName)
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      this.tabIndex = targetName-1
      console.log(this.tabIndex)
      console.log(this.editableTabsValue)
    }
  }
}
</script>


