/**
 * @description 打印 Mobx 的状态更新日志
 * @param logText 需要打印的日志
 * @param tipsText 提示信息
 */
const printMobxLog = (logInfor: any, tipsText?: string) => {
  console.log(`%c ${tipsText}：`, "color: green", logInfor);
};

export { printMobxLog };
