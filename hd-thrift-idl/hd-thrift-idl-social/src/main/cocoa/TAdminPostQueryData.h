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

#import "TAdminPost.h"

@interface TAdminPostQueryData : NSObject <TBase, NSCoding> {
  int32_t __totalCount;
  int32_t __totalPage;
  int32_t __pageSize;
  int32_t __currPage;
  NSMutableArray * __dataList;

  BOOL __totalCount_isset;
  BOOL __totalPage_isset;
  BOOL __pageSize_isset;
  BOOL __currPage_isset;
  BOOL __dataList_isset;
}

#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
@property (nonatomic, getter=totalCount, setter=setTotalCount:) int32_t totalCount;
@property (nonatomic, getter=totalPage, setter=setTotalPage:) int32_t totalPage;
@property (nonatomic, getter=pageSize, setter=setPageSize:) int32_t pageSize;
@property (nonatomic, getter=currPage, setter=setCurrPage:) int32_t currPage;
@property (nonatomic, retain, getter=dataList, setter=setDataList:) NSMutableArray * dataList;
#endif

- (id) init;
- (id) initWithTotalCount: (int32_t) totalCount totalPage: (int32_t) totalPage pageSize: (int32_t) pageSize currPage: (int32_t) currPage dataList: (NSMutableArray *) dataList;

- (void) read: (id <TProtocol>) inProtocol;
- (void) write: (id <TProtocol>) outProtocol;

- (void) validate;

#if !__has_feature(objc_arc)
- (int32_t) totalCount;
- (void) setTotalCount: (int32_t) totalCount;
#endif
- (BOOL) totalCountIsSet;

#if !__has_feature(objc_arc)
- (int32_t) totalPage;
- (void) setTotalPage: (int32_t) totalPage;
#endif
- (BOOL) totalPageIsSet;

#if !__has_feature(objc_arc)
- (int32_t) pageSize;
- (void) setPageSize: (int32_t) pageSize;
#endif
- (BOOL) pageSizeIsSet;

#if !__has_feature(objc_arc)
- (int32_t) currPage;
- (void) setCurrPage: (int32_t) currPage;
#endif
- (BOOL) currPageIsSet;

#if !__has_feature(objc_arc)
- (NSMutableArray *) dataList;
- (void) setDataList: (NSMutableArray *) dataList;
#endif
- (BOOL) dataListIsSet;

@end

@interface TAdminPostQueryDataConstants : NSObject {
}
@end
