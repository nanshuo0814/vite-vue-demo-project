import VueCookie from "vue-cookie";
import CryptoJS from "crypto-js";

/**
 * Cookie 管理器类，用于操作浏览器中的 Cookie 数据。
 */
class CookieManager {
  /**
   * 构造函数，初始化 Cookie 管理器。
   * @param {string} cookiePrefix - Cookie 名称的前缀，用于避免命名冲突。
   */
  constructor(cookiePrefix = "") {
    this.cookiePrefix = cookiePrefix;
  }

  /**
   * 设置普通的 Cookie。
   * @param {string} key - Cookie 键名。
   * @param {string} value - Cookie 值。
   * @param {object} options - 配置选项，如过期时间。
   */
  setCookie(key, value, options = {}) {
    const cookieKey = this.getPrefixedKey(key);
    VueCookie.set(cookieKey, value, options);
  }

  /**
   * 获取普通的 Cookie 值。
   * @param {string} key - Cookie 键名。
   * @returns {string|null} - Cookie 值，如果不存在则返回 null。
   */
  getCookie(key) {
    const cookieKey = this.getPrefixedKey(key);
    return VueCookie.get(cookieKey);
  }

  /**
   * 删除普通的 Cookie。
   * @param {string} key - Cookie 键名。
   */
  deleteCookie(key) {
    const cookieKey = this.getPrefixedKey(key);
    VueCookie.delete(cookieKey);
  }

  /**
   * 设置加密的 Cookie，可以选择设置过期时间。
   * @param {string} key - Cookie 键名。
   * @param {string} value - Cookie 值。
   * @param {number|null} expirationMinutes - 过期时间（分钟）。
   */
  setEncryptedCookie(key, value, expirationMinutes = null) {
    const encryptedValue = CryptoJS.MD5(value).toString();
    this.setPlainCookie(key, encryptedValue, expirationMinutes);
  }

  /**
   * 设置不加密的 Cookie，可以选择设置过期时间。
   * @param {string} key - Cookie 键名。
   * @param {string} value - Cookie 值。
   * @param {number|null} expirationMinutes - 过期时间（分钟）。
   */
  setPlainCookie(key, value, expirationMinutes = null) {
    const options = {};
    if (expirationMinutes !== null) {
      const expirationDate = new Date();
      expirationDate.setTime(
        expirationDate.getTime() + expirationMinutes * 60 * 1000
      );
      options.expires = expirationDate;
    }

    this.setCookie(key, value, options);
  }

  /**
   * 刷新 Cookie 的过期时间。
   * @param {string} key - Cookie 键名。
   * @param {number} expirationMinutes - 新的过期时间（分钟）。
   */
  refreshCookieExpiration(key, expirationMinutes) {
    const currentValue = this.getCookie(key);
    if (currentValue !== null) {
      this.setPlainCookie(key, currentValue, expirationMinutes);
    }
  }

  /**
   * 根据前缀获取完整的 Cookie 键名。
   * @param {string} key - Cookie 键名。
   * @returns {string} - 带前缀的 Cookie 键名。
   */
  getPrefixedKey(key) {
    return this.cookiePrefix + key;
  }
}

export default new CookieManager(); // 导出实例化后的 CookieManager 对象
