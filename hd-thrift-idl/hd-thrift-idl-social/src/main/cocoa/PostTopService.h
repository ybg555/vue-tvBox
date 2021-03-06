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


@protocol IPostTopServiceQueryPostTop <NSObject>
- (NSString *) queryPostTop: (NSString *) params;  // throws TException
@end

@interface IPostTopServiceQueryPostTopClient : NSObject <IPostTopServiceQueryPostTop> {
  id <TProtocol> inProtocol;
  id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IPostTopServiceQueryPostTopProcessor : NSObject <TProcessor> {
  id <IPostTopServiceQueryPostTop> mService;
  NSDictionary * mMethodMap;
}
- (id) initWithIPostTopServiceQueryPostTop: (id <IPostTopServiceQueryPostTop>) service;
- (id<IPostTopServiceQueryPostTop>) service;
@end

@protocol IPostTopServiceAddTop <NSObject>
- (NSString *) addTop: (NSString *) params;  // throws TException
@end

@interface IPostTopServiceAddTopClient : NSObject <IPostTopServiceAddTop> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IPostTopServiceAddTopProcessor : NSObject <TProcessor> {
id <IPostTopServiceAddTop> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIPostTopServiceAddTop: (id <IPostTopServiceAddTop>) service;
- (id<IPostTopServiceAddTop>) service;
@end

@protocol IPostTopServiceUpdateTop <NSObject>
- (NSString *) updateTop: (NSString *) params;  // throws TException
@end

@interface IPostTopServiceUpdateTopClient : NSObject <IPostTopServiceUpdateTop> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IPostTopServiceUpdateTopProcessor : NSObject <TProcessor> {
id <IPostTopServiceUpdateTop> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIPostTopServiceUpdateTop: (id <IPostTopServiceUpdateTop>) service;
- (id<IPostTopServiceUpdateTop>) service;
@end

@protocol IPostTopServiceDeleteTop <NSObject>
- (NSString *) deleteTop: (NSString *) params;  // throws TException
@end

@interface IPostTopServiceDeleteTopClient : NSObject <IPostTopServiceDeleteTop> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IPostTopServiceDeleteTopProcessor : NSObject <TProcessor> {
id <IPostTopServiceDeleteTop> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIPostTopServiceDeleteTop: (id <IPostTopServiceDeleteTop>) service;
- (id<IPostTopServiceDeleteTop>) service;
@end

@protocol IPostTopServiceGetPostTopById <NSObject>
- (NSString *) getPostTopById: (NSString *) params;  // throws TException
@end

@interface IPostTopServiceGetPostTopByIdClient : NSObject <IPostTopServiceGetPostTopById> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IPostTopServiceGetPostTopByIdProcessor : NSObject <TProcessor> {
id <IPostTopServiceGetPostTopById> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIPostTopServiceGetPostTopById: (id <IPostTopServiceGetPostTopById>) service;
- (id<IPostTopServiceGetPostTopById>) service;
@end

@interface PostTopServiceConstants : NSObject {
}
@end
