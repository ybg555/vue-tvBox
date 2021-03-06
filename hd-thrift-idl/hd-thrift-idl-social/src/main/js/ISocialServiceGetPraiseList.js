//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ISocialServiceGetPraiseList_getPraiseList_args = function(args) {
  this.postId = null;
  this.currentPage = null;
  this.pageSize = null;
  if (args) {
    if (args.postId !== undefined) {
      this.postId = args.postId;
    }
    if (args.currentPage !== undefined) {
      this.currentPage = args.currentPage;
    }
    if (args.pageSize !== undefined) {
      this.pageSize = args.pageSize;
    }
  }
};
ISocialServiceGetPraiseList_getPraiseList_args.prototype = {};
ISocialServiceGetPraiseList_getPraiseList_args.prototype.read = function(input) {
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
        this.postId = input.readI32().value;
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

ISocialServiceGetPraiseList_getPraiseList_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetPraiseList_getPraiseList_args');
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 1);
    output.writeI32(this.postId);
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

ISocialServiceGetPraiseList_getPraiseList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceGetPraiseList_getPraiseList_result.prototype = {};
ISocialServiceGetPraiseList_getPraiseList_result.prototype.read = function(input) {
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
        var _size40 = 0;
        var _rtmp344;
        this.success = [];
        var _etype43 = 0;
        _rtmp344 = input.readListBegin();
        _etype43 = _rtmp344.etype;
        _size40 = _rtmp344.size;
        for (var _i45 = 0; _i45 < _size40; ++_i45)
        {
          var elem46 = null;
          elem46 = new TPraise();
          elem46.read(input);
          this.success.push(elem46);
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

ISocialServiceGetPraiseList_getPraiseList_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetPraiseList_getPraiseList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter47 in this.success)
    {
      if (this.success.hasOwnProperty(iter47))
      {
        iter47 = this.success[iter47];
        iter47.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetPraiseListClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ISocialServiceGetPraiseListClient.prototype = {};
ISocialServiceGetPraiseListClient.prototype.getPraiseList = function(postId, currentPage, pageSize, callback) {
  this.send_getPraiseList(postId, currentPage, pageSize, callback); 
  if (!callback) {
    return this.recv_getPraiseList();
  }
};

ISocialServiceGetPraiseListClient.prototype.send_getPraiseList = function(postId, currentPage, pageSize, callback) {
  this.output.writeMessageBegin('getPraiseList', Thrift.MessageType.CALL, this.seqid);
  var args = new ISocialServiceGetPraiseList_getPraiseList_args();
  args.postId = postId;
  args.currentPage = currentPage;
  args.pageSize = pageSize;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getPraiseList();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ISocialServiceGetPraiseListClient.prototype.recv_getPraiseList = function() {
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
  var result = new ISocialServiceGetPraiseList_getPraiseList_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getPraiseList failed: unknown result';
};
