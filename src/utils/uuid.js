// uuid类
class UUIDUtil {
  // 不加盐
  generateRandomUUID() {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let uuid = "";
    for (let i = 0; i < 32; i++) {
      uuid += characters[Math.floor(Math.random() * 16)];
    }
    return uuid;
  }

  // 加盐
  generateSaltedUUID(salt) {
    const randomUUID = this.generateRandomUUID();
    const combined = salt + "-" + randomUUID;
    return combined;
  }
}

export default new UUIDUtil(); // 导出实例化后的 CookieManager 对象
