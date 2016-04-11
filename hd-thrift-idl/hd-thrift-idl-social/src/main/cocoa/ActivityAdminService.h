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

#import "TAdminActivityQueryData.h"
#import "TActivity.h"
#import "TAdminPostQueryData.h"
#import "TAdminPrizeQueryData.h"

@protocol IActivityAdminServiceGetAdminActivityList <NSObject>
- (TAdminActivityQueryData *) getAdminActivityList: (int32_t) currentPage pageSize: (int32_t) pageSize;  // throws TException
@end

@interface IActivityAdminServiceGetAdminActivityListClient : NSObject <IActivityAdminServiceGetAdminActivityList> {
  id <TProtocol> inProtocol;
  id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceGetAdminActivityListProcessor : NSObject <TProcessor> {
  id <IActivityAdminServiceGetAdminActivityList> mService;
  NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceGetAdminActivityList: (id <IActivityAdminServiceGetAdminActivityList>) service;
- (id<IActivityAdminServiceGetAdminActivityList>) service;
@end

@protocol IActivityAdminServiceAddAdminActivity <NSObject>
- (BOOL) addAdminActivity: (NSString *) activity activityCommunities: (NSString *) activityCommunities;  // throws TException
@end

@interface IActivityAdminServiceAddAdminActivityClient : NSObject <IActivityAdminServiceAddAdminActivity> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceAddAdminActivityProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceAddAdminActivity> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceAddAdminActivity: (id <IActivityAdminServiceAddAdminActivity>) service;
- (id<IActivityAdminServiceAddAdminActivity>) service;
@end

@protocol IActivityAdminServiceEditAdminActivity <NSObject>
- (BOOL) editAdminActivity: (NSString *) activity activityCommunities: (NSString *) activityCommunities;  // throws TException
@end

@interface IActivityAdminServiceEditAdminActivityClient : NSObject <IActivityAdminServiceEditAdminActivity> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceEditAdminActivityProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceEditAdminActivity> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceEditAdminActivity: (id <IActivityAdminServiceEditAdminActivity>) service;
- (id<IActivityAdminServiceEditAdminActivity>) service;
@end

@protocol IActivityAdminServiceGetAdminActivityById <NSObject>
- (TActivity *) getAdminActivityById: (int32_t) id;  // throws TException
@end

@interface IActivityAdminServiceGetAdminActivityByIdClient : NSObject <IActivityAdminServiceGetAdminActivityById> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceGetAdminActivityByIdProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceGetAdminActivityById> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceGetAdminActivityById: (id <IActivityAdminServiceGetAdminActivityById>) service;
- (id<IActivityAdminServiceGetAdminActivityById>) service;
@end

@protocol IActivityAdminServiceUpdateAdminActivityStatus <NSObject>
- (BOOL) updateAdminActivityStatus: (int32_t) id status: (int32_t) status;  // throws TException
@end

@interface IActivityAdminServiceUpdateAdminActivityStatusClient : NSObject <IActivityAdminServiceUpdateAdminActivityStatus> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceUpdateAdminActivityStatusProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceUpdateAdminActivityStatus> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceUpdateAdminActivityStatus: (id <IActivityAdminServiceUpdateAdminActivityStatus>) service;
- (id<IActivityAdminServiceUpdateAdminActivityStatus>) service;
@end

@protocol IActivityAdminServiceDeleteAdminActivity <NSObject>
- (BOOL) deleteAdminActivity: (int32_t) id;  // throws TException
@end

@interface IActivityAdminServiceDeleteAdminActivityClient : NSObject <IActivityAdminServiceDeleteAdminActivity> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceDeleteAdminActivityProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceDeleteAdminActivity> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceDeleteAdminActivity: (id <IActivityAdminServiceDeleteAdminActivity>) service;
- (id<IActivityAdminServiceDeleteAdminActivity>) service;
@end

@protocol IActivityAdminServiceGetAdminPostListByActivityId <NSObject>
- (TAdminPostQueryData *) getAdminPostListByActivityId: (int32_t) id currentPage: (int32_t) currentPage pageSize: (int32_t) pageSize;  // throws TException
@end

@interface IActivityAdminServiceGetAdminPostListByActivityIdClient : NSObject <IActivityAdminServiceGetAdminPostListByActivityId> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceGetAdminPostListByActivityIdProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceGetAdminPostListByActivityId> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceGetAdminPostListByActivityId: (id <IActivityAdminServiceGetAdminPostListByActivityId>) service;
- (id<IActivityAdminServiceGetAdminPostListByActivityId>) service;
@end

@protocol IActivityAdminServiceAddAdminPrize <NSObject>
- (BOOL) addAdminPrize: (NSString *) prize;  // throws TException
@end

@interface IActivityAdminServiceAddAdminPrizeClient : NSObject <IActivityAdminServiceAddAdminPrize> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceAddAdminPrizeProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceAddAdminPrize> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceAddAdminPrize: (id <IActivityAdminServiceAddAdminPrize>) service;
- (id<IActivityAdminServiceAddAdminPrize>) service;
@end

@protocol IActivityAdminServiceDeleteAdminPrize <NSObject>
- (BOOL) deleteAdminPrize: (int32_t) activityId postId: (int32_t) postId;  // throws TException
@end

@interface IActivityAdminServiceDeleteAdminPrizeClient : NSObject <IActivityAdminServiceDeleteAdminPrize> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceDeleteAdminPrizeProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceDeleteAdminPrize> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceDeleteAdminPrize: (id <IActivityAdminServiceDeleteAdminPrize>) service;
- (id<IActivityAdminServiceDeleteAdminPrize>) service;
@end

@protocol IActivityAdminServiceUpdateAdminPrizes <NSObject>
- (BOOL) updateAdminPrizes: (NSString *) prizes;  // throws TException
@end

@interface IActivityAdminServiceUpdateAdminPrizesClient : NSObject <IActivityAdminServiceUpdateAdminPrizes> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceUpdateAdminPrizesProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceUpdateAdminPrizes> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceUpdateAdminPrizes: (id <IActivityAdminServiceUpdateAdminPrizes>) service;
- (id<IActivityAdminServiceUpdateAdminPrizes>) service;
@end

@protocol IActivityAdminServiceGetAdminPrizeList <NSObject>
- (TAdminPrizeQueryData *) getAdminPrizeList: (int32_t) id currentPage: (int32_t) currentPage pageSize: (int32_t) pageSize;  // throws TException
@end

@interface IActivityAdminServiceGetAdminPrizeListClient : NSObject <IActivityAdminServiceGetAdminPrizeList> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceGetAdminPrizeListProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceGetAdminPrizeList> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceGetAdminPrizeList: (id <IActivityAdminServiceGetAdminPrizeList>) service;
- (id<IActivityAdminServiceGetAdminPrizeList>) service;
@end

@protocol IActivityAdminServiceConfirmPrizeList <NSObject>
- (BOOL) confirmPrizeList: (int32_t) id;  // throws TException
@end

@interface IActivityAdminServiceConfirmPrizeListClient : NSObject <IActivityAdminServiceConfirmPrizeList> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IActivityAdminServiceConfirmPrizeListProcessor : NSObject <TProcessor> {
id <IActivityAdminServiceConfirmPrizeList> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIActivityAdminServiceConfirmPrizeList: (id <IActivityAdminServiceConfirmPrizeList>) service;
- (id<IActivityAdminServiceConfirmPrizeList>) service;
@end

@interface ActivityAdminServiceConstants : NSObject {
}
@end
