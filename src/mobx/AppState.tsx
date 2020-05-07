import { action, observable, computed, runInAction } from "mobx";
import { getLocation } from "base/request";

interface IAppState {
  num: number,
  obj: {
    show: boolean
  },
  addNum: (newNum: number) => null,
}
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

export { IAppState }
export default new AppState();