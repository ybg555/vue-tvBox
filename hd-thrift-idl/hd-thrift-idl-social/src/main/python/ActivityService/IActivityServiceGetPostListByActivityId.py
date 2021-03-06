#coding=utf-8

#
# Autogenerated by Thrift Compiler (0.9.2)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#
#  options string: py
#

from thrift.Thrift import TType, TMessageType, TException, TApplicationException
from ttypes import *
from thrift.Thrift import TProcessor
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol, TProtocol
try:
  from thrift.protocol import fastbinary
except:
  fastbinary = None


class Iface:
  def getPostListByActivityId(self, id, currentPage, pageSize):
    """

    根据活动id查询帖子列表

    @param id
    @param currentPage
    @param pageSize
    @return

    @author zhijian.li

    Parameters:
     - id
     - currentPage
     - pageSize
    """
    pass


class Client(Iface):
  def __init__(self, iprot, oprot=None):
    self._iprot = self._oprot = iprot
    if oprot is not None:
      self._oprot = oprot
    self._seqid = 0

  def getPostListByActivityId(self, id, currentPage, pageSize):
    """

    根据活动id查询帖子列表

    @param id
    @param currentPage
    @param pageSize
    @return

    @author zhijian.li

    Parameters:
     - id
     - currentPage
     - pageSize
    """
    self.send_getPostListByActivityId(id, currentPage, pageSize)
    return self.recv_getPostListByActivityId()

  def send_getPostListByActivityId(self, id, currentPage, pageSize):
    self._oprot.writeMessageBegin('getPostListByActivityId', TMessageType.CALL, self._seqid)
    args = getPostListByActivityId_args()
    args.id = id
    args.currentPage = currentPage
    args.pageSize = pageSize
    args.write(self._oprot)
    self._oprot.writeMessageEnd()
    self._oprot.trans.flush()

  def recv_getPostListByActivityId(self):
    iprot = self._iprot
    (fname, mtype, rseqid) = iprot.readMessageBegin()
    if mtype == TMessageType.EXCEPTION:
      x = TApplicationException()
      x.read(iprot)
      iprot.readMessageEnd()
      raise x
    result = getPostListByActivityId_result()
    result.read(iprot)
    iprot.readMessageEnd()
    if result.success is not None:
      return result.success
    raise TApplicationException(TApplicationException.MISSING_RESULT, "getPostListByActivityId failed: unknown result");


class Processor(Iface, TProcessor):
  def __init__(self, handler):
    self._handler = handler
    self._processMap = {}
    self._processMap["getPostListByActivityId"] = Processor.process_getPostListByActivityId

  def process(self, iprot, oprot):
    (name, type, seqid) = iprot.readMessageBegin()
    if name not in self._processMap:
      iprot.skip(TType.STRUCT)
      iprot.readMessageEnd()
      x = TApplicationException(TApplicationException.UNKNOWN_METHOD, 'Unknown function %s' % (name))
      oprot.writeMessageBegin(name, TMessageType.EXCEPTION, seqid)
      x.write(oprot)
      oprot.writeMessageEnd()
      oprot.trans.flush()
      return
    else:
      self._processMap[name](self, seqid, iprot, oprot)
    return True

  def process_getPostListByActivityId(self, seqid, iprot, oprot):
    args = getPostListByActivityId_args()
    args.read(iprot)
    iprot.readMessageEnd()
    result = getPostListByActivityId_result()
    result.success = self._handler.getPostListByActivityId(args.id, args.currentPage, args.pageSize)
    oprot.writeMessageBegin("getPostListByActivityId", TMessageType.REPLY, seqid)
    result.write(oprot)
    oprot.writeMessageEnd()
    oprot.trans.flush()


# HELPER FUNCTIONS AND STRUCTURES

class getPostListByActivityId_args:
  """
  Attributes:
   - id
   - currentPage
   - pageSize
  """

  thrift_spec = (
    None, # 0
    (1, TType.I32, 'id', None, None, ), # 1
    (2, TType.I32, 'currentPage', None, None, ), # 2
    (3, TType.I32, 'pageSize', None, None, ), # 3
  )

  def __init__(self, id=None, currentPage=None, pageSize=None,):
    self.id = id
    self.currentPage = currentPage
    self.pageSize = pageSize

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
          self.id = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.I32:
          self.currentPage = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 3:
        if ftype == TType.I32:
          self.pageSize = iprot.readI32();
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
    oprot.writeStructBegin('getPostListByActivityId_args')
    if self.id is not None:
      oprot.writeFieldBegin('id', TType.I32, 1)
      oprot.writeI32(self.id)
      oprot.writeFieldEnd()
    if self.currentPage is not None:
      oprot.writeFieldBegin('currentPage', TType.I32, 2)
      oprot.writeI32(self.currentPage)
      oprot.writeFieldEnd()
    if self.pageSize is not None:
      oprot.writeFieldBegin('pageSize', TType.I32, 3)
      oprot.writeI32(self.pageSize)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    return


  def __hash__(self):
    value = 17
    value = (value * 31) ^ hash(self.id)
    value = (value * 31) ^ hash(self.currentPage)
    value = (value * 31) ^ hash(self.pageSize)
    return value

  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)

class getPostListByActivityId_result:
  """
  Attributes:
   - success
  """

  thrift_spec = (
    (0, TType.LIST, 'success', (TType.MAP,(TType.STRING,None,TType.STRING,None)), None, ), # 0
  )

  def __init__(self, success=None,):
    self.success = success

  def read(self, iprot):
    if iprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None and fastbinary is not None:
      fastbinary.decode_binary(self, iprot.trans, (self.__class__, self.thrift_spec))
      return
    iprot.readStructBegin()
    while True:
      (fname, ftype, fid) = iprot.readFieldBegin()
      if ftype == TType.STOP:
        break
      if fid == 0:
        if ftype == TType.LIST:
          self.success = []
          (_etype28, _size25) = iprot.readListBegin()
          for _i29 in xrange(_size25):
            _elem30 = {}
            (_ktype32, _vtype33, _size31 ) = iprot.readMapBegin()
            for _i35 in xrange(_size31):
              _key36 = iprot.readString();
              _val37 = iprot.readString();
              _elem30[_key36] = _val37
            iprot.readMapEnd()
            self.success.append(_elem30)
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
    oprot.writeStructBegin('getPostListByActivityId_result')
    if self.success is not None:
      oprot.writeFieldBegin('success', TType.LIST, 0)
      oprot.writeListBegin(TType.MAP, len(self.success))
      for iter38 in self.success:
        oprot.writeMapBegin(TType.STRING, TType.STRING, len(iter38))
        for kiter39,viter40 in iter38.items():
          oprot.writeString(kiter39)
          oprot.writeString(viter40)
        oprot.writeMapEnd()
      oprot.writeListEnd()
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    return


  def __hash__(self):
    value = 17
    value = (value * 31) ^ hash(self.success)
    return value

  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)
