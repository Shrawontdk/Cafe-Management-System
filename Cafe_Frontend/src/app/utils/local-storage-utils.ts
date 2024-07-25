import {environment} from "@env/environment";
import {ObjectUtil} from "./ObjectUtil";
import {CryptoJsUtil} from "./CryptoJsUtil";

export class LocalStorageUtil {
  /**
   * @description
   * Get an instance of LocalStorage.
   */
  public static getStorage(): LocalStorage {
    return ObjectUtil.isEmpty(localStorage.getItem(environment.appConfigName))
      ? new LocalStorage()
      : JSON.parse(
        CryptoJsUtil.decrypt(localStorage.getItem(environment.appConfigName))
      );
  }

  /**
   * @param data A local storage instance to save.
   *
   * @description
   * Make sure you use LocalStorageUtil.getStorage() method before
   * to get instance of LocalStorage. Edit the instance and use
   * LocalStorageUtil.setStorage() to set in the browser's localStorage.
   */
  public static setStorage(data: LocalStorage): void {
    localStorage.setItem(
      environment.appConfigName,
      CryptoJsUtil.encrypt(JSON.stringify(data))
    );
  }

  /**
   * @description
   * Passes empty JSON to clear the storage.
   */
  public static clearStorage(): void {
    LocalStorageUtil.setStorage(new LocalStorage());
  }
}

export class LocalStorage {
  sessionId: string | undefined;
  customerForm: any | undefined;
  currentState: any | undefined;
  at: string | undefined;
  rt: string | undefined;
  ty: string | undefined;
  et: string | undefined;
  username: string | undefined;
  roleName: string | undefined;
  email: string | undefined;
  userId: string | undefined;
  userFullName: string | undefined;
  isDefaultPassword: boolean | undefined;
  isDefaultPasswordChanged: boolean | undefined;
}
