package com.rnaggregatorsdk;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

abstract class RnAggregatorSdkSpec extends ReactContextBaseJavaModule {
  RnAggregatorSdkSpec(ReactApplicationContext context) {
    super(context);
  }

  public abstract void getAppName(Promise promise);
}
