//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

IVoteServiceGetVotedPost_getVotedPost_args = function(args) {
  this.params = null;
  if (args) {
    if (args.params !== undefined) {
      this.params = args.params;
    }
  }
};
IVoteServiceGetVotedPost_getVotedPost_args.prototype = {};
IVoteServiceGetVotedPost_getVotedPost_args.prototype.read = function(input) {
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
        this.params = input.readString().value;
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

IVoteServiceGetVotedPost_getVotedPost_args.prototype.write = function(output) {
  output.writeStructBegin('IVoteServiceGetVotedPost_getVotedPost_args');
  if (this.params !== null && this.params !== undefined) {
    output.writeFieldBegin('params', Thrift.Type.STRING, 1);
    output.writeString(this.params);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IVoteServiceGetVotedPost_getVotedPost_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IVoteServiceGetVotedPost_getVotedPost_result.prototype = {};
IVoteServiceGetVotedPost_getVotedPost_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString().value;
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

IVoteServiceGetVotedPost_getVotedPost_result.prototype.write = function(output) {
  output.writeStructBegin('IVoteServiceGetVotedPost_getVotedPost_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IVoteServiceGetVotedPostClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
IVoteServiceGetVotedPostClient.prototype = {};
IVoteServiceGetVotedPostClient.prototype.getVotedPost = function(params, callback) {
  this.send_getVotedPost(params, callback); 
  if (!callback) {
    return this.recv_getVotedPost();
  }
};

IVoteServiceGetVotedPostClient.prototype.send_getVotedPost = function(params, callback) {
  this.output.writeMessageBegin('getVotedPost', Thrift.MessageType.CALL, this.seqid);
  var args = new IVoteServiceGetVotedPost_getVotedPost_args();
  args.params = params;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getVotedPost();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

IVoteServiceGetVotedPostClient.prototype.recv_getVotedPost = function() {
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
  var result = new IVoteServiceGetVotedPost_getVotedPost_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getVotedPost failed: unknown result';
};
