#import "RnAggregatorSdk.h"

@implementation RnAggregatorSdk
RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_REMAP_METHOD(getAppName,
                 withResolver1:(RCTPromiseResolveBlock)resolve
                 withRejecter1:(RCTPromiseRejectBlock)reject)
{
    NSString *displayName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
    NSString *bundleName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleName"];
    resolve(displayName ? displayName : bundleName);
}

RCT_REMAP_METHOD(getAppVersion,
                 withResolver2:(RCTPromiseResolveBlock)resolve
                 withRejecter2:(RCTPromiseRejectBlock)reject)
{
    NSString *appVersion = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
    resolve(appVersion);
}

RCT_REMAP_METHOD(getAppVersionCode,
                 withResolver3:(RCTPromiseResolveBlock)resolve
                 withRejecter3:(RCTPromiseRejectBlock)reject)
{
    NSString *appCode = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"];
    resolve(appCode);
}

RCT_REMAP_METHOD(getAppPackageName,
                 withResolver4:(RCTPromiseResolveBlock)resolve
                 withRejecter4:(RCTPromiseRejectBlock)reject)
{
    NSString *packageName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleIdentifier"];
    resolve(packageName);
}


// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRnAggregatorSdkSpecJSI>(params);
}
#endif

@end
