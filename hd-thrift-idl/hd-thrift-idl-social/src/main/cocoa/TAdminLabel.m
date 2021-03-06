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


#import "TAdminLabel.h"

@implementation TAdminLabel

- (id) init
{
  self = [super init];
#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
#endif
  return self;
}

- (id) initWithId: (int32_t) id name: (NSString *) name type: (int32_t) type iconUrl: (NSString *) iconUrl status: (int32_t) status sortNum: (int32_t) sortNum createTime: (int64_t) createTime hasRule: (int32_t) hasRule activityTheme: (NSString *) activityTheme activityStartTime: (int64_t) activityStartTime activityEndTime: (int64_t) activityEndTime activityDescription: (NSString *) activityDescription activityPrize: (NSString *) activityPrize
{
  self = [super init];
  __id = id;
  __id_isset = YES;
  __name = [name retain_stub];
  __name_isset = YES;
  __type = type;
  __type_isset = YES;
  __iconUrl = [iconUrl retain_stub];
  __iconUrl_isset = YES;
  __status = status;
  __status_isset = YES;
  __sortNum = sortNum;
  __sortNum_isset = YES;
  __createTime = createTime;
  __createTime_isset = YES;
  __hasRule = hasRule;
  __hasRule_isset = YES;
  __activityTheme = [activityTheme retain_stub];
  __activityTheme_isset = YES;
  __activityStartTime = activityStartTime;
  __activityStartTime_isset = YES;
  __activityEndTime = activityEndTime;
  __activityEndTime_isset = YES;
  __activityDescription = [activityDescription retain_stub];
  __activityDescription_isset = YES;
  __activityPrize = [activityPrize retain_stub];
  __activityPrize_isset = YES;
  return self;
}

- (id) initWithCoder: (NSCoder *) decoder
{
  self = [super init];
  if ([decoder containsValueForKey: @"id"])
  {
    __id = [decoder decodeInt32ForKey: @"id"];
    __id_isset = YES;
  }
  if ([decoder containsValueForKey: @"name"])
  {
    __name = [[decoder decodeObjectForKey: @"name"] retain_stub];
    __name_isset = YES;
  }
  if ([decoder containsValueForKey: @"type"])
  {
    __type = [decoder decodeInt32ForKey: @"type"];
    __type_isset = YES;
  }
  if ([decoder containsValueForKey: @"iconUrl"])
  {
    __iconUrl = [[decoder decodeObjectForKey: @"iconUrl"] retain_stub];
    __iconUrl_isset = YES;
  }
  if ([decoder containsValueForKey: @"status"])
  {
    __status = [decoder decodeInt32ForKey: @"status"];
    __status_isset = YES;
  }
  if ([decoder containsValueForKey: @"sortNum"])
  {
    __sortNum = [decoder decodeInt32ForKey: @"sortNum"];
    __sortNum_isset = YES;
  }
  if ([decoder containsValueForKey: @"createTime"])
  {
    __createTime = [decoder decodeInt64ForKey: @"createTime"];
    __createTime_isset = YES;
  }
  if ([decoder containsValueForKey: @"hasRule"])
  {
    __hasRule = [decoder decodeInt32ForKey: @"hasRule"];
    __hasRule_isset = YES;
  }
  if ([decoder containsValueForKey: @"activityTheme"])
  {
    __activityTheme = [[decoder decodeObjectForKey: @"activityTheme"] retain_stub];
    __activityTheme_isset = YES;
  }
  if ([decoder containsValueForKey: @"activityStartTime"])
  {
    __activityStartTime = [decoder decodeInt64ForKey: @"activityStartTime"];
    __activityStartTime_isset = YES;
  }
  if ([decoder containsValueForKey: @"activityEndTime"])
  {
    __activityEndTime = [decoder decodeInt64ForKey: @"activityEndTime"];
    __activityEndTime_isset = YES;
  }
  if ([decoder containsValueForKey: @"activityDescription"])
  {
    __activityDescription = [[decoder decodeObjectForKey: @"activityDescription"] retain_stub];
    __activityDescription_isset = YES;
  }
  if ([decoder containsValueForKey: @"activityPrize"])
  {
    __activityPrize = [[decoder decodeObjectForKey: @"activityPrize"] retain_stub];
    __activityPrize_isset = YES;
  }
  return self;
}

