<template>
  <div class="learning-analytics">
    <Nav v-model="activeIndex"></Nav>
    <h1 class="title">SUMMARY</h1>
    <div class="table">
      <el-table :data="userStore.userList" style="width: 100%">
        <el-table-column prop="username" label="User" width="180">
        </el-table-column>
        <el-table-column prop="lesson1" label="Lesson1" width="180">
        </el-table-column>
        <el-table-column prop="lesson2" label="Lesson2"> </el-table-column>
        <el-table-column prop="lesson3" label="Lesson3"> </el-table-column>
        <el-table-column prop="sum" label="Sum">
          <template slot-scope="{ row }">
            {{ row.lesson1 + row.lesson2 + row.lesson3 }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <h1 class="title">ANALYTICS</h1>
    <div id="chart-container"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  LegendComponent,
  GridComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import Nav from "@/components/Nav";
import { userStore } from "@/store";

echarts.use([
  LineChart,
  TitleComponent,
  LegendComponent,
  GridComponent,
  TooltipComponent,
  CanvasRenderer,
]);

export default {
  components: {
    Nav,
  },
  created() {
    if (!this.userStore.isLogin) {
      this.$message({
        showClose: true,
        message: "Please login first",
        type: "warning",
      });
      this.$router.replace("/login");
    }
  },
  data: () => ({
    activeIndex: 7,
    userStore: userStore(),
    colorSet: [
      ["rgba(0, 103, 141, 1)", "rgba(13, 37, 71, 0)"],
      ["rgba(145, 204, 116, 1)", "rgba(13, 37, 71, 0)"],

      ["rgba(249, 200, 88, 1)", "rgba(13, 37, 71, 0)"],
      ["rgba(238, 102, 102, 0.6)", "rgba(13, 37, 71, 0)"],
    ],
    chart: null,
  }),
  mounted() {
    const option = {
      tooltip: { show: true },
      xAxis: {
        data: ["lesson1", "lesson2", "lesson3"],
        axisLine: {
          show: true,
          lineStyle: { color: "rgba(102, 102, 102, 1)" },
        },
        splitLine: { lineStyle: { color: "rgba(102, 102, 102, 0.4)" } },
        axisLabel: { color: "#fff" },
        min: "dataMin",
        max: "dataMax",
      },
      yAxis: {
        show: true,
        axisLine: {
          show: true,
          lineStyle: { color: "rgba(102, 102, 102, 1)" },
        },
        axisLabel: { color: "#fff" },
        splitLine: { lineStyle: { color: "rgba(102, 102, 102, 0.4)" } },
        min: "dataMin",
        max: "dataMax",
      },
      legend: {
        show: true,
        right: 150,
        textStyle: {
          color: '#fff'
        }
      },
      series: this.userStore.userList.map((item, index) => ({
        name: item.username,
        data: [item.lesson1, item.lesson2, item.lesson3],
        smooth: true,
        type: "line",
        areaStyle: {
          color: this.genColor(this.colorSet[index], [0, 0, 0, 1]),
          origin: "start",
        },
      })),
    };
    this.chart = echarts.init(document.getElementById("chart-container"));
    this.chart.setOption(option);
  },
  methods: {
    genColor(color, dir) {
      return {
        type: "linear",
        x: dir[0],
        y: dir[1],
        x2: dir[2],
        y2: dir[3],
        colorStops: color.map((_color, idx) => ({
          offset: (1 / (color.length - 1)) * idx,
          color: _color,
        })),
      };
    },
  },
};
</script>

<style lang="less" scoped>
.learning-analytics {
  background: rgba(13, 37, 71, 1);
  .title {
    margin-top: 50px;
    padding: 0 100px;
    color: #00c6be;
  }
  .table {
    margin-top: 50px;
    padding: 0 100px;
    & /deep/ .el-table {
      background-color: #394a70;
      border-radius: 10px;
      &::before {
        display: none;
      }
      .el-table__header-wrapper {
        tr,
        th {
          background-color: #394a70;
          border: 0;
          color: #bfcefb;
        }
      }
      .el-table__body tr:hover > td.el-table__cell {
        background-color: #c7d6ff;
        color: #000;
      }
      .el-table__row {
        background-color: #64739c;
        color: #deecff;
        td {
          border: 0;
        }
      }
    }
  }
  #chart-container {
    height: 500px;
  }
}
</style>
