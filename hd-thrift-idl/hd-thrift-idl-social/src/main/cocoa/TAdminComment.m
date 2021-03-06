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


#import "TAdminComment.h"

@implementation TAdminComment

- (id) init
{
  self = [super init];
#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
#endif
  return self;
}

- (id) initWithId: (int32_t) id postId: (int32_t) postId userId: (int64_t) userId nickName: (NSString *) nickName avatarUrl: (NSString *) avatarUrl pid: (int32_t) pid status: (int32_t) status content: (NSString *) content createTime: (int64_t) createTime mobile: (NSString *) mobile toNickName: (NSString *) toNickName toMobile: (NSString *) toMobile toUserId: (int64_t) toUserId
{
  self = [super init];
  __id = id;
  __id_isset = YES;
  __postId = postId;
  __postId_isset = YES;
  __userId = userId;
  __userId_isset = YES;
  __nickName = [nickName retain_stub];
  __nickName_isset = YES;
  __avatarUrl = [avatarUrl retain_stub];
  __avatarUrl_isset = YES;
  __pid = pid;
  __pid_isset = YES;
  __status = status;
  __status_isset = YES;
  __content = [content retain_stub];
  __content_isset = YES;
  __createTime = createTime;
  __createTime_isset = YES;
  __mobile = [mobile retain_stub];
  __mobile_isset = YES;
  __toNickName = [toNickName retain_stub];
  __toNickName_isset = YES;
  __toMobile = [toMobile retain_stub];
  __toMobile_isset = YES;
  __toUserId = toUserId;
  __toUserId_isset = YES;
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
  if ([decoder containsValueForKey: @"postId"])
  {
    __postId = [decoder decodeInt32ForKey: @"postId"];
    __postId_isset = YES;
  }
  if ([decoder containsValueForKey: @"userId"])
  {
    __userId = [decoder decodeInt64ForKey: @"userId"];
    __userId_isset = YES;
  }
  if ([decoder containsValueForKey: @"nickName"])
  {
    __nickName = [[decoder decodeObjectForKey: @"nickName"] retain_stub];
    __nickName_isset = YES;
  }
  if ([decoder containsValueForKey: @"avatarUrl"])
  {
    __avatarUrl = [[decoder decodeObjectForKey: @"avatarUrl"] retain_stub];
    __avatarUrl_isset = YES;
  }
  if ([decoder containsValueForKey: @"pid"])
  {
    __pid = [decoder decodeInt32ForKey: @"pid"];
    __pid_isset = YES;
  }
  if ([decoder containsValueForKey: @"status"])
  {
    __status = [decoder decodeInt32ForKey: @"status"];
    __status_isset = YES;
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
  if ([decoder containsValueForKey: @"mobile"])
  {
    __mobile = [[decoder decodeObjectForKey: @"mobile"] retain_stub];
    __mobile_isset = YES;
  }
  if ([decoder containsValueForKey: @"toNickName"])
  {
    __toNickName = [[decoder decodeObjectForKey: @"toNickName"] retain_stub];
    __toNickName_isset = YES;
  }
  if ([decoder containsValueForKey: @"toMobile"])
  {
    __toMobile = [[decoder decodeObjectForKey: @"toMobile"] retain_stub];
    __toMobile_isset = YES;
  }
  if ([decoder containsValueForKey: @"toUserId"])
  {
    __toUserId = [decoder decodeInt64ForKey: @"toUserId"];
    __toUserId_isset = YES;
  }
  return self;
}

- (void) encodeWithCoder: (NSCoder *) encoder
{
  if (__id_isset)
  {
    [encoder encodeInt32: __id forKey: @"id"];
  }
  if (__postId_isset)
  {
    [encoder encodeInt32: __postId forKey: @"postId"];
  }
  if (__userId_isset)
  {
    [encoder encodeInt64: __userId forKey: @"userId"];
  }
  if (__nickName_isset)
  {
    [encoder encodeObject: __nickName forKey: @"nickName"];
  }
  if (__avatarUrl_isset)
  {
    [encoder encodeObject: __avatarUrl forKey: @"avatarUrl"];
  }
  if (__pid_isset)
  {
    [encoder encodeInt32: __pid forKey: @"pid"];
  }
  if (__status_isset)
  {
    [encoder encodeInt32: __status forKey: @"status"];
  }
  if (__content_isset)
  {
    [encoder encodeObject: __content forKey: @"content"];
  }
  if (__createTime_isset)
  {
    [encoder encodeInt64: __createTime forKey: @"createTime"];
  }
  if (__mobile_isset)
  {
    [encoder encodeObject: __mobile forKey: @"mobile"];
  }
  if (__toNickName_isset)
  {
    [encoder encodeObject: __toNickName forKey: @"toNickName"];
  }
  if (__toMobile_isset)
  {
    [encoder encodeObject: __toMobile forKey: @"toMobile"];
  }
  if (__toUserId_isset)
  {
    [encoder encodeInt64: __toUserId forKey: @"toUserId"];
  }
}

- (void) dealloc
{
  [__nickName release_stub];
  [__avatarUrl release_stub];
  [__content release_stub];
  [__mobile release_stub];
  [__toNickName release_stub];
  [__toMobile release_stub];
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

- (int32_t) postId {
  return __postId;
}

- (void) setPostId: (int32_t) postId {
  __postId = postId;
  __postId_isset = YES;
}

- (BOOL) postIdIsSet {
  return __postId_isset;
}

- (void) unsetPostId {
  __postId_isset = NO;
}

- (int64_t) userId {
  return __userId;
}

- (void) setUserId: (int64_t) userId {
  __userId = userId;
  __userId_isset = YES;
}

- (BOOL) userIdIsSet {
  return __userId_isset;
}

- (void) unsetUserId {
  __userId_isset = NO;
}

- (NSString *) nickName {
  return [[__nickName retain_stub] autorelease_stub];
}

- (void) setNickName: (NSString *) nickName {
  [nickName retain_stub];
  [__nickName release_stub];
  __nickName = nickName;
  __nickName_isset = YES;
}

- (BOOL) nickNameIsSet {
  return __nickName_isset;
}

- (void) unsetNickName {
  [__nickName release_stub];
  __nickName = nil;
  __nickName_isset = NO;
}

- (NSString *) avatarUrl {
  return [[__avatarUrl retain_stub] autorelease_stub];
}

- (void) setAvatarUrl: (NSString *) avatarUrl {
  [avatarUrl retain_stub];
  [__avatarUrl release_stub];
  __avatarUrl = avatarUrl;
  __avatarUrl_isset = YES;
}

- (BOOL) avatarUrlIsSet {
  return __avatarUrl_isset;
}

- (void) unsetAvatarUrl {
  [__avatarUrl release_stub];
  __avatarUrl = nil;
  __avatarUrl_isset = NO;
}

- (int32_t) pid {
  return __pid;
}

- (void) setPid: (int32_t) pid {
  __pid = pid;
  __pid_isset = YES;
}

- (BOOL) pidIsSet {
  return __pid_isset;
}

- (void) unsetPid {
  __pid_isset = NO;
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

- (NSString *) mobile {
  return [[__mobile retain_stub] autorelease_stub];
}

- (void) setMobile: (NSString *) mobile {
  [mobile retain_stub];
  [__mobile release_stub];
  __mobile = mobile;
  __mobile_isset = YES;
}

- (BOOL) mobileIsSet {
  return __mobile_isset;
}

- (void) unsetMobile {
  [__mobile release_stub];
  __mobile = nil;
  __mobile_isset = NO;
}

- (NSString *) toNickName {
  return [[__toNickName retain_stub] autorelease_stub];
}

- (void) setToNickName: (NSString *) toNickName {
  [toNickName retain_stub];
  [__toNickName release_stub];
  __toNickName = toNickName;
  __toNickName_isset = YES;
}

- (BOOL) toNickNameIsSet {
  return __toNickName_isset;
}

- (void) unsetToNickName {
  [__toNickName release_stub];
  __toNickName = nil;
  __toNickName_isset = NO;
}

- (NSString *) toMobile {
  return [[__toMobile retain_stub] autorelease_stub];
}

- (void) setToMobile: (NSString *) toMobile {
  [toMobile retain_stub];
  [__toMobile release_stub];
  __toMobile = toMobile;
  __toMobile_isset = YES;
}

- (BOOL) toMobileIsSet {
  return __toMobile_isset;
}

- (void) unsetToMobile {
  [__toMobile release_stub];
  __toMobile = nil;
  __toMobile_isset = NO;
}

- (int64_t) toUserId {
  return __toUserId;
}

- (void) setToUserId: (int64_t) toUserId {
  __toUserId = toUserId;
  __toUserId_isset = YES;
}

- (BOOL) toUserIdIsSet {
  return __toUserId_isset;
}

- (void) unsetToUserId {
  __toUserId_isset = NO;
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
          [self setPostId: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 3:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setUserId: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 4:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setNickName: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 5:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setAvatarUrl: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 6:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setPid: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 7:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setStatus: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 8:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setContent: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 9:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setCreateTime: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 10:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setMobile: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 11:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setToNickName: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 12:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setToMobile: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 13:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setToUserId: fieldValue];
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
  [outProtocol writeStructBeginWithName: @"TAdminComment"];
  if (__id_isset) {
    [outProtocol writeFieldBeginWithName: @"id" type: TType_I32 fieldID: 1];
    [outProtocol writeI32: __id];
    [outProtocol writeFieldEnd];
  }
  if (__postId_isset) {
    [outProtocol writeFieldBeginWithName: @"postId" type: TType_I32 fieldID: 2];
    [outProtocol writeI32: __postId];
    [outProtocol writeFieldEnd];
  }
  if (__userId_isset) {
    [outProtocol writeFieldBeginWithName: @"userId" type: TType_I64 fieldID: 3];
    [outProtocol writeI64: __userId];
    [outProtocol writeFieldEnd];
  }
  if (__nickName_isset) {
    if (__nickName != nil) {
      [outProtocol writeFieldBeginWithName: @"nickName" type: TType_STRING fieldID: 4];
      [outProtocol writeString: __nickName];
      [outProtocol writeFieldEnd];
    }
  }
  if (__avatarUrl_isset) {
    if (__avatarUrl != nil) {
      [outProtocol writeFieldBeginWithName: @"avatarUrl" type: TType_STRING fieldID: 5];
      [outProtocol writeString: __avatarUrl];
      [outProtocol writeFieldEnd];
    }
  }
  if (__pid_isset) {
    [outProtocol writeFieldBeginWithName: @"pid" type: TType_I32 fieldID: 6];
    [outProtocol writeI32: __pid];
    [outProtocol writeFieldEnd];
  }
  if (__status_isset) {
    [outProtocol writeFieldBeginWithName: @"status" type: TType_I32 fieldID: 7];
    [outProtocol writeI32: __status];
    [outProtocol writeFieldEnd];
  }
  if (__content_isset) {
    if (__content != nil) {
      [outProtocol writeFieldBeginWithName: @"content" type: TType_STRING fieldID: 8];
      [outProtocol writeString: __content];
      [outProtocol writeFieldEnd];
    }
  }
  if (__createTime_isset) {
    [outProtocol writeFieldBeginWithName: @"createTime" type: TType_I64 fieldID: 9];
    [outProtocol writeI64: __createTime];
    [outProtocol writeFieldEnd];
  }
  if (__mobile_isset) {
    if (__mobile != nil) {
      [outProtocol writeFieldBeginWithName: @"mobile" type: TType_STRING fieldID: 10];
      [outProtocol writeString: __mobile];
      [outProtocol writeFieldEnd];
    }
  }
  if (__toNickName_isset) {
    if (__toNickName != nil) {
      [outProtocol writeFieldBeginWithName: @"toNickName" type: TType_STRING fieldID: 11];
      [outProtocol writeString: __toNickName];
      [outProtocol writeFieldEnd];
    }
  }
  if (__toMobile_isset) {
    if (__toMobile != nil) {
      [outProtocol writeFieldBeginWithName: @"toMobile" type: TType_STRING fieldID: 12];
      [outProtocol writeString: __toMobile];
      [outProtocol writeFieldEnd];
    }
  }
  if (__toUserId_isset) {
    [outProtocol writeFieldBeginWithName: @"toUserId" type: TType_I64 fieldID: 13];
    [outProtocol writeI64: __toUserId];
    [outProtocol writeFieldEnd];
  }
  [outProtocol writeFieldStop];
  [outProtocol writeStructEnd];
}

- (void) validate {
  // check for required fields
}

- (NSString *) description {
  NSMutableString * ms = [NSMutableString stringWithString: @"TAdminComment("];
  [ms appendString: @"id:"];
  [ms appendFormat: @"%i", __id];
  [ms appendString: @",postId:"];
  [ms appendFormat: @"%i", __postId];
  [ms appendString: @",userId:"];
  [ms appendFormat: @"%qi", __userId];
  [ms appendString: @",nickName:"];
  [ms appendFormat: @"\"%@\"", __nickName];
  [ms appendString: @",avatarUrl:"];
  [ms appendFormat: @"\"%@\"", __avatarUrl];
  [ms appendString: @",pid:"];
  [ms appendFormat: @"%i", __pid];
  [ms appendString: @",status:"];
  [ms appendFormat: @"%i", __status];
  [ms appendString: @",content:"];
  [ms appendFormat: @"\"%@\"", __content];
  [ms appendString: @",createTime:"];
  [ms appendFormat: @"%qi", __createTime];
  [ms appendString: @",mobile:"];
  [ms appendFormat: @"\"%@\"", __mobile];
  [ms appendString: @",toNickName:"];
  [ms appendFormat: @"\"%@\"", __toNickName];
  [ms appendString: @",toMobile:"];
  [ms appendFormat: @"\"%@\"", __toMobile];
  [ms appendString: @",toUserId:"];
  [ms appendFormat: @"%qi", __toUserId];
  [ms appendString: @")"];
  return [NSString stringWithString: ms];
}

@end


@implementation TAdminCommentConstants
+ (void) initialize {
}
@end