- (void) encodeWithCoder: (NSCoder *) encoder
{
  if (__id_isset)
  {
    [encoder encodeInt32: __id forKey: @"id"];
  }
  if (__name_isset)
  {
    [encoder encodeObject: __name forKey: @"name"];
  }
  if (__type_isset)
  {
    [encoder encodeInt32: __type forKey: @"type"];
  }
  if (__iconUrl_isset)
  {
    [encoder encodeObject: __iconUrl forKey: @"iconUrl"];
  }
  if (__status_isset)
  {
    [encoder encodeInt32: __status forKey: @"status"];
  }
  if (__sortNum_isset)
  {
    [encoder encodeInt32: __sortNum forKey: @"sortNum"];
  }
  if (__createTime_isset)
  {
    [encoder encodeInt64: __createTime forKey: @"createTime"];
  }
  if (__hasRule_isset)
  {
    [encoder encodeInt32: __hasRule forKey: @"hasRule"];
  }
  if (__activityTheme_isset)
  {
    [encoder encodeObject: __activityTheme forKey: @"activityTheme"];
  }
  if (__activityStartTime_isset)
  {
    [encoder encodeInt64: __activityStartTime forKey: @"activityStartTime"];
  }
  if (__activityEndTime_isset)
  {
    [encoder encodeInt64: __activityEndTime forKey: @"activityEndTime"];
  }
  if (__activityDescription_isset)
  {
    [encoder encodeObject: __activityDescription forKey: @"activityDescription"];
  }
  if (__activityPrize_isset)
  {
    [encoder encodeObject: __activityPrize forKey: @"activityPrize"];
  }
}

- (void) dealloc
{
  [__name release_stub];
  [__iconUrl release_stub];
  [__activityTheme release_stub];
  [__activityDescription release_stub];
  [__activityPrize release_stub];
  [super dealloc_stub];
}

- (int32_t) id {
  return __id;
}

- (void) setId: (int32_t) id {
  __id = id;
  __id_isset = YES;
}

- (BOOL) idIsSet {
  return __id_isset;
}

- (void) unsetId {
  __id_isset = NO;
}

- (NSString *) name {
  return [[__name retain_stub] autorelease_stub];
}

- (void) setName: (NSString *) name {
  [name retain_stub];
  [__name release_stub];
  __name = name;
  __name_isset = YES;
}

- (BOOL) nameIsSet {
  return __name_isset;
}

- (void) unsetName {
  [__name release_stub];
  __name = nil;
  __name_isset = NO;
}

- (int32_t) type {
  return __type;
}

- (void) setType: (int32_t) type {
  __type = type;
  __type_isset = YES;
}

- (BOOL) typeIsSet {
  return __type_isset;
}

- (void) unsetType {
  __type_isset = NO;
}

- (NSString *) iconUrl {
  return [[__iconUrl retain_stub] autorelease_stub];
}

- (void) setIconUrl: (NSString *) iconUrl {
  [iconUrl retain_stub];
  [__iconUrl release_stub];
  __iconUrl = iconUrl;
  __iconUrl_isset = YES;
}

- (BOOL) iconUrlIsSet {
  return __iconUrl_isset;
}

- (void) unsetIconUrl {
  [__iconUrl release_stub];
  __iconUrl = nil;
  __iconUrl_isset = NO;
}

- (int32_t) status {
  return __status;
}

- (void) setStatus: (int32_t) status {
  __status = status;
  __status_isset = YES;
}

- (BOOL) statusIsSet {
  return __status_isset;
}

- (void) unsetStatus {
  __status_isset = NO;
}

- (int32_t) sortNum {
  return __sortNum;
}

- (void) setSortNum: (int32_t) sortNum {
  __sortNum = sortNum;
  __sortNum_isset = YES;
}

- (BOOL) sortNumIsSet {
  return __sortNum_isset;
}

- (void) unsetSortNum {
  __sortNum_isset = NO;
}

- (int64_t) createTime {
  return __createTime;
}

- (void) setCreateTime: (int64_t) createTime {
  __createTime = createTime;
  __createTime_isset = YES;
}

- (BOOL) createTimeIsSet {
  return __createTime_isset;
}

- (void) unsetCreateTime {
  __createTime_isset = NO;
}

- (int32_t) hasRule {
  return __hasRule;
}

- (void) setHasRule: (int32_t) hasRule {
  __hasRule = hasRule;
  __hasRule_isset = YES;
}

