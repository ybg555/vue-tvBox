//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ISocialServiceGetReasonList_getReasonList_args = function(args) {
};
ISocialServiceGetReasonList_getReasonList_args.prototype = {};
ISocialServiceGetReasonList_getReasonList_args.prototype.read = function(input) {
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

ISocialServiceGetReasonList_getReasonList_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetReasonList_getReasonList_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetReasonList_getReasonList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceGetReasonList_getReasonList_result.prototype = {};
ISocialServiceGetReasonList_getReasonList_result.prototype.read = function(input) {
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
        var _size48 = 0;
        var _rtmp352;
        this.success = [];
        var _etype51 = 0;
        _rtmp352 = input.readListBegin();
        _etype51 = _rtmp352.etype;
        _size48 = _rtmp352.size;
        for (var _i53 = 0; _i53 < _size48; ++_i53)
        {
          var elem54 = null;
          elem54 = new TReason();
          elem54.read(input);
          this.success.push(elem54);
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

ISocialServiceGetReasonList_getReasonList_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetReasonList_getReasonList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter55 in this.success)
    {
      if (this.success.hasOwnProperty(iter55))
      {
        iter55 = this.success[iter55];
        iter55.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetReasonListClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ISocialServiceGetReasonListClient.prototype = {};
ISocialServiceGetReasonListClient.prototype.getReasonList = function(callback) {
  this.send_getReasonList(callback); 
  if (!callback) {
    return this.recv_getReasonList();
  }
};

ISocialServiceGetReasonListClient.prototype.send_getReasonList = function(callback) {
  this.output.writeMessageBegin('getReasonList', Thrift.MessageType.CALL, this.seqid);
  var args = new ISocialServiceGetReasonList_getReasonList_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getReasonList();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ISocialServiceGetReasonListClient.prototype.recv_getReasonList = function() {
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
  var result = new ISocialServiceGetReasonList_getReasonList_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getReasonList failed: unknown result';
};