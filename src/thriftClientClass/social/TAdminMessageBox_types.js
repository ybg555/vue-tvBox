var Thrift = require('../../Thrift.js');var TAdminMessageBox ;//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TAdminMessageBox = function(args) {
  this.id = null;
  this.type = null;
  this.postId = null;
  this.userId = null;
  this.nickName = null;
  this.avatarUrl = null;
  this.toUserId = null;
  this.status = null;
  this.createTime = null;
  this.content = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.type !== undefined) {
      this.type = args.type;
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
    if (args.toUserId !== undefined) {
      this.toUserId = args.toUserId;
    }
    if (args.status !== undefined) {
      this.status = args.status;
    }
    if (args.createTime !== undefined) {
      this.createTime = args.createTime;
    }
    if (args.content !== undefined) {
      this.content = args.content;
    }
  }
};
TAdminMessageBox.prototype = {};
TAdminMessageBox.prototype.read = function(input) {
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
        this.id = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.postId = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.userId = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.nickName = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.avatarUrl = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.toUserId = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I64) {
        this.createTime = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readString().value;
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

TAdminMessageBox.prototype.write = function(output) {
  output.writeStructBegin('TAdminMessageBox');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 2);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 3);
    output.writeI32(this.postId);
    output.writeFieldEnd();
  }
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.I64, 4);
    output.writeI64(this.userId);
    output.writeFieldEnd();
  }
  if (this.nickName !== null && this.nickName !== undefined) {
    output.writeFieldBegin('nickName', Thrift.Type.STRING, 5);
    output.writeString(this.nickName);
    output.writeFieldEnd();
  }
  if (this.avatarUrl !== null && this.avatarUrl !== undefined) {
    output.writeFieldBegin('avatarUrl', Thrift.Type.STRING, 6);
    output.writeString(this.avatarUrl);
    output.writeFieldEnd();
  }
  if (this.toUserId !== null && this.toUserId !== undefined) {
    output.writeFieldBegin('toUserId', Thrift.Type.I64, 7);
    output.writeI64(this.toUserId);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 8);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.createTime !== null && this.createTime !== undefined) {
    output.writeFieldBegin('createTime', Thrift.Type.I64, 9);
    output.writeI64(this.createTime);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 10);
    output.writeString(this.content);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

;module.exports = { 'TAdminMessageBox' : TAdminMessageBox }