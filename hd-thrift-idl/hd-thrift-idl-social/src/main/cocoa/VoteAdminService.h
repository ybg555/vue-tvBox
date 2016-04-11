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


@protocol IVoteServiceAddVote <NSObject>
- (NSString *) addVote: (NSString *) params;  // throws TException
@end

@interface IVoteServiceAddVoteClient : NSObject <IVoteServiceAddVote> {
  id <TProtocol> inProtocol;
  id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IVoteServiceAddVoteProcessor : NSObject <TProcessor> {
  id <IVoteServiceAddVote> mService;
  NSDictionary * mMethodMap;
}
- (id) initWithIVoteServiceAddVote: (id <IVoteServiceAddVote>) service;
- (id<IVoteServiceAddVote>) service;
@end

@protocol IVoteServiceUpdateVote <NSObject>
- (NSString *) updateVote: (NSString *) params;  // throws TException
@end

@interface IVoteServiceUpdateVoteClient : NSObject <IVoteServiceUpdateVote> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IVoteServiceUpdateVoteProcessor : NSObject <TProcessor> {
id <IVoteServiceUpdateVote> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIVoteServiceUpdateVote: (id <IVoteServiceUpdateVote>) service;
- (id<IVoteServiceUpdateVote>) service;
@end

@protocol IVoteServiceGetVoteList <NSObject>
- (NSString *) getVoteList: (NSString *) params;  // throws TException
@end

@interface IVoteServiceGetVoteListClient : NSObject <IVoteServiceGetVoteList> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IVoteServiceGetVoteListProcessor : NSObject <TProcessor> {
id <IVoteServiceGetVoteList> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIVoteServiceGetVoteList: (id <IVoteServiceGetVoteList>) service;
- (id<IVoteServiceGetVoteList>) service;
@end

@protocol IVoteServiceGetVote <NSObject>
- (NSString *) getVote: (NSString *) params;  // throws TException
@end

@interface IVoteServiceGetVoteClient : NSObject <IVoteServiceGetVote> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IVoteServiceGetVoteProcessor : NSObject <TProcessor> {
id <IVoteServiceGetVote> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIVoteServiceGetVote: (id <IVoteServiceGetVote>) service;
- (id<IVoteServiceGetVote>) service;
@end

@protocol IVoteServiceGetJoinList <NSObject>
- (NSString *) getJoinList: (NSString *) params;  // throws TException
@end

@interface IVoteServiceGetJoinListClient : NSObject <IVoteServiceGetJoinList> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IVoteServiceGetJoinListProcessor : NSObject <TProcessor> {
id <IVoteServiceGetJoinList> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIVoteServiceGetJoinList: (id <IVoteServiceGetJoinList>) service;
- (id<IVoteServiceGetJoinList>) service;
@end

@protocol IVoteServiceSetCandidate <NSObject>
- (NSString *) setCandidate: (NSString *) params;  // throws TException
@end

@interface IVoteServiceSetCandidateClient : NSObject <IVoteServiceSetCandidate> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IVoteServiceSetCandidateProcessor : NSObject <TProcessor> {
id <IVoteServiceSetCandidate> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIVoteServiceSetCandidate: (id <IVoteServiceSetCandidate>) service;
- (id<IVoteServiceSetCandidate>) service;
@end

@protocol IVoteServiceSetPrize <NSObject>
- (NSString *) setPrize: (NSString *) params;  // throws TException
@end

@interface IVoteServiceSetPrizeClient : NSObject <IVoteServiceSetPrize> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IVoteServiceSetPrizeProcessor : NSObject <TProcessor> {
id <IVoteServiceSetPrize> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIVoteServiceSetPrize: (id <IVoteServiceSetPrize>) service;
- (id<IVoteServiceSetPrize>) service;
@end

@protocol IVoteServiceEditAddVotes <NSObject>
- (NSString *) editAddVotes: (NSString *) params;  // throws TException
@end

@interface IVoteServiceEditAddVotesClient : NSObject <IVoteServiceEditAddVotes> {
id <TProtocol> inProtocol;
id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface IVoteServiceEditAddVotesProcessor : NSObject <TProcessor> {
id <IVoteServiceEditAddVotes> mService;
NSDictionary * mMethodMap;
}
- (id) initWithIVoteServiceEditAddVotes: (id <IVoteServiceEditAddVotes>) service;
- (id<IVoteServiceEditAddVotes>) service;
@end

@interface VoteAdminServiceConstants : NSObject {
}
@end