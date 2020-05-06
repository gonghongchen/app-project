/**
 * @description 当前用户基本信息
 */
import { action, observable, computed, autorun, runInAction } from "mobx";
import { printMobxLog } from "base/baseFuncs";
import localforage from "localforage";

interface IUserBaseInforProps {
  userBaseInfor: {
    getUserName(): string;
    setUserName(): UserBaseInfor;
  };
}

class UserBaseInfor {
  @observable userName: string = "";
  @computed
  get getUserName() {
    return this.userName;
  }
  @action
  setUserName(newName: string = this.getUserName) {
    setTimeout(runInAction(() => this.userName = newName), 0)  // 在严格模式下，异步 action 必须要用 action 包裹，或者使用 @action.bind 的方式
    localforage.setItem("userName", newName);
    
    return this;
  }
}

const userBaseInfor = new UserBaseInfor();

autorun(() => {
  if (process.env.NODE_ENV === "development") {
    printMobxLog(userBaseInfor.getUserName, "UserBaseInfor 当前用户名");
  }
});

export { IUserBaseInforProps };
export default userBaseInfor;
