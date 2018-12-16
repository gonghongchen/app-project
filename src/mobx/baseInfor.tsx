/**
 * @description 当前用户基本信息
 */
import { action, observable, computed, autorun } from "mobx";
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
    this.userName = newName;
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
