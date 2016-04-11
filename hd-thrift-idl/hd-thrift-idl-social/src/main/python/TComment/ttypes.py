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



class TComment:
  """
  帖子评论

  @since 0.0.1
  @author zhijian.li
  @date 2015年11月27日下午3:45:11


  Attributes:
   - id: 主键id
   - postId: 帖子id
   - userId: 用户id
   - nickName: 用户昵称
   - avatarUrl: 用户头像
   - pid: 父id
   - toUserId: 被回复人的用户id
   - toNickName: 被回复人的用户名
   - toAvatarUrl: 被回复人的头像
   - status: 状态 1-正常 0-删除
   - content: 评论内容
   - createTime: 创建时间
  """

  thrift_spec = (
    None, # 0
    (1, TType.I32, 'id', None, None, ), # 1
    (2, TType.I32, 'postId', None, None, ), # 2
    (3, TType.I64, 'userId', None, None, ), # 3
    (4, TType.STRING, 'nickName', None, None, ), # 4
    (5, TType.STRING, 'avatarUrl', None, None, ), # 5
    (6, TType.I32, 'pid', None, None, ), # 6
    (7, TType.I64, 'toUserId', None, None, ), # 7
    (8, TType.STRING, 'toNickName', None, None, ), # 8
    (9, TType.STRING, 'toAvatarUrl', None, None, ), # 9
    (10, TType.I32, 'status', None, None, ), # 10
    (11, TType.STRING, 'content', None, None, ), # 11
    (12, TType.I64, 'createTime', None, None, ), # 12
  )

  def __init__(self, id=None, postId=None, userId=None, nickName=None, avatarUrl=None, pid=None, toUserId=None, toNickName=None, toAvatarUrl=None, status=None, content=None, createTime=None,):
    self.id = id
    self.postId = postId
    self.userId = userId
    self.nickName = nickName
    self.avatarUrl = avatarUrl
    self.pid = pid
    self.toUserId = toUserId
    self.toNickName = toNickName
    self.toAvatarUrl = toAvatarUrl
    self.status = status
    self.content = content
    self.createTime = createTime

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
          self.postId = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 3:
        if ftype == TType.I64:
          self.userId = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 4:
        if ftype == TType.STRING:
          self.nickName = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 5:
        if ftype == TType.STRING:
          self.avatarUrl = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 6:
        if ftype == TType.I32:
          self.pid = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 7:
        if ftype == TType.I64:
          self.toUserId = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 8:
        if ftype == TType.STRING:
          self.toNickName = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 9:
        if ftype == TType.STRING:
          self.toAvatarUrl = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 10:
        if ftype == TType.I32:
          self.status = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 11:
        if ftype == TType.STRING:
          self.content = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 12:
        if ftype == TType.I64:
          self.createTime = iprot.readI64();
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
    oprot.writeStructBegin('TComment')
    if self.id is not None:
      oprot.writeFieldBegin('id', TType.I32, 1)
      oprot.writeI32(self.id)
      oprot.writeFieldEnd()
    if self.postId is not None:
      oprot.writeFieldBegin('postId', TType.I32, 2)
      oprot.writeI32(self.postId)
      oprot.writeFieldEnd()
    if self.userId is not None:
      oprot.writeFieldBegin('userId', TType.I64, 3)
      oprot.writeI64(self.userId)
      oprot.writeFieldEnd()
    if self.nickName is not None:
      oprot.writeFieldBegin('nickName', TType.STRING, 4)
      oprot.writeString(self.nickName)
      oprot.writeFieldEnd()
    if self.avatarUrl is not None:
      oprot.writeFieldBegin('avatarUrl', TType.STRING, 5)
      oprot.writeString(self.avatarUrl)
      oprot.writeFieldEnd()
    if self.pid is not None:
      oprot.writeFieldBegin('pid', TType.I32, 6)
      oprot.writeI32(self.pid)
      oprot.writeFieldEnd()
    if self.toUserId is not None:
      oprot.writeFieldBegin('toUserId', TType.I64, 7)
      oprot.writeI64(self.toUserId)
      oprot.writeFieldEnd()
    if self.toNickName is not None:
      oprot.writeFieldBegin('toNickName', TType.STRING, 8)
      oprot.writeString(self.toNickName)
      oprot.writeFieldEnd()
    if self.toAvatarUrl is not None:
      oprot.writeFieldBegin('toAvatarUrl', TType.STRING, 9)
      oprot.writeString(self.toAvatarUrl)
      oprot.writeFieldEnd()
    if self.status is not None:
      oprot.writeFieldBegin('status', TType.I32, 10)
      oprot.writeI32(self.status)
      oprot.writeFieldEnd()
    if self.content is not None:
      oprot.writeFieldBegin('content', TType.STRING, 11)
      oprot.writeString(self.content)
      oprot.writeFieldEnd()
    if self.createTime is not None:
      oprot.writeFieldBegin('createTime', TType.I64, 12)
      oprot.writeI64(self.createTime)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    return


  def __hash__(self):
    value = 17
    value = (value * 31) ^ hash(self.id)
    value = (value * 31) ^ hash(self.postId)
    value = (value * 31) ^ hash(self.userId)
    value = (value * 31) ^ hash(self.nickName)
    value = (value * 31) ^ hash(self.avatarUrl)
    value = (value * 31) ^ hash(self.pid)
    value = (value * 31) ^ hash(self.toUserId)
    value = (value * 31) ^ hash(self.toNickName)
    value = (value * 31) ^ hash(self.toAvatarUrl)
    value = (value * 31) ^ hash(self.status)
    value = (value * 31) ^ hash(self.content)
    value = (value * 31) ^ hash(self.createTime)
    return value

  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)