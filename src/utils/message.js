import { ElMessage, ElMessageBox } from "element-plus";

class MessageBoxService {
  constructor() {}

  // 普通消息提示
  showMessage(type, message) {
    ElMessage({
      type: type,
      message: message,
    });
  }

  // 确认提示框
  showConfirmMessageBox(message, title = "温馨提示") {
    return ElMessageBox.confirm(message, title, {
      distinguishCancelAndClose: true,
      confirmButtonText: "同意",
      cancelButtonText: "取消",
    });
  }

  // 成功消息提示
  showSuccessMessage(message) {
    this.showMessage("success", message);
  }

  // 错误消息提示
  showErrorMessage(message) {
    this.showMessage("error", message);
  }

  // 警告消息提示
  showWarningMessage(message) {
    this.showMessage("warning", message);
  }

  // 信息消息提示
  showInfoMessage(message) {
    this.showMessage("info", message);
  }

  // 自定义确认提示框
  showCustomConfirmMessageBox(message, title, confirmText, cancelText) {
    return ElMessageBox.confirm(message, title, {
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
    });
  }
}

export default new MessageBoxService();
