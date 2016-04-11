//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ISocialAdminServiceAddAdminComment_addAdminComment_args = function(args) {
  this.comment = null;
  if (args) {
    if (args.comment !== undefined) {
      this.comment = args.comment;
    }
  }
};
ISocialAdminServiceAddAdminComment_addAdminComment_args.prototype = {};
ISocialAdminServiceAddAdminComment_addAdminComment_args.prototype.read = function(input) {
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
        this.comment = new TAdminComment();
        this.comment.read(input);
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

ISocialAdminServiceAddAdminComment_addAdminComment_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceAddAdminComment_addAdminComment_args');
  if (this.comment !== null && this.comment !== undefined) {
    output.writeFieldBegin('comment', Thrift.Type.STRUCT, 1);
    this.comment.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceAddAdminComment_addAdminComment_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialAdminServiceAddAdminComment_addAdminComment_result.prototype = {};
ISocialAdminServiceAddAdminComment_addAdminComment_result.prototype.read = function(input) {
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

ISocialAdminServiceAddAdminComment_addAdminComment_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceAddAdminComment_addAdminComment_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceAddAdminCommentClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ISocialAdminServiceAddAdminCommentClient.prototype = {};
ISocialAdminServiceAddAdminCommentClient.prototype.addAdminComment = function(comment, callback) {
  this.send_addAdminComment(comment, callback); 
  if (!callback) {
    return this.recv_addAdminComment();
  }
};

ISocialAdminServiceAddAdminCommentClient.prototype.send_addAdminComment = function(comment, callback) {
  this.output.writeMessageBegin('addAdminComment', Thrift.MessageType.CALL, this.seqid);
  var args = new ISocialAdminServiceAddAdminComment_addAdminComment_args();
  args.comment = comment;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_addAdminComment();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ISocialAdminServiceAddAdminCommentClient.prototype.recv_addAdminComment = function() {
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
  var result = new ISocialAdminServiceAddAdminComment_addAdminComment_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'addAdminComment failed: unknown result';
};
