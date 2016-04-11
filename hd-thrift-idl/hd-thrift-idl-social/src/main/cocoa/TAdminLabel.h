/**
 * Autogenerated by Thrift Compiler (0.9.2)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */

#import <Foundation/Foundation.h>

#import "TProtocol.h"
#import "TApplicationException.h"
#import "TProtocolException.h"
#import "TProtocolUtil.h"
#import "TProcessor.h"
#import "TObjective-C.h"
#import "TBase.h"


@interface TAdminLabel : NSObject <TBase, NSCoding> {
  int32_t __id;
  NSString * __name;
  int32_t __type;
  NSString * __iconUrl;
  int32_t __status;
  int32_t __sortNum;
  int64_t __createTime;
  int32_t __hasRule;
  NSString * __activityTheme;
  int64_t __activityStartTime;
  int64_t __activityEndTime;
  NSString * __activityDescription;
  NSString * __activityPrize;

  BOOL __id_isset;
  BOOL __name_isset;
  BOOL __type_isset;
  BOOL __iconUrl_isset;
  BOOL __status_isset;
  BOOL __sortNum_isset;
  BOOL __createTime_isset;
  BOOL __hasRule_isset;
  BOOL __activityTheme_isset;
  BOOL __activityStartTime_isset;
  BOOL __activityEndTime_isset;
  BOOL __activityDescription_isset;
  BOOL __activityPrize_isset;
}

#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
@property (nonatomic, getter=id, setter=setId:) int32_t id;
@property (nonatomic, retain, getter=name, setter=setName:) NSString * name;
@property (nonatomic, getter=type, setter=setType:) int32_t type;
@property (nonatomic, retain, getter=iconUrl, setter=setIconUrl:) NSString * iconUrl;
@property (nonatomic, getter=status, setter=setStatus:) int32_t status;
@property (nonatomic, getter=sortNum, setter=setSortNum:) int32_t sortNum;
@property (nonatomic, getter=createTime, setter=setCreateTime:) int64_t createTime;
@property (nonatomic, getter=hasRule, setter=setHasRule:) int32_t hasRule;
@property (nonatomic, retain, getter=activityTheme, setter=setActivityTheme:) NSString * activityTheme;
@property (nonatomic, getter=activityStartTime, setter=setActivityStartTime:) int64_t activityStartTime;
@property (nonatomic, getter=activityEndTime, setter=setActivityEndTime:) int64_t activityEndTime;
@property (nonatomic, retain, getter=activityDescription, setter=setActivityDescription:) NSString * activityDescription;
@property (nonatomic, retain, getter=activityPrize, setter=setActivityPrize:) NSString * activityPrize;
#endif

- (id) init;
- (id) initWithId: (int32_t) id name: (NSString *) name type: (int32_t) type iconUrl: (NSString *) iconUrl status: (int32_t) status sortNum: (int32_t) sortNum createTime: (int64_t) createTime hasRule: (int32_t) hasRule activityTheme: (NSString *) activityTheme activityStartTime: (int64_t) activityStartTime activityEndTime: (int64_t) activityEndTime activityDescription: (NSString *) activityDescription activityPrize: (NSString *) activityPrize;

- (void) read: (id <TProtocol>) inProtocol;
- (void) write: (id <TProtocol>) outProtocol;

- (void) validate;

#if !__has_feature(objc_arc)
- (int32_t) id;
- (void) setId: (int32_t) id;
#endif
- (BOOL) idIsSet;

#if !__has_feature(objc_arc)
- (NSString *) name;
- (void) setName: (NSString *) name;
#endif
- (BOOL) nameIsSet;

#if !__has_feature(objc_arc)
- (int32_t) type;
- (void) setType: (int32_t) type;
#endif
- (BOOL) typeIsSet;

#if !__has_feature(objc_arc)
- (NSString *) iconUrl;
- (void) setIconUrl: (NSString *) iconUrl;
#endif
- (BOOL) iconUrlIsSet;

#if !__has_feature(objc_arc)
- (int32_t) status;
- (void) setStatus: (int32_t) status;
#endif
- (BOOL) statusIsSet;

#if !__has_feature(objc_arc)
- (int32_t) sortNum;
- (void) setSortNum: (int32_t) sortNum;
#endif
- (BOOL) sortNumIsSet;

#if !__has_feature(objc_arc)
- (int64_t) createTime;
- (void) setCreateTime: (int64_t) createTime;
#endif
- (BOOL) createTimeIsSet;

#if !__has_feature(objc_arc)
- (int32_t) hasRule;
- (void) setHasRule: (int32_t) hasRule;
#endif
- (BOOL) hasRuleIsSet;

#if !__has_feature(objc_arc)
- (NSString *) activityTheme;
- (void) setActivityTheme: (NSString *) activityTheme;
#endif
- (BOOL) activityThemeIsSet;

#if !__has_feature(objc_arc)
- (int64_t) activityStartTime;
- (void) setActivityStartTime: (int64_t) activityStartTime;
#endif
- (BOOL) activityStartTimeIsSet;

#if !__has_feature(objc_arc)
- (int64_t) activityEndTime;
- (void) setActivityEndTime: (int64_t) activityEndTime;
#endif
- (BOOL) activityEndTimeIsSet;

#if !__has_feature(objc_arc)
- (NSString *) activityDescription;
- (void) setActivityDescription: (NSString *) activityDescription;
#endif
- (BOOL) activityDescriptionIsSet;

#if !__has_feature(objc_arc)
- (NSString *) activityPrize;
- (void) setActivityPrize: (NSString *) activityPrize;
#endif
- (BOOL) activityPrizeIsSet;

@end

@interface TAdminLabelConstants : NSObject {
}
@end