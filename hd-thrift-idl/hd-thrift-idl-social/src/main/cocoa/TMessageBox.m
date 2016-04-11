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


#import "TMessageBox.h"

@implementation TMessageBox

- (id) init
{
  self = [super init];
#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
#endif
  return self;
}

- (id) initWithId: (int32_t) id type: (int32_t) type postId: (int32_t) postId postImageUrl: (NSString *) postImageUrl postContent: (NSString *) postContent userId: (int64_t) userId nickName: (NSString *) nickName avatarUrl: (NSString *) avatarUrl toUserId: (int64_t) toUserId status: (int32_t) status createTime: (int64_t) createTime content: (NSString *) content
{
  self = [super init];
  __id = id;
  __id_isset = YES;
  __type = type;
  __type_isset = YES;
  __postId = postId;
  __postId_isset = YES;
  __postImageUrl = [postImageUrl retain_stub];
  __postImageUrl_isset = YES;
  __postContent = [postContent retain_stub];
  __postContent_isset = YES;
  __userId = userId;
  __userId_isset = YES;
  __nickName = [nickName retain_stub];
  __nickName_isset = YES;
  __avatarUrl = [avatarUrl retain_stub];
  __avatarUrl_isset = YES;
  __toUserId = toUserId;
  __toUserId_isset = YES;
  __status = status;
  __status_isset = YES;
  __createTime = createTime;
  __createTime_isset = YES;
  __content = [content retain_stub];
  __content_isset = YES;
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
  if ([decoder containsValueForKey: @"postId"])
  {
    __postId = [decoder decodeInt32ForKey: @"postId"];
    __postId_isset = YES;
  }
  if ([decoder containsValueForKey: @"postImageUrl"])
  {
    __postImageUrl = [[decoder decodeObjectForKey: @"postImageUrl"] retain_stub];
    __postImageUrl_isset = YES;
  }
  if ([decoder containsValueForKey: @"postContent"])
  {
    __postContent = [[decoder decodeObjectForKey: @"postContent"] retain_stub];
    __postContent_isset = YES;
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
  if ([decoder containsValueForKey: @"toUserId"])
  {
    __toUserId = [decoder decodeInt64ForKey: @"toUserId"];
    __toUserId_isset = YES;
  }
  if ([decoder containsValueForKey: @"status"])
  {
    __status = [decoder decodeInt32ForKey: @"status"];
    __status_isset = YES;
  }
  if ([decoder containsValueForKey: @"createTime"])
  {
    __createTime = [decoder decodeInt64ForKey: @"createTime"];
    __createTime_isset = YES;
  }
  if ([decoder containsValueForKey: @"content"])
  {
    __content = [[decoder decodeObjectForKey: @"content"] retain_stub];
    __content_isset = YES;
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
  if (__postId_isset)
  {
    [encoder encodeInt32: __postId forKey: @"postId"];
  }
  if (__postImageUrl_isset)
  {
    [encoder encodeObject: __postImageUrl forKey: @"postImageUrl"];
  }
  if (__postContent_isset)
  {
    [encoder encodeObject: __postContent forKey: @"postContent"];
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
  if (__toUserId_isset)
  {
    [encoder encodeInt64: __toUserId forKey: @"toUserId"];
  }
  if (__status_isset)
  {
    [encoder encodeInt32: __status forKey: @"status"];
  }
  if (__createTime_isset)
  {
    [encoder encodeInt64: __createTime forKey: @"createTime"];
  }
  if (__content_isset)
  {
    [encoder encodeObject: __content forKey: @"content"];
  }
}

- (void) dealloc
{
  [__postImageUrl release_stub];
  [__postContent release_stub];
  [__nickName release_stub];
  [__avatarUrl release_stub];
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

- (NSString *) postImageUrl {
  return [[__postImageUrl retain_stub] autorelease_stub];
}

- (void) setPostImageUrl: (NSString *) postImageUrl {
  [postImageUrl retain_stub];
  [__postImageUrl release_stub];
  __postImageUrl = postImageUrl;
  __postImageUrl_isset = YES;
}

- (BOOL) postImageUrlIsSet {
  return __postImageUrl_isset;
}

- (void) unsetPostImageUrl {
  [__postImageUrl release_stub];
  __postImageUrl = nil;
  __postImageUrl_isset = NO;
}

- (NSString *) postContent {
  return [[__postContent retain_stub] autorelease_stub];
}

- (void) setPostContent: (NSString *) postContent {
  [postContent retain_stub];
  [__postContent release_stub];
  __postContent = postContent;
  __postContent_isset = YES;
}

- (BOOL) postContentIsSet {
  return __postContent_isset;
}

- (void) unsetPostContent {
  [__postContent release_stub];
  __postContent = nil;
  __postContent_isset = NO;
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
          [self setPostId: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 4:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setPostImageUrl: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 5:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setPostContent: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 6:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setUserId: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 7:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setNickName: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 8:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setAvatarUrl: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 9:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setToUserId: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 10:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setStatus: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 11:
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setCreateTime: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 12:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setContent: fieldValue];
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
  [outProtocol writeStructBeginWithName: @"TMessageBox"];
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
  if (__postId_isset) {
    [outProtocol writeFieldBeginWithName: @"postId" type: TType_I32 fieldID: 3];
    [outProtocol writeI32: __postId];
    [outProtocol writeFieldEnd];
  }
  if (__postImageUrl_isset) {
    if (__postImageUrl != nil) {
      [outProtocol writeFieldBeginWithName: @"postImageUrl" type: TType_STRING fieldID: 4];
      [outProtocol writeString: __postImageUrl];
      [outProtocol writeFieldEnd];
    }
  }
  if (__postContent_isset) {
    if (__postContent != nil) {
      [outProtocol writeFieldBeginWithName: @"postContent" type: TType_STRING fieldID: 5];
      [outProtocol writeString: __postContent];
      [outProtocol writeFieldEnd];
    }
  }
  if (__userId_isset) {
    [outProtocol writeFieldBeginWithName: @"userId" type: TType_I64 fieldID: 6];
    [outProtocol writeI64: __userId];
    [outProtocol writeFieldEnd];
  }
  if (__nickName_isset) {
    if (__nickName != nil) {
      [outProtocol writeFieldBeginWithName: @"nickName" type: TType_STRING fieldID: 7];
      [outProtocol writeString: __nickName];
      [outProtocol writeFieldEnd];
    }
  }
  if (__avatarUrl_isset) {
    if (__avatarUrl != nil) {
      [outProtocol writeFieldBeginWithName: @"avatarUrl" type: TType_STRING fieldID: 8];
      [outProtocol writeString: __avatarUrl];
      [outProtocol writeFieldEnd];
    }
  }
  if (__toUserId_isset) {
    [outProtocol writeFieldBeginWithName: @"toUserId" type: TType_I64 fieldID: 9];
    [outProtocol writeI64: __toUserId];
    [outProtocol writeFieldEnd];
  }
  if (__status_isset) {
    [outProtocol writeFieldBeginWithName: @"status" type: TType_I32 fieldID: 10];
    [outProtocol writeI32: __status];
    [outProtocol writeFieldEnd];
  }
  if (__createTime_isset) {
    [outProtocol writeFieldBeginWithName: @"createTime" type: TType_I64 fieldID: 11];
    [outProtocol writeI64: __createTime];
    [outProtocol writeFieldEnd];
  }
  if (__content_isset) {
    if (__content != nil) {
      [outProtocol writeFieldBeginWithName: @"content" type: TType_STRING fieldID: 12];
      [outProtocol writeString: __content];
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
  NSMutableString * ms = [NSMutableString stringWithString: @"TMessageBox("];
  [ms appendString: @"id:"];
  [ms appendFormat: @"%i", __id];
  [ms appendString: @",type:"];
  [ms appendFormat: @"%i", __type];
  [ms appendString: @",postId:"];
  [ms appendFormat: @"%i", __postId];
  [ms appendString: @",postImageUrl:"];
  [ms appendFormat: @"\"%@\"", __postImageUrl];
  [ms appendString: @",postContent:"];
  [ms appendFormat: @"\"%@\"", __postContent];
  [ms appendString: @",userId:"];
  [ms appendFormat: @"%qi", __userId];
  [ms appendString: @",nickName:"];
  [ms appendFormat: @"\"%@\"", __nickName];
  [ms appendString: @",avatarUrl:"];
  [ms appendFormat: @"\"%@\"", __avatarUrl];
  [ms appendString: @",toUserId:"];
  [ms appendFormat: @"%qi", __toUserId];
  [ms appendString: @",status:"];
  [ms appendFormat: @"%i", __status];
  [ms appendString: @",createTime:"];
  [ms appendFormat: @"%qi", __createTime];
  [ms appendString: @",content:"];
  [ms appendFormat: @"\"%@\"", __content];
  [ms appendString: @")"];
  return [NSString stringWithString: ms];
}

@end


@implementation TMessageBoxConstants
+ (void) initialize {
}
@end

