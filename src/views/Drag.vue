<template>
  <div class="drag">
    <div class="content">
      <div id="cun" @drop="drop($event, 1)" @dragover="allowDrop($event)">
        <div class="title">Personally Identifiable Information</div>
      </div>

      <div id="cun" @drop="drop($event, 2)" @dragover="allowDrop($event)">
        <div class="title">Intellectual Property</div>
      </div>
      <div id="cun" @drop="drop($event, 3)" @dragover="allowDrop($event)">
        <div class="title">Proprietary Information</div>
      </div>
    </div>
    <div
      id="cun"
      class="heard"
      @drop="drop($event, 4)"
      @dragover="allowDrop($event)"
    >
      <h1 draggable="true" id="tuo1" @dragstart="drag($event)">Social security numbers</h1>
      <h1 draggable="true" id="tuo2" @dragstart="drag($event)">Banking</h1>
      <h1 draggable="true" id="tuo3" @dragstart="drag($event)">Health information</h1>
      <h1 draggable="true" id="tuo4" @dragstart="drag($event)">Name</h1>
      <h1 draggable="true" id="tuo5" @dragstart.passive="drag($event)">Address</h1>
      <h1 draggable="true" id="tuo6" @dragstart="drag($event)">Phone number</h1>
      <h1 draggable="true" id="tuo7" @dragstart="drag($event)">Inventions</h1>
      <h1 draggable="true" id="tuo8" @dragstart="drag($event)">Formulas</h1>
      <h1 draggable="true" id="tuo9" @dragstart.passive="drag($event)">Designs</h1>
      <h1 draggable="true" id="tuo10" @dragstart="drag($event)">Research owned by an organization</h1>
      <h1 draggable="true" id="tuo11" @dragstart="drag($event)">Sales data</h1>
      <h1 draggable="true" id="tuo12" @dragstart="drag($event)">Corporate strategies</h1>
      <h1 draggable="true" id="tuo13" @dragstart.passive="drag($event)">Third-party contracts</h1>
      <h1 draggable="true" id="tuo14" @dragstart="drag($event)">Architecture design</h1>
      <h1 draggable="true" id="tuo15" @dragstart="drag($event)">Financial arrangements</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Identifiable: ["Name","Address", "Phone number"],
      Intellectual: ["Formulas",'Health information','Inventions','Designs','Corporate strategies','Architecture design','Research owned by an organization'],
      Informations:["Social security numbers", "Financial arrangements", "Banking",'Sales data','Third-party contracts'],
    };
  },

  methods: {
    setData(val) {
      alert(11);
      console.log(val);
    },
    drag(ev) {
      console.log("执行了");
      //  console.log(ev.dataTransfer.setData("Text", ev.target.id))
      //使用setData（数据类型，携带的数据）
      //方法将要拖放的数据存入datatransfer对象
      //    var dragid = document.getElementById(id).value;
      ev.dataTransfer.setData("Text", ev.target.id);
    },
    allowDrop(ev) {
      //不执行默认处理（拒绝被拖放）
      ev.preventDefault();
    },

    drop(ev, key) {
      //不执行默认处理（拒绝被拖放）
      ev.preventDefault();
      //使用getData()获取到数据，然后赋值给data
      const data = ev.dataTransfer.getData("Text");
      console.log(data, "okllkll");
      //判断target的id是否和下面图片中的id相等的 相等说明是要把两张图片换一下
      let flag = 0;

      for (let i = 0; i < document.getElementsByTagName("h1").length; i++) {
        if (document.getElementsByTagName("h1")[i].id == ev.target.id) {
          flag = 1;
        }
      }
      if (flag == 1) {
        let temp = document.getElementById(data).innerHTML;

        document.getElementById(data).innerHTML = document.getElementById(
          ev.target.id
        ).innerHTML;
        document.getElementById(ev.target.id).innerHTML = temp;
       
      } else {
       
        const { innerHTML, style } = document.getElementById(data);
          console.log(innerHTML, "pppp");
        if (key == 1 && this.Identifiable.includes(innerHTML)) {
          style.color = "#67c23a";
        } else if (key == 2 && this.Intellectual.includes(innerHTML)) {
          style.color = "#67c23a";
        } else if (key == 3 && this.Informations.includes(innerHTML)) {
          style.color = "#67c23a";
        }else if (key == 4) {
          style.color = "#212121";
        } else {
          style.color = "#fc5531";
        }
        //使用appendChild方法把拖动的节点放到元素节点中成为他的子节点
          this.$emit('allowSlidLift')
        ev.target.appendChild(document.getElementById(data));
      }
    },
  },
};
</script>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#cun {
  margin: 0;
  padding: 0;
  width: 30%;
  padding: 30px 10px 30px 10px;
  font-size: 12px;
  border: 2px solid #d2d2d2;
  box-shadow: 1px 4px 8px #646464;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  > h1 {
    padding: 5px 20px;
    margin-right: 15px;
  }
}
.title{
  position: absolute;
  top:10px ;
  width: 100%;
  text-align: center;
  font-size: 15px;
  font-weight:bold;
}
.drag {
  width: 90%;
  position: relative;
  z-index: 1500;
  padding: 0 20px;
}
.heard {
  margin: auto;
  width: 100% !important;
}
</style>
