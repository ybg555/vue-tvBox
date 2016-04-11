//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var TLabel_ttypes = require('./TLabel_types')
var TComment_ttypes = require('./TComment_types')
var TMessageBox_ttypes = require('./TMessageBox_types')
var TPost_ttypes = require('./TPost_types')
var TPraise_ttypes = require('./TPraise_types')
var TReason_ttypes = require('./TReason_types')
var TActivityApply_ttypes = require('./TActivityApply_types')


var ttypes = require('./SocialService_types');
//HELPER FUNCTIONS AND STRUCTURES

ISocialServiceCancelActivityApply_cancelActivityApply_args = function(args) {
  this.postId = null;
  if (args) {
    if (args.postId !== undefined) {
      this.postId = args.postId;
    }
  }
};
ISocialServiceCancelActivityApply_cancelActivityApply_args.prototype = {};
ISocialServiceCancelActivityApply_cancelActivityApply_args.prototype.read = function(input) {
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
        this.postId = input.readI32();
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

ISocialServiceCancelActivityApply_cancelActivityApply_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceCancelActivityApply_cancelActivityApply_args');
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 1);
    output.writeI32(this.postId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceCancelActivityApply_cancelActivityApply_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceCancelActivityApply_cancelActivityApply_result.prototype = {};
ISocialServiceCancelActivityApply_cancelActivityApply_result.prototype.read = function(input) {
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
        this.success = input.readBool();
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

ISocialServiceCancelActivityApply_cancelActivityApply_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceCancelActivityApply_cancelActivityApply_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceCancelActivityApplyClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ISocialServiceCancelActivityApplyClient.prototype = {};
ISocialServiceCancelActivityApplyClient.prototype.seqid = function() { return this._seqid; }
ISocialServiceCancelActivityApplyClient.prototype.new_seqid = function() { return this._seqid += 1; }
ISocialServiceCancelActivityApplyClient.prototype.cancelActivityApply = function(postId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_cancelActivityApply(postId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_cancelActivityApply(postId);
  }
};

ISocialServiceCancelActivityApplyClient.prototype.send_cancelActivityApply = function(postId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('cancelActivityApply', Thrift.MessageType.CALL, this.seqid());
  var args = new ISocialServiceCancelActivityApply_cancelActivityApply_args();
  args.postId = postId;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ISocialServiceCancelActivityApplyClient.prototype.recv_cancelActivityApply = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ISocialServiceCancelActivityApply_cancelActivityApply_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('cancelActivityApply failed: unknown result');
};
ISocialServiceCancelActivityApplyProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
ISocialServiceCancelActivityApplyProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

ISocialServiceCancelActivityApplyProcessor.prototype.process_cancelActivityApply = function(seqid, input, output) {
  var args = new ISocialServiceCancelActivityApply_cancelActivityApply_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.cancelActivityApply.length === 1) {
    Q.fcall(this._handler.cancelActivityApply, args.postId)
      .then(function(result) {
        var result = new ISocialServiceCancelActivityApply_cancelActivityApply_result({success: result});
        output.writeMessageBegin("cancelActivityApply", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ISocialServiceCancelActivityApply_cancelActivityApply_result(err);
        output.writeMessageBegin("cancelActivityApply", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.cancelActivityApply(args.postId,  function (err, result) {
      var result = new ISocialServiceCancelActivityApply_cancelActivityApply_result((err != null ? err : {success: result}));
      output.writeMessageBegin("cancelActivityApply", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

