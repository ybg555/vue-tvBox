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


#import "SocialBlacklistService.h"


@implementation SocialBlacklistServiceConstants
+ (void) initialize {
}
@end

@interface addSocialBlacklist_args : NSObject <TBase, NSCoding> {
  int64_t __blackUserId;

  BOOL __blackUserId_isset;
}

#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
@property (nonatomic, getter=blackUserId, setter=setBlackUserId:) int64_t blackUserId;
#endif

- (id) init;
- (id) initWithBlackUserId: (int64_t) blackUserId;

- (void) read: (id <TProtocol>) inProtocol;
- (void) write: (id <TProtocol>) outProtocol;

- (void) validate;

#if !__has_feature(objc_arc)
- (int64_t) blackUserId;
- (void) setBlackUserId: (int64_t) blackUserId;
#endif
- (BOOL) blackUserIdIsSet;

@end

@implementation addSocialBlacklist_args

- (id) init
{
  self = [super init];
#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
#endif
  return self;
}

- (id) initWithBlackUserId: (int64_t) blackUserId
{
  self = [super init];
  __blackUserId = blackUserId;
  __blackUserId_isset = YES;
  return self;
}

- (id) initWithCoder: (NSCoder *) decoder
{
  self = [super init];
  if ([decoder containsValueForKey: @"blackUserId"])
  {
    __blackUserId = [decoder decodeInt64ForKey: @"blackUserId"];
    __blackUserId_isset = YES;
  }
  return self;
}

- (void) encodeWithCoder: (NSCoder *) encoder
{
  if (__blackUserId_isset)
  {
    [encoder encodeInt64: __blackUserId forKey: @"blackUserId"];
  }
}

- (void) dealloc
{
  [super dealloc_stub];
}

- (int64_t) blackUserId {
  return __blackUserId;
}

- (void) setBlackUserId: (int64_t) blackUserId {
  __blackUserId = blackUserId;
  __blackUserId_isset = YES;
}

- (BOOL) blackUserIdIsSet {
  return __blackUserId_isset;
}

