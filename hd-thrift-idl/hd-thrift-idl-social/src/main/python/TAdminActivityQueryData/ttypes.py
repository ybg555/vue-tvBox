#coding=utf-8

#
# Autogenerated by Thrift Compiler (0.9.2)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#
#  options string: py
#

from thrift.Thrift import TType, TMessageType, TException, TApplicationException

from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol, TProtocol
try:
  from thrift.protocol import fastbinary
except:
  fastbinary = None



class TAdminActivityQueryData:
  """
  活动分页对象

  @since 1.1.0
  @author zhijian.li
  @date 2016年1月14日 上午9:09:15


  Attributes:
   - totalCount: 总数
   - totalPage: 总页数
   - pageSize: 一页多少条
   - currPage: 当前页
   - dataList: 返回的集合对象
  """

  thrift_spec = (
    None, # 0
    (1, TType.I32, 'totalCount', None, None, ), # 1
    (2, TType.I32, 'totalPage', None, None, ), # 2
    (3, TType.I32, 'pageSize', None, None, ), # 3
    (4, TType.I32, 'currPage', None, None, ), # 4
    (5, TType.LIST, 'dataList', (TType.MAP,(TType.STRING,None,TType.STRING,None)), None, ), # 5
  )

  def __init__(self, totalCount=None, totalPage=None, pageSize=None, currPage=None, dataList=None,):
    self.totalCount = totalCount
    self.totalPage = totalPage
    self.pageSize = pageSize
    self.currPage = currPage
    self.dataList = dataList

  def read(self, iprot):
    if iprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None and fastbinary is not None:
      fastbinary.decode_binary(self, iprot.trans, (self.__class__, self.thrift_spec))
      return
    iprot.readStructBegin()
    while True:
      (fname, ftype, fid) = iprot.readFieldBegin()
      if ftype == TType.STOP:
        break
      if fid == 1:
        if ftype == TType.I32:
          self.totalCount = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.I32:
          self.totalPage = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 3:
        if ftype == TType.I32:
          self.pageSize = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 4:
        if ftype == TType.I32:
          self.currPage = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 5:
        if ftype == TType.LIST:
          self.dataList = []
          (_etype3, _size0) = iprot.readListBegin()
          for _i4 in xrange(_size0):
            _elem5 = {}
            (_ktype7, _vtype8, _size6 ) = iprot.readMapBegin()
            for _i10 in xrange(_size6):
              _key11 = iprot.readString();
              _val12 = iprot.readString();
              _elem5[_key11] = _val12
            iprot.readMapEnd()
            self.dataList.append(_elem5)
          iprot.readListEnd()
        else:
          iprot.skip(ftype)
      else:
        iprot.skip(ftype)
      iprot.readFieldEnd()
    iprot.readStructEnd()

  def write(self, oprot):
    if oprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and self.thrift_spec is not None and fastbinary is not None:
      oprot.trans.write(fastbinary.encode_binary(self, (self.__class__, self.thrift_spec)))
      return
    oprot.writeStructBegin('TAdminActivityQueryData')
    if self.totalCount is not None:
      oprot.writeFieldBegin('totalCount', TType.I32, 1)
      oprot.writeI32(self.totalCount)
      oprot.writeFieldEnd()
    if self.totalPage is not None:
      oprot.writeFieldBegin('totalPage', TType.I32, 2)
      oprot.writeI32(self.totalPage)
      oprot.writeFieldEnd()
    if self.pageSize is not None:
      oprot.writeFieldBegin('pageSize', TType.I32, 3)
      oprot.writeI32(self.pageSize)
      oprot.writeFieldEnd()
    if self.currPage is not None:
      oprot.writeFieldBegin('currPage', TType.I32, 4)
      oprot.writeI32(self.currPage)
      oprot.writeFieldEnd()
    if self.dataList is not None:
      oprot.writeFieldBegin('dataList', TType.LIST, 5)
      oprot.writeListBegin(TType.MAP, len(self.dataList))
      for iter13 in self.dataList:
        oprot.writeMapBegin(TType.STRING, TType.STRING, len(iter13))
        for kiter14,viter15 in iter13.items():
          oprot.writeString(kiter14)
          oprot.writeString(viter15)
        oprot.writeMapEnd()
      oprot.writeListEnd()
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    return


  def __hash__(self):
    value = 17
    value = (value * 31) ^ hash(self.totalCount)
    value = (value * 31) ^ hash(self.totalPage)
    value = (value * 31) ^ hash(self.pageSize)
    value = (value * 31) ^ hash(self.currPage)
    value = (value * 31) ^ hash(self.dataList)
    return value

  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)
