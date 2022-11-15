
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnAggregatorSdkSpec.h"

@interface RnAggregatorSdk : NSObject <NativeRnAggregatorSdkSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnAggregatorSdk : NSObject <RCTBridgeModule>
#endif

@end