- (void) unsetBlackUserId {
  __blackUserId_isset = NO;
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
        if (fieldType == TType_I64) {
          int64_t fieldValue = [inProtocol readI64];
          [self setBlackUserId: fieldValue];
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
  [outProtocol writeStructBeginWithName: @"addSocialBlacklist_args"];
  if (__blackUserId_isset) {
    [outProtocol writeFieldBeginWithName: @"blackUserId" type: TType_I64 fieldID: 1];
    [outProtocol writeI64: __blackUserId];
    [outProtocol writeFieldEnd];
  }
  [outProtocol writeFieldStop];
  [outProtocol writeStructEnd];
}

- (void) validate {
  // check for required fields
}

- (NSString *) description {
  NSMutableString * ms = [NSMutableString stringWithString: @"addSocialBlacklist_args("];
  [ms appendString: @"blackUserId:"];
  [ms appendFormat: @"%qi", __blackUserId];
  [ms appendString: @")"];
  return [NSString stringWithString: ms];
}

@end

@interface AddSocialBlacklist_result : NSObject <TBase, NSCoding> {
  NSString * __success;

  BOOL __success_isset;
}

#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
@property (nonatomic, retain, getter=success, setter=setSuccess:) NSString * success;
#endif

- (id) init;
- (id) initWithSuccess: (NSString *) success;

- (void) read: (id <TProtocol>) inProtocol;
- (void) write: (id <TProtocol>) outProtocol;

- (void) validate;

#if !__has_feature(objc_arc)
- (NSString *) success;
- (void) setSuccess: (NSString *) success;
#endif
- (BOOL) successIsSet;

@end

@implementation AddSocialBlacklist_result

- (id) init
{
  self = [super init];
#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
#endif
  return self;
}

- (id) initWithSuccess: (NSString *) success
{
  self = [super init];
  __success = [success retain_stub];
  __success_isset = YES;
  return self;
}

- (id) initWithCoder: (NSCoder *) decoder
{
  self = [super init];
  if ([decoder containsValueForKey: @"success"])
  {
    __success = [[decoder decodeObjectForKey: @"success"] retain_stub];
    __success_isset = YES;
  }
  return self;
}

- (void) encodeWithCoder: (NSCoder *) encoder
{
  if (__success_isset)
  {
    [encoder encodeObject: __success forKey: @"success"];
  }
}

- (void) dealloc
{
  [__success release_stub];
  [super dealloc_stub];
}

- (NSString *) success {
  return [[__success retain_stub] autorelease_stub];
}

- (void) setSuccess: (NSString *) success {
  [success retain_stub];
  [__success release_stub];
  __success = success;
  __success_isset = YES;
}

- (BOOL) successIsSet {
  return __success_isset;
}

- (void) unsetSuccess {
  [__success release_stub];
  __success = nil;
  __success_isset = NO;
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
      case 0:
        if (fieldType == TType_STRING) {
          NSString * fieldValue = [inProtocol readString];
          [self setSuccess: fieldValue];
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
  [outProtocol writeStructBeginWithName: @"AddSocialBlacklist_result"];

  if (__success_isset) {
    if (__success != nil) {
      [outProtocol writeFieldBeginWithName: @"success" type: TType_STRING fieldID: 0];
      [outProtocol writeString: __success];
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
  NSMutableString * ms = [NSMutableString stringWithString: @"AddSocialBlacklist_result("];
  [ms appendString: @"success:"];
  [ms appendFormat: @"\"%@\"", __success];
  [ms appendString: @")"];
  return [NSString stringWithString: ms];
}

@end

@implementation ISocialServiceAddSocialBlacklistClient
- (id) initWithProtocol: (id <TProtocol>) protocol
{
  return [self initWithInProtocol: protocol outProtocol: protocol];
}

- (id) initWithInProtocol: (id <TProtocol>) anInProtocol outProtocol: (id <TProtocol>) anOutProtocol
{
  self = [super init];
  inProtocol = [anInProtocol retain_stub];
  outProtocol = [anOutProtocol retain_stub];
  return self;
}

- (void) dealloc
{
  [inProtocol release_stub];
  [outProtocol release_stub];
  [super dealloc_stub];
}

- (void) send_addSocialBlacklist: (int64_t) blackUserId
{
  [outProtocol writeMessageBeginWithName: @"addSocialBlacklist" type: TMessageType_CALL sequenceID: 0];
  [outProtocol writeStructBeginWithName: @"addSocialBlacklist_args"];
  [outProtocol writeFieldBeginWithName: @"blackUserId" type: TType_I64 fieldID: 1];
  [outProtocol writeI64: blackUserId];
  [outProtocol writeFieldEnd];
  [outProtocol writeFieldStop];
  [outProtocol writeStructEnd];
  [outProtocol writeMessageEnd];
  [[outProtocol transport] flush];
}

- (NSString *) recv_addSocialBlacklist
{
  int msgType = 0;
  [inProtocol readMessageBeginReturningName: nil type: &msgType sequenceID: NULL];
  if (msgType == TMessageType_EXCEPTION) {
    TApplicationException * x = [TApplicationException read: inProtocol];
    [inProtocol readMessageEnd];
    @throw x;
  }
  AddSocialBlacklist_result * result = [[[AddSocialBlacklist_result alloc] init] autorelease_stub];
  [result read: inProtocol];
  [inProtocol readMessageEnd];
  if ([result successIsSet]) {
    return [result success];
  }
  @throw [TApplicationException exceptionWithType: TApplicationException_MISSING_RESULT
                                           reason: @"addSocialBlacklist failed: unknown result"];
}

- (NSString *) addSocialBlacklist: (int64_t) blackUserId
{
  [self send_addSocialBlacklist : blackUserId];
  return [self recv_addSocialBlacklist];
}

@end

@implementation ISocialServiceAddSocialBlacklistProcessor

- (id) initWithISocialServiceAddSocialBlacklist: (id <ISocialServiceAddSocialBlacklist>) service
{
  self = [super init];
  if (!self) {
    return nil;
  }
  mService = [service retain_stub];
  mMethodMap = [[NSMutableDictionary dictionary] retain_stub];
  {
    SEL s = @selector(process_addSocialBlacklist_withSequenceID:inProtocol:outProtocol:);
    NSMethodSignature * sig = [self methodSignatureForSelector: s];
    NSInvocation * invocation = [NSInvocation invocationWithMethodSignature: sig];
    [invocation setSelector: s];
    [invocation retainArguments];
    [mMethodMap setValue: invocation forKey: @"addSocialBlacklist"];
  }
  return self;
}

- (id<ISocialServiceAddSocialBlacklist>) service
{
  return [[mService retain_stub] autorelease_stub];
}

- (BOOL) processOnInputProtocol: (id <TProtocol>) inProtocol
                 outputProtocol: (id <TProtocol>) outProtocol
{
  NSString * messageName;
  int messageType;
  int seqID;
  [inProtocol readMessageBeginReturningName: &messageName
                                       type: &messageType
                                 sequenceID: &seqID];
  NSInvocation * invocation = [mMethodMap valueForKey: messageName];
  if (invocation == nil) {
    [TProtocolUtil skipType: TType_STRUCT onProtocol: inProtocol];
    [inProtocol readMessageEnd];
    TApplicationException * x = [TApplicationException exceptionWithType: TApplicationException_UNKNOWN_METHOD reason: [NSString stringWithFormat: @"Invalid method name: '%@'", messageName]];
    [outProtocol writeMessageBeginWithName: messageName
                                      type: TMessageType_EXCEPTION
                                sequenceID: seqID];
    [x write: outProtocol];
    [outProtocol writeMessageEnd];
    [[outProtocol transport] flush];
    return YES;
  }
  // NSInvocation does not conform to NSCopying protocol
  NSInvocation * i = [NSInvocation invocationWithMethodSignature: [invocation methodSignature]];
  [i setSelector: [invocation selector]];
  [i setArgument: &seqID atIndex: 2];
  [i setArgument: &inProtocol atIndex: 3];
  [i setArgument: &outProtocol atIndex: 4];
  [i setTarget: self];
  [i invoke];
  return YES;
}

- (void) process_addSocialBlacklist_withSequenceID: (int32_t) seqID inProtocol: (id<TProtocol>) inProtocol outProtocol: (id<TProtocol>) outProtocol
{
  addSocialBlacklist_args * args = [[addSocialBlacklist_args alloc] init];
  [args read: inProtocol];
  [inProtocol readMessageEnd];
  AddSocialBlacklist_result * result = [[AddSocialBlacklist_result alloc] init];
  [result setSuccess: [mService addSocialBlacklist: [args blackUserId]]];
  [outProtocol writeMessageBeginWithName: @"addSocialBlacklist"
                                    type: TMessageType_REPLY
                              sequenceID: seqID];
  [result write: outProtocol];
  [outProtocol writeMessageEnd];
  [[outProtocol transport] flush];
  [result release_stub];
  [args release_stub];
}

- (void) dealloc
{
  [mService release_stub];
  [mMethodMap release_stub];
  [super dealloc_stub];
}

@end
