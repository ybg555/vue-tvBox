//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ISocialAdminServiceEditAdminLabel_editAdminLabel_args = function(args) {
  this.label = null;
  if (args) {
    if (args.label !== undefined) {
      this.label = args.label;
    }
  }
};
ISocialAdminServiceEditAdminLabel_editAdminLabel_args.prototype = {};
ISocialAdminServiceEditAdminLabel_editAdminLabel_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.label = new TAdminLabel();
        this.label.read(input);
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

ISocialAdminServiceEditAdminLabel_editAdminLabel_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceEditAdminLabel_editAdminLabel_args');
  if (this.label !== null && this.label !== undefined) {
    output.writeFieldBegin('label', Thrift.Type.STRUCT, 1);
    this.label.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceEditAdminLabel_editAdminLabel_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialAdminServiceEditAdminLabel_editAdminLabel_result.prototype = {};
ISocialAdminServiceEditAdminLabel_editAdminLabel_result.prototype.read = function(input) {
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

ISocialAdminServiceEditAdminLabel_editAdminLabel_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceEditAdminLabel_editAdminLabel_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceEditAdminLabelClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ISocialAdminServiceEditAdminLabelClient.prototype = {};
ISocialAdminServiceEditAdminLabelClient.prototype.editAdminLabel = function(label, callback) {
  this.send_editAdminLabel(label, callback); 
  if (!callback) {
    return this.recv_editAdminLabel();
  }
};

ISocialAdminServiceEditAdminLabelClient.prototype.send_editAdminLabel = function(label, callback) {
  this.output.writeMessageBegin('editAdminLabel', Thrift.MessageType.CALL, this.seqid);
  var args = new ISocialAdminServiceEditAdminLabel_editAdminLabel_args();
  args.label = label;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_editAdminLabel();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ISocialAdminServiceEditAdminLabelClient.prototype.recv_editAdminLabel = function() {
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
  var result = new ISocialAdminServiceEditAdminLabel_editAdminLabel_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'editAdminLabel failed: unknown result';
};