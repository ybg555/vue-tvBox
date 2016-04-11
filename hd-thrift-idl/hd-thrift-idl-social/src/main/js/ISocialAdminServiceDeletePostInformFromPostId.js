//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_args = function(args) {
  this.postId = null;
  if (args) {
    if (args.postId !== undefined) {
      this.postId = args.postId;
    }
  }
};
ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_args.prototype = {};
ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_args.prototype.read = function(input) {
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

ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_args');
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 1);
    output.writeI32(this.postId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_result.prototype = {};
ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_result.prototype.read = function(input) {
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

ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceDeletePostInformFromPostIdClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ISocialAdminServiceDeletePostInformFromPostIdClient.prototype = {};
ISocialAdminServiceDeletePostInformFromPostIdClient.prototype.deletePostInformFromPostId = function(postId, callback) {
  this.send_deletePostInformFromPostId(postId, callback); 
  if (!callback) {
    return this.recv_deletePostInformFromPostId();
  }
};

ISocialAdminServiceDeletePostInformFromPostIdClient.prototype.send_deletePostInformFromPostId = function(postId, callback) {
  this.output.writeMessageBegin('deletePostInformFromPostId', Thrift.MessageType.CALL, this.seqid);
  var args = new ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_args();
  args.postId = postId;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_deletePostInformFromPostId();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ISocialAdminServiceDeletePostInformFromPostIdClient.prototype.recv_deletePostInformFromPostId = function() {
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
  var result = new ISocialAdminServiceDeletePostInformFromPostId_deletePostInformFromPostId_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'deletePostInformFromPostId failed: unknown result';
};
