//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ISocialAdminServiceGetAdminReasonList_getAdminReasonList_args = function(args) {
};
ISocialAdminServiceGetAdminReasonList_getAdminReasonList_args.prototype = {};
ISocialAdminServiceGetAdminReasonList_getAdminReasonList_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ISocialAdminServiceGetAdminReasonList_getAdminReasonList_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceGetAdminReasonList_getAdminReasonList_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceGetAdminReasonList_getAdminReasonList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialAdminServiceGetAdminReasonList_getAdminReasonList_result.prototype = {};
ISocialAdminServiceGetAdminReasonList_getAdminReasonList_result.prototype.read = function(input) {
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
        var _size24 = 0;
        var _rtmp328;
        this.success = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = new TAdminReason();
          elem30.read(input);
          this.success.push(elem30);
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

ISocialAdminServiceGetAdminReasonList_getAdminReasonList_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceGetAdminReasonList_getAdminReasonList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter31 in this.success)
    {
      if (this.success.hasOwnProperty(iter31))
      {
        iter31 = this.success[iter31];
        iter31.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceGetAdminReasonListClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ISocialAdminServiceGetAdminReasonListClient.prototype = {};
ISocialAdminServiceGetAdminReasonListClient.prototype.getAdminReasonList = function(callback) {
  this.send_getAdminReasonList(callback); 
  if (!callback) {
    return this.recv_getAdminReasonList();
  }
};

ISocialAdminServiceGetAdminReasonListClient.prototype.send_getAdminReasonList = function(callback) {
  this.output.writeMessageBegin('getAdminReasonList', Thrift.MessageType.CALL, this.seqid);
  var args = new ISocialAdminServiceGetAdminReasonList_getAdminReasonList_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getAdminReasonList();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ISocialAdminServiceGetAdminReasonListClient.prototype.recv_getAdminReasonList = function() {
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
  var result = new ISocialAdminServiceGetAdminReasonList_getAdminReasonList_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getAdminReasonList failed: unknown result';
};
