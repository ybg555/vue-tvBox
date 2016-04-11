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

#import "TAdminCommentQueryData.h"

@implementation TAdminCommentQueryData

- (id) init
{
  self = [super init];
#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
#endif
  return self;
}

- (id) initWithTotalCount: (int32_t) totalCount totalPage: (int32_t) totalPage pageSize: (int32_t) pageSize currPage: (int32_t) currPage dataList: (NSMutableArray *) dataList
{
  self = [super init];
  __totalCount = totalCount;
  __totalCount_isset = YES;
  __totalPage = totalPage;
  __totalPage_isset = YES;
  __pageSize = pageSize;
  __pageSize_isset = YES;
  __currPage = currPage;
  __currPage_isset = YES;
  __dataList = [dataList retain_stub];
  __dataList_isset = YES;
  return self;
}

- (id) initWithCoder: (NSCoder *) decoder
{
  self = [super init];
  if ([decoder containsValueForKey: @"totalCount"])
  {
    __totalCount = [decoder decodeInt32ForKey: @"totalCount"];
    __totalCount_isset = YES;
  }
  if ([decoder containsValueForKey: @"totalPage"])
  {
    __totalPage = [decoder decodeInt32ForKey: @"totalPage"];
    __totalPage_isset = YES;
  }
  if ([decoder containsValueForKey: @"pageSize"])
  {
    __pageSize = [decoder decodeInt32ForKey: @"pageSize"];
    __pageSize_isset = YES;
  }
  if ([decoder containsValueForKey: @"currPage"])
  {
    __currPage = [decoder decodeInt32ForKey: @"currPage"];
    __currPage_isset = YES;
  }
  if ([decoder containsValueForKey: @"dataList"])
  {
    __dataList = [[decoder decodeObjectForKey: @"dataList"] retain_stub];
    __dataList_isset = YES;
  }
  return self;
}

- (void) encodeWithCoder: (NSCoder *) encoder
{
  if (__totalCount_isset)
  {
    [encoder encodeInt32: __totalCount forKey: @"totalCount"];
  }
  if (__totalPage_isset)
  {
    [encoder encodeInt32: __totalPage forKey: @"totalPage"];
  }
  if (__pageSize_isset)
  {
    [encoder encodeInt32: __pageSize forKey: @"pageSize"];
  }
  if (__currPage_isset)
  {
    [encoder encodeInt32: __currPage forKey: @"currPage"];
  }
  if (__dataList_isset)
  {
    [encoder encodeObject: __dataList forKey: @"dataList"];
  }
}

- (void) dealloc
{
  [__dataList release_stub];
  [super dealloc_stub];
}

- (int32_t) totalCount {
  return __totalCount;
}

- (void) setTotalCount: (int32_t) totalCount {
  __totalCount = totalCount;
  __totalCount_isset = YES;
}

- (BOOL) totalCountIsSet {
  return __totalCount_isset;
}

- (void) unsetTotalCount {
  __totalCount_isset = NO;
}

- (int32_t) totalPage {
  return __totalPage;
}

- (void) setTotalPage: (int32_t) totalPage {
  __totalPage = totalPage;
  __totalPage_isset = YES;
}

- (BOOL) totalPageIsSet {
  return __totalPage_isset;
}

- (void) unsetTotalPage {
  __totalPage_isset = NO;
}

- (int32_t) pageSize {
  return __pageSize;
}

- (void) setPageSize: (int32_t) pageSize {
  __pageSize = pageSize;
  __pageSize_isset = YES;
}

- (BOOL) pageSizeIsSet {
  return __pageSize_isset;
}

- (void) unsetPageSize {
  __pageSize_isset = NO;
}

- (int32_t) currPage {
  return __currPage;
}

- (void) setCurrPage: (int32_t) currPage {
  __currPage = currPage;
  __currPage_isset = YES;
}

- (BOOL) currPageIsSet {
  return __currPage_isset;
}