- (BOOL) hasRuleIsSet {
  return __hasRule_isset;
}

- (void) unsetHasRule {
  __hasRule_isset = NO;
}

- (NSString *) activityTheme {
  return [[__activityTheme retain_stub] autorelease_stub];
}

- (void) setActivityTheme: (NSString *) activityTheme {
  [activityTheme retain_stub];
  [__activityTheme release_stub];
  __activityTheme = activityTheme;
  __activityTheme_isset = YES;
}

- (BOOL) activityThemeIsSet {
  return __activityTheme_isset;
}

- (void) unsetActivityTheme {
  [__activityTheme release_stub];
  __activityTheme = nil;
  __activityTheme_isset = NO;
}

- (int64_t) activityStartTime {
  return __activityStartTime;
}

- (void) setActivityStartTime: (int64_t) activityStartTime {
  __activityStartTime = activityStartTime;
  __activityStartTime_isset = YES;
}

- (BOOL) activityStartTimeIsSet {
  return __activityStartTime_isset;
}

- (void) unsetActivityStartTime {
  __activityStartTime_isset = NO;
}

- (int64_t) activityEndTime {
  return __activityEndTime;
}

- (void) setActivityEndTime: (int64_t) activityEndTime {
  __activityEndTime = activityEndTime;
  __activityEndTime_isset = YES;
}

- (BOOL) activityEndTimeIsSet {
  return __activityEndTime_isset;
}

- (void) unsetActivityEndTime {
  __activityEndTime_isset = NO;
}

- (NSString *) activityDescription {
  return [[__activityDescription retain_stub] autorelease_stub];
}

- (void) setActivityDescription: (NSString *) activityDescription {
  [activityDescription retain_stub];
  [__activityDescription release_stub];
  __activityDescription = activityDescription;
  __activityDescription_isset = YES;
}

- (BOOL) activityDescriptionIsSet {
  return __activityDescription_isset;
}

- (void) unsetActivityDescription {
  [__activityDescription release_stub];
  __activityDescription = nil;
  __activityDescription_isset = NO;
}

- (NSString *) activityPrize {
  return [[__activityPrize retain_stub] autorelease_stub];
}

- (void) setActivityPrize: (NSString *) activityPrize {
  [activityPrize retain_stub];
  [__activityPrize release_stub];
  __activityPrize = activityPrize;
  __activityPrize_isset = YES;
}

- (BOOL) activityPrizeIsSet {
  return __activityPrize_isset;
}

- (void) unsetActivityPrize {
  [__activityPrize release_stub];
  __activityPrize = nil;
  __activityPrize_isset = NO;
}

