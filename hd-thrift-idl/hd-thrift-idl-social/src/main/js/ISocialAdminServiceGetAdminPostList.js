//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ISocialAdminServiceGetAdminPostList_getAdminPostList_args = function(args) {
  this.content = null;
  this.mobile = null;
  this.nickName = null;
  this.objType = null;
  this.objId = null;
  this.createTimeStart = null;
  this.createTimeEnd = null;
  this.cityId = null;
  this.communityId = null;
  this.inform = null;
  this.currentPage = null;
  this.pageSize = null;
  if (args) {
    if (args.content !== undefined) {
      this.content = args.content;
    }
    if (args.mobile !== undefined) {
      this.mobile = args.mobile;
    }
    if (args.nickName !== undefined) {
      this.nickName = args.nickName;
    }
    if (args.objType !== undefined) {
      this.objType = args.objType;
    }
    if (args.objId !== undefined) {
      this.objId = args.objId;
    }
    if (args.createTimeStart !== undefined) {
      this.createTimeStart = args.createTimeStart;
    }
    if (args.createTimeEnd !== undefined) {
      this.createTimeEnd = args.createTimeEnd;
    }
    if (args.cityId !== undefined) {
      this.cityId = args.cityId;
    }
    if (args.communityId !== undefined) {
      this.communityId = args.communityId;
    }
    if (args.inform !== undefined) {
      this.inform = args.inform;
    }
    if (args.currentPage !== undefined) {
      this.currentPage = args.currentPage;
    }
    if (args.pageSize !== undefined) {
      this.pageSize = args.pageSize;
    }
  }
};
ISocialAdminServiceGetAdminPostList_getAdminPostList_args.prototype = {};
ISocialAdminServiceGetAdminPostList_getAdminPostList_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.mobile = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.nickName = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.objType = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.objId = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.createTimeStart = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.createTimeEnd = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.cityId = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.communityId = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I32) {
        this.inform = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.currentPage = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I32) {
        this.pageSize = input.readI32().value;
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

ISocialAdminServiceGetAdminPostList_getAdminPostList_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceGetAdminPostList_getAdminPostList_args');
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 1);
    output.writeString(this.content);
    output.writeFieldEnd();
  }
  if (this.mobile !== null && this.mobile !== undefined) {
    output.writeFieldBegin('mobile', Thrift.Type.STRING, 2);
    output.writeString(this.mobile);
    output.writeFieldEnd();
  }
  if (this.nickName !== null && this.nickName !== undefined) {
    output.writeFieldBegin('nickName', Thrift.Type.STRING, 3);
    output.writeString(this.nickName);
    output.writeFieldEnd();
  }
  if (this.objType !== null && this.objType !== undefined) {
    output.writeFieldBegin('objType', Thrift.Type.I32, 4);
    output.writeI32(this.objType);
    output.writeFieldEnd();
  }
  if (this.objId !== null && this.objId !== undefined) {
    output.writeFieldBegin('objId', Thrift.Type.I32, 5);
    output.writeI32(this.objId);
    output.writeFieldEnd();
  }
  if (this.createTimeStart !== null && this.createTimeStart !== undefined) {
    output.writeFieldBegin('createTimeStart', Thrift.Type.I64, 6);
    output.writeI64(this.createTimeStart);
    output.writeFieldEnd();
  }
  if (this.createTimeEnd !== null && this.createTimeEnd !== undefined) {
    output.writeFieldBegin('createTimeEnd', Thrift.Type.I64, 7);
    output.writeI64(this.createTimeEnd);
    output.writeFieldEnd();
  }
  if (this.cityId !== null && this.cityId !== undefined) {
    output.writeFieldBegin('cityId', Thrift.Type.I32, 8);
    output.writeI32(this.cityId);
    output.writeFieldEnd();
  }
  if (this.communityId !== null && this.communityId !== undefined) {
    output.writeFieldBegin('communityId', Thrift.Type.I32, 9);
    output.writeI32(this.communityId);
    output.writeFieldEnd();
  }
  if (this.inform !== null && this.inform !== undefined) {
    output.writeFieldBegin('inform', Thrift.Type.I32, 10);
    output.writeI32(this.inform);
    output.writeFieldEnd();
  }
  if (this.currentPage !== null && this.currentPage !== undefined) {
    output.writeFieldBegin('currentPage', Thrift.Type.I32, 11);
    output.writeI32(this.currentPage);
    output.writeFieldEnd();
  }
  if (this.pageSize !== null && this.pageSize !== undefined) {
    output.writeFieldBegin('pageSize', Thrift.Type.I32, 12);
    output.writeI32(this.pageSize);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceGetAdminPostList_getAdminPostList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialAdminServiceGetAdminPostList_getAdminPostList_result.prototype = {};
ISocialAdminServiceGetAdminPostList_getAdminPostList_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new TAdminPostQueryData();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ISocialAdminServiceGetAdminPostList_getAdminPostList_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceGetAdminPostList_getAdminPostList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceGetAdminPostListClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ISocialAdminServiceGetAdminPostListClient.prototype = {};
ISocialAdminServiceGetAdminPostListClient.prototype.getAdminPostList = function(content, mobile, nickName, objType, objId, createTimeStart, createTimeEnd, cityId, communityId, inform, currentPage, pageSize, callback) {
  this.send_getAdminPostList(content, mobile, nickName, objType, objId, createTimeStart, createTimeEnd, cityId, communityId, inform, currentPage, pageSize, callback); 
  if (!callback) {
    return this.recv_getAdminPostList();
  }
};

ISocialAdminServiceGetAdminPostListClient.prototype.send_getAdminPostList = function(content, mobile, nickName, objType, objId, createTimeStart, createTimeEnd, cityId, communityId, inform, currentPage, pageSize, callback) {
  this.output.writeMessageBegin('getAdminPostList', Thrift.MessageType.CALL, this.seqid);
  var args = new ISocialAdminServiceGetAdminPostList_getAdminPostList_args();
  args.content = content;
  args.mobile = mobile;
  args.nickName = nickName;
  args.objType = objType;
  args.objId = objId;
  args.createTimeStart = createTimeStart;
  args.createTimeEnd = createTimeEnd;
  args.cityId = cityId;
  args.communityId = communityId;
  args.inform = inform;
  args.currentPage = currentPage;
  args.pageSize = pageSize;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getAdminPostList();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ISocialAdminServiceGetAdminPostListClient.prototype.recv_getAdminPostList = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new ISocialAdminServiceGetAdminPostList_getAdminPostList_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getAdminPostList failed: unknown result';
};
