import { action, observable, computed } from "mobx";

export default class AppState {
  @observable public num: number = 0;
  @computed
  get numVal() {
    return this.num;
  }
  @action
  public addNum(newNum: number) {
    this.num += newNum;
  }
  @action
  public reduceNum(newNum: number) {
    this.num -= newNum;
  }
}