- (void) unsetCurrPage {
  __currPage_isset = NO;
}

- (NSMutableArray *) dataList {
  return [[__dataList retain_stub] autorelease_stub];
}

- (void) setDataList: (NSMutableArray *) dataList {
  [dataList retain_stub];
  [__dataList release_stub];
  __dataList = dataList;
  __dataList_isset = YES;
}

- (BOOL) dataListIsSet {
  return __dataList_isset;
}

- (void) unsetDataList {
  [__dataList release_stub];
  __dataList = nil;
  __dataList_isset = NO;
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
          [self setTotalCount: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 2:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setTotalPage: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 3:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setPageSize: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 4:
        if (fieldType == TType_I32) {
          int32_t fieldValue = [inProtocol readI32];
          [self setCurrPage: fieldValue];
        } else { 
          [TProtocolUtil skipType: fieldType onProtocol: inProtocol];
        }
        break;
      case 5:
        if (fieldType == TType_LIST) {
          int _size0;
          [inProtocol readListBeginReturningElementType: NULL size: &_size0];
          NSMutableArray * fieldValue = [[NSMutableArray alloc] initWithCapacity: _size0];
          int _i1;
          for (_i1 = 0; _i1 < _size0; ++_i1)
          {
            TAdminComment *_elem2 = [[TAdminComment alloc] init];
            [_elem2 read: inProtocol];
            [fieldValue addObject: _elem2];
            [_elem2 release_stub];
          }
          [inProtocol readListEnd];
          [self setDataList: fieldValue];
          [fieldValue release_stub];
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
  [outProtocol writeStructBeginWithName: @"TAdminCommentQueryData"];
  if (__totalCount_isset) {
    [outProtocol writeFieldBeginWithName: @"totalCount" type: TType_I32 fieldID: 1];
    [outProtocol writeI32: __totalCount];
    [outProtocol writeFieldEnd];
  }
  if (__totalPage_isset) {
    [outProtocol writeFieldBeginWithName: @"totalPage" type: TType_I32 fieldID: 2];
    [outProtocol writeI32: __totalPage];
    [outProtocol writeFieldEnd];
  }
  if (__pageSize_isset) {
    [outProtocol writeFieldBeginWithName: @"pageSize" type: TType_I32 fieldID: 3];
    [outProtocol writeI32: __pageSize];
    [outProtocol writeFieldEnd];
  }
  if (__currPage_isset) {
    [outProtocol writeFieldBeginWithName: @"currPage" type: TType_I32 fieldID: 4];
    [outProtocol writeI32: __currPage];
    [outProtocol writeFieldEnd];
  }
  if (__dataList_isset) {
    if (__dataList != nil) {
      [outProtocol writeFieldBeginWithName: @"dataList" type: TType_LIST fieldID: 5];
      {
        [outProtocol writeListBeginWithElementType: TType_STRUCT size: [__dataList count]];
        int idx4;
        for (idx4 = 0; idx4 < [__dataList count]; idx4++)
        {
          [[__dataList objectAtIndex: idx4] write: outProtocol];
        }
        [outProtocol writeListEnd];
      }
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
  NSMutableString * ms = [NSMutableString stringWithString: @"TAdminCommentQueryData("];
  [ms appendString: @"totalCount:"];
  [ms appendFormat: @"%i", __totalCount];
  [ms appendString: @",totalPage:"];
  [ms appendFormat: @"%i", __totalPage];
  [ms appendString: @",pageSize:"];
  [ms appendFormat: @"%i", __pageSize];
  [ms appendString: @",currPage:"];
  [ms appendFormat: @"%i", __currPage];
  [ms appendString: @",dataList:"];
  [ms appendFormat: @"%@", __dataList];
  [ms appendString: @")"];
  return [NSString stringWithString: ms];
}

@end


@implementation TAdminCommentQueryDataConstants
+ (void) initialize {
}
@end

