//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
TAdminPraise = module.exports.TAdminPraise = function(args) {
  this.id = null;
  this.postId = null;
  this.userId = null;
  this.nickName = null;
  this.avatarUrl = null;
  this.postUserId = null;
  this.createTime = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.postId !== undefined) {
      this.postId = args.postId;
    }
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.nickName !== undefined) {
      this.nickName = args.nickName;
    }
    if (args.avatarUrl !== undefined) {
      this.avatarUrl = args.avatarUrl;
    }
    if (args.postUserId !== undefined) {
      this.postUserId = args.postUserId;
    }
    if (args.createTime !== undefined) {
      this.createTime = args.createTime;
    }
  }
};
TAdminPraise.prototype = {};
TAdminPraise.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.postId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.userId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.nickName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.avatarUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.postUserId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.createTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TAdminPraise.prototype.write = function(output) {
  output.writeStructBegin('TAdminPraise');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 2);
    output.writeI32(this.postId);
    output.writeFieldEnd();
  }
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.I64, 3);
    output.writeI64(this.userId);
    output.writeFieldEnd();
  }
  if (this.nickName !== null && this.nickName !== undefined) {
    output.writeFieldBegin('nickName', Thrift.Type.STRING, 4);
    output.writeString(this.nickName);
    output.writeFieldEnd();
  }
  if (this.avatarUrl !== null && this.avatarUrl !== undefined) {
    output.writeFieldBegin('avatarUrl', Thrift.Type.STRING, 5);
    output.writeString(this.avatarUrl);
    output.writeFieldEnd();
  }
  if (this.postUserId !== null && this.postUserId !== undefined) {
    output.writeFieldBegin('postUserId', Thrift.Type.I32, 6);
    output.writeI32(this.postUserId);
    output.writeFieldEnd();
  }
  if (this.createTime !== null && this.createTime !== undefined) {
    output.writeFieldBegin('createTime', Thrift.Type.I64, 7);
    output.writeI64(this.createTime);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

