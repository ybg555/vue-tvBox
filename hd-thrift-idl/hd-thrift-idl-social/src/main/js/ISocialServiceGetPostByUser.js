//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ISocialServiceGetPostByUser_getPostByUser_args = function(args) {
  this.userId = null;
  this.currentPage = null;
  this.pageSize = null;
  if (args) {
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.currentPage !== undefined) {
      this.currentPage = args.currentPage;
    }
    if (args.pageSize !== undefined) {
      this.pageSize = args.pageSize;
    }
  }
};
ISocialServiceGetPostByUser_getPostByUser_args.prototype = {};
ISocialServiceGetPostByUser_getPostByUser_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.userId = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.currentPage = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
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

ISocialServiceGetPostByUser_getPostByUser_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetPostByUser_getPostByUser_args');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.I64, 1);
    output.writeI64(this.userId);
    output.writeFieldEnd();
  }
  if (this.currentPage !== null && this.currentPage !== undefined) {
    output.writeFieldBegin('currentPage', Thrift.Type.I32, 2);
    output.writeI32(this.currentPage);
    output.writeFieldEnd();
  }
  if (this.pageSize !== null && this.pageSize !== undefined) {
    output.writeFieldBegin('pageSize', Thrift.Type.I32, 3);
    output.writeI32(this.pageSize);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetPostByUser_getPostByUser_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceGetPostByUser_getPostByUser_result.prototype = {};
ISocialServiceGetPostByUser_getPostByUser_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.success = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new TPost();
          elem22.read(input);
          this.success.push(elem22);
        }
        input.readListEnd();
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

ISocialServiceGetPostByUser_getPostByUser_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetPostByUser_getPostByUser_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter23 in this.success)
    {
      if (this.success.hasOwnProperty(iter23))
      {
        iter23 = this.success[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetPostByUserClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ISocialServiceGetPostByUserClient.prototype = {};
ISocialServiceGetPostByUserClient.prototype.getPostByUser = function(userId, currentPage, pageSize, callback) {
  this.send_getPostByUser(userId, currentPage, pageSize, callback); 
  if (!callback) {
    return this.recv_getPostByUser();
  }
};

ISocialServiceGetPostByUserClient.prototype.send_getPostByUser = function(userId, currentPage, pageSize, callback) {
  this.output.writeMessageBegin('getPostByUser', Thrift.MessageType.CALL, this.seqid);
  var args = new ISocialServiceGetPostByUser_getPostByUser_args();
  args.userId = userId;
  args.currentPage = currentPage;
  args.pageSize = pageSize;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getPostByUser();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ISocialServiceGetPostByUserClient.prototype.recv_getPostByUser = function() {
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
  var result = new ISocialServiceGetPostByUser_getPostByUser_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getPostByUser failed: unknown result';
};
