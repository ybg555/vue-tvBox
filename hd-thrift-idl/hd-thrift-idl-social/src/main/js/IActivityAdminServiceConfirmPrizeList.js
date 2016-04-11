//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

IActivityAdminServiceConfirmPrizeList_confirmPrizeList_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
IActivityAdminServiceConfirmPrizeList_confirmPrizeList_args.prototype = {};
IActivityAdminServiceConfirmPrizeList_confirmPrizeList_args.prototype.read = function(input) {
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

IActivityAdminServiceConfirmPrizeList_confirmPrizeList_args.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceConfirmPrizeList_confirmPrizeList_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceConfirmPrizeList_confirmPrizeList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IActivityAdminServiceConfirmPrizeList_confirmPrizeList_result.prototype = {};
IActivityAdminServiceConfirmPrizeList_confirmPrizeList_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool().value;
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

IActivityAdminServiceConfirmPrizeList_confirmPrizeList_result.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceConfirmPrizeList_confirmPrizeList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceConfirmPrizeListClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
IActivityAdminServiceConfirmPrizeListClient.prototype = {};
IActivityAdminServiceConfirmPrizeListClient.prototype.confirmPrizeList = function(id, callback) {
  this.send_confirmPrizeList(id, callback); 
  if (!callback) {
    return this.recv_confirmPrizeList();
  }
};

IActivityAdminServiceConfirmPrizeListClient.prototype.send_confirmPrizeList = function(id, callback) {
  this.output.writeMessageBegin('confirmPrizeList', Thrift.MessageType.CALL, this.seqid);
  var args = new IActivityAdminServiceConfirmPrizeList_confirmPrizeList_args();
  args.id = id;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_confirmPrizeList();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

IActivityAdminServiceConfirmPrizeListClient.prototype.recv_confirmPrizeList = function() {
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
  var result = new IActivityAdminServiceConfirmPrizeList_confirmPrizeList_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'confirmPrizeList failed: unknown result';
};