- (void) read: (id <TProtocol>) inProtocol
{
  NSString * fieldName;
  int fieldType;
  int fieldID;

  [inProtocol readStructBeginReturningName: NULL];
  while (true)
  {
    [inProtocol readFieldBeginReturningName: &fieldName type: &fieldType fieldID: &fieldID];
    if (fieldType == TType_STOP) { 
      break;
    }
    switch (fieldID)
    {
      case 1:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setId: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 2:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setName: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 3:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setType: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 4:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setIconUrl: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 5:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setStatus: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 6:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setSortNum: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 7:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setCreateTime: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 8:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setHasRule: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 9:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setActivityTheme: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 10:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setActivityStartTime: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 11:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setActivityEndTime: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 12:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setActivityDescription: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 13:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setActivityPrize: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      default:
        [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        break;
    }
    [inProtocol readFieldEnd];
  }
  [inProtocol readStructEnd];
}

- (void) write: (id <TProtocol>) outProtocol {
  [outProtocol writeStructBeginWithName: @"TAdminLabel"];
  if (__id_isset) {
    [outProtocol writeFieldBeginWithName: @"id" type: TType_I32 fieldID: 1];
    [outProtocol writeI32: __id];
    [outProtocol writeFieldEnd];
  }
  if (__name_isset) {
    if (__name != nil) {
      [outProtocol writeFieldBeginWithName: @"name" type: TType_STRING fieldID: 2];
      [outProtocol writeString: __name];
      [outProtocol writeFieldEnd];
    }
  }
  if (__type_isset) {
    [outProtocol writeFieldBeginWithName: @"type" type: TType_I32 fieldID: 3];
    [outProtocol writeI32: __type];
    [outProtocol writeFieldEnd];
  }
  if (__iconUrl_isset) {
    if (__iconUrl != nil) {
      [outProtocol writeFieldBeginWithName: @"iconUrl" type: TType_STRING fieldID: 4];
      [outProtocol writeString: __iconUrl];
      [outProtocol writeFieldEnd];
    }
  }
  if (__status_isset) {
    [outProtocol writeFieldBeginWithName: @"status" type: TType_I32 fieldID: 5];
    [outProtocol writeI32: __status];
    [outProtocol writeFieldEnd];
  }
  if (__sortNum_isset) {
    [outProtocol writeFieldBeginWithName: @"sortNum" type: TType_I32 fieldID: 6];
    [outProtocol writeI32: __sortNum];
    [outProtocol writeFieldEnd];
  }
  if (__createTime_isset) {
    [outProtocol writeFieldBeginWithName: @"createTime" type: TType_I64 fieldID: 7];
    [outProtocol writeI64: __createTime];
    [outProtocol writeFieldEnd];
  }
  if (__hasRule_isset) {
    [outProtocol writeFieldBeginWithName: @"hasRule" type: TType_I32 fieldID: 8];
    [outProtocol writeI32: __hasRule];
    [outProtocol writeFieldEnd];
  }
  if (__activityTheme_isset) {
    if (__activityTheme != nil) {
      [outProtocol writeFieldBeginWithName: @"activityTheme" type: TType_STRING fieldID: 9];
      [outProtocol writeString: __activityTheme];
      [outProtocol writeFieldEnd];
    }
  }
  if (__activityStartTime_isset) {
    [outProtocol writeFieldBeginWithName: @"activityStartTime" type: TType_I64 fieldID: 10];
    [outProtocol writeI64: __activityStartTime];
    [outProtocol writeFieldEnd];
  }
  if (__activityEndTime_isset) {
    [outProtocol writeFieldBeginWithName: @"activityEndTime" type: TType_I64 fieldID: 11];
    [outProtocol writeI64: __activityEndTime];
    [outProtocol writeFieldEnd];
  }
  if (__activityDescription_isset) {
    if (__activityDescription != nil) {
      [outProtocol writeFieldBeginWithName: @"activityDescription" type: TType_STRING fieldID: 12];
      [outProtocol writeString: __activityDescription];
      [outProtocol writeFieldEnd];
    }
  }
  if (__activityPrize_isset) {
    if (__activityPrize != nil) {
      [outProtocol writeFieldBeginWithName: @"activityPrize" type: TType_STRING fieldID: 13];
      [outProtocol writeString: __activityPrize];
      [outProtocol writeFieldEnd];
    }
  }
  [outProtocol writeFieldStop];
  [outProtocol writeStructEnd];
}

- (void) validate {
  // check for required fields
}

- (NSString *) description {
  NSMutableString * ms = [NSMutableString stringWithString: @"TAdminLabel("];
  [ms appendString: @"id:"];
  [ms appendFormat: @"%i", __id];
  [ms appendString: @",name:"];
  [ms appendFormat: @"\"%@\"", __name];
  [ms appendString: @",type:"];
  [ms appendFormat: @"%i", __type];
  [ms appendString: @",iconUrl:"];
  [ms appendFormat: @"\"%@\"", __iconUrl];
  [ms appendString: @",status:"];
  [ms appendFormat: @"%i", __status];
  [ms appendString: @",sortNum:"];
  [ms appendFormat: @"%i", __sortNum];
  [ms appendString: @",createTime:"];
  [ms appendFormat: @"%qi", __createTime];
  [ms appendString: @",hasRule:"];
  [ms appendFormat: @"%i", __hasRule];
  [ms appendString: @",activityTheme:"];
  [ms appendFormat: @"\"%@\"", __activityTheme];
  [ms appendString: @",activityStartTime:"];
  [ms appendFormat: @"%qi", __activityStartTime];
  [ms appendString: @",activityEndTime:"];
  [ms appendFormat: @"%qi", __activityEndTime];
  [ms appendString: @",activityDescription:"];
  [ms appendFormat: @"\"%@\"", __activityDescription];
  [ms appendString: @",activityPrize:"];
  [ms appendFormat: @"\"%@\"", __activityPrize];
  [ms appendString: @")"];
  return [NSString stringWithString: ms];
}

@end


@implementation TAdminLabelConstants
+ (void) initialize {
}
@end

