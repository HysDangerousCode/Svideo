<template>
  <div class="course-list">
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
    ></avue-crud>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource: string;
  data = {};
  option = {};
  page: any = {
    total: 10,
    pageSize: 10,
    pageSizes: [5, 10, 15, 20],
  };
  query: any = {
    limit: 2,
  };
  $http: any;

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }
  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }
  async changeSort({ prop, order }) {
    if (!order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        [prop]: order === "ascending" ? 1 : -1,
      };
    }
    this.fetch();
  }
  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query,
      },
    });
    this.data = res.data;
    this.page.total = res.data.total;
    // this.page.pageSize;
  }
  async create(row, done) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }
  async update(row, index, done) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`/${this.resource}/${row._id}`, data);
    this.$message.success("更新成功");
    this.fetch();
    done();
  }
  async remove(row) {
    try {
      await this.$confirm("是否确认删除?");
    } catch (e) {
      return false;
    }
    await this.$http.delete(`/${this.resource}/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }

  created() {
    this.fetchOption();
    this.fetch();
  }
}
</script>
<style></style>
