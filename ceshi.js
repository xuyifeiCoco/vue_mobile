const os = require("os");

class Tool {
  /**
   * 获取本机ip via https://stackoverflow.com/a/8440736
   */
  static getLocalIpList() {
    let networkInterfaceList = os.networkInterfaces();

    let localIpList = ["127.0.0.1"];

    for (let networkInterface of Object.keys(networkInterfaceList)) {
      for (let interfaceInfo of networkInterfaceList[networkInterface]) {
        if (
          interfaceInfo.family !== "IPv4" ||
          interfaceInfo.internal !== false
        ) {
          // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
          continue;
        }
        let ip = interfaceInfo.address;
        localIpList.push(ip);
      }
    }
    return localIpList;
  }
}

console.log(Tool.getLocalIpList());

// export default Tool
