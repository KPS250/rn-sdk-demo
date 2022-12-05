package com.rnaggregatorsdk;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;
import android.content.pm.PackageManager;
import android.content.pm.PackageInfo;

public class RnAggregatorSdkModule extends RnAggregatorSdkSpec {
  public static final String NAME = "RnAggregatorSdk";
  private final ReactApplicationContext reactContext;

  RnAggregatorSdkModule(ReactApplicationContext context) {
    super(context);
    this.reactContext = context;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void getAppName(Promise promise) {
    String appName = "";
      if (this.reactContext != null) {
        appName = reactContext.getApplicationInfo().loadLabel(reactContext.getPackageManager()).toString();
    }
    promise.resolve(appName); 
  }

  @ReactMethod
  public void getAppVersion(Promise promise) {
    String appVersion = "";
    PackageManager manager = reactContext.getPackageManager();
    try {
      PackageInfo info = manager.getPackageInfo(reactContext.getPackageName(), 0);
      appVersion = info.versionName;
    } catch (PackageManager.NameNotFoundException e) {
    // TODO Auto-generated catch block
    }
    promise.resolve(appVersion); 
  }

  @ReactMethod
  public void getAppVersionCode(Promise promise) {
    String appVersionCode = "";
    PackageManager manager = reactContext.getPackageManager();
    try {
      PackageInfo info = manager.getPackageInfo(reactContext.getPackageName(), 0);
      appVersionCode = String.valueOf(info.versionCode);
    } catch (PackageManager.NameNotFoundException e) {
    // TODO Auto-generated catch block
    }
    promise.resolve(appVersionCode); 
  }

  @ReactMethod
  public void getAppPackageName(Promise promise) {
    String packageName = "";
    PackageManager manager = reactContext.getPackageManager();
    try {
      PackageInfo info = manager.getPackageInfo(reactContext.getPackageName(), 0);
      packageName =  info.packageName;
    } catch (PackageManager.NameNotFoundException e) {
    // TODO Auto-generated catch block
    }
    promise.resolve(packageName); 
  }
}
