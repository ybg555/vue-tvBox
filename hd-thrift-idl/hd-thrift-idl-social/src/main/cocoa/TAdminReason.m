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


#import "TAdminReason.h"

@implementation TAdminReason

- (id) init
{
  self = [super init];
#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
#endif
  return self;
}

- (id) initWithId: (int32_t) id type: (int32_t) type sortNum: (int32_t) sortNum content: (NSString *) content createTime: (int64_t) createTime
{
  self = [super init];
  __id = id;
  __id_isset = YES;
  __type = type;
  __type_isset = YES;
  __sortNum = sortNum;
  __sortNum_isset = YES;
  __content = [content retain_stub];
  __content_isset = YES;
  __createTime = createTime;
  __createTime_isset = YES;
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
  if ([decoder containsValueForKey: @"type"])
  {
    __type = [decoder decodeInt32ForKey: @"type"];
    __type_isset = YES;
  }
  if ([decoder containsValueForKey: @"sortNum"])
  {
    __sortNum = [decoder decodeInt32ForKey: @"sortNum"];
    __sortNum_isset = YES;
  }
  if ([decoder containsValueForKey: @"content"])
  {
    __content = [[decoder decodeObjectForKey: @"content"] retain_stub];
    __content_isset = YES;
  }
  if ([decoder containsValueForKey: @"createTime"])
  {
    __createTime = [decoder decodeInt64ForKey: @"createTime"];
    __createTime_isset = YES;
  }
  return self;
}

- (void) encodeWithCoder: (NSCoder *) encoder
{
  if (__id_isset)
  {
    [encoder encodeInt32: __id forKey: @"id"];
  }
  if (__type_isset)
  {
    [encoder encodeInt32: __type forKey: @"type"];
  }
  if (__sortNum_isset)
  {
    [encoder encodeInt32: __sortNum forKey: @"sortNum"];
  }
  if (__content_isset)
  {
    [encoder encodeObject: __content forKey: @"content"];
  }
  if (__createTime_isset)
  {
    [encoder encodeInt64: __createTime forKey: @"createTime"];
  }
}

- (void) dealloc
{
  [__content release_stub];
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

- (NSString *) content {
  return [[__content retain_stub] autorelease_stub];
}

- (void) setContent: (NSString *) content {
  [content retain_stub];
  [__content release_stub];
  __content = content;
  __content_isset = YES;
}

- (BOOL) contentIsSet {
  return __content_isset;
}

- (void) unsetContent {
  [__content release_stub];
  __content = nil;
  __content_isset = NO;
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
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setType: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 3:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setSortNum: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 4:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setContent: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 5:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setCreateTime: fieldValue];
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
  [outProtocol writeStructBeginWithName: @"TAdminReason"];
  if (__id_isset) {
    [outProtocol writeFieldBeginWithName: @"id" type: TType_I32 fieldID: 1];
    [outProtocol writeI32: __id];
    [outProtocol writeFieldEnd];
  }
  if (__type_isset) {
    [outProtocol writeFieldBeginWithName: @"type" type: TType_I32 fieldID: 2];
    [outProtocol writeI32: __type];
    [outProtocol writeFieldEnd];
  }
  if (__sortNum_isset) {
    [outProtocol writeFieldBeginWithName: @"sortNum" type: TType_I32 fieldID: 3];
    [outProtocol writeI32: __sortNum];
    [outProtocol writeFieldEnd];
  }
  if (__content_isset) {
    if (__content != nil) {
      [outProtocol writeFieldBeginWithName: @"content" type: TType_STRING fieldID: 4];
      [outProtocol writeString: __content];
      [outProtocol writeFieldEnd];
    }
  }
  if (__createTime_isset) {
    [outProtocol writeFieldBeginWithName: @"createTime" type: TType_I64 fieldID: 5];
    [outProtocol writeI64: __createTime];
    [outProtocol writeFieldEnd];
  }
  [outProtocol writeFieldStop];
  [outProtocol writeStructEnd];
}

- (void) validate {
  // check for required fields
}

- (NSString *) description {
  NSMutableString * ms = [NSMutableString stringWithString: @"TAdminReason("];
  [ms appendString: @"id:"];
  [ms appendFormat: @"%i", __id];
  [ms appendString: @",type:"];
  [ms appendFormat: @"%i", __type];
  [ms appendString: @",sortNum:"];
  [ms appendFormat: @"%i", __sortNum];
  [ms appendString: @",content:"];
  [ms appendFormat: @"\"%@\"", __content];
  [ms appendString: @",createTime:"];
  [ms appendFormat: @"%qi", __createTime];
  [ms appendString: @")"];
  return [NSString stringWithString: ms];
}

@end


@implementation TAdminReasonConstants
+ (void) initialize {
}
@end
