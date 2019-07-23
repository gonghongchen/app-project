import { action, observable, computed, runInAction } from "mobx";
import { getLocation } from "base/request";

class AppState {
  @observable public num: number = 0;
  @observable public obj: any = { show: false };
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
  @action
  setShow(show: boolean) {
    getLocation().then(() => {
      runInAction(() => this.obj = { show });
    });
  }
}

export default new AppState();