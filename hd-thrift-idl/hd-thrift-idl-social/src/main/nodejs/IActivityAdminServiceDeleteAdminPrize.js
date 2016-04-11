//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var TAdminActivityQueryData_ttypes = require('./TAdminActivityQueryData_types')
var TActivity_ttypes = require('./TActivity_types')
var TAdminPostQueryData_ttypes = require('./TAdminPostQueryData_types')
var TAdminPrizeQueryData_ttypes = require('./TAdminPrizeQueryData_types')


var ttypes = require('./ActivityAdminService_types');
//HELPER FUNCTIONS AND STRUCTURES

IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_args = function(args) {
  this.activityId = null;
  this.postId = null;
  if (args) {
    if (args.activityId !== undefined) {
      this.activityId = args.activityId;
    }
    if (args.postId !== undefined) {
      this.postId = args.postId;
    }
  }
};
IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_args.prototype = {};
IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_args.prototype.read = function(input) {
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
        this.activityId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.postId = input.readI32();
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

IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_args.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_args');
  if (this.activityId !== null && this.activityId !== undefined) {
    output.writeFieldBegin('activityId', Thrift.Type.I32, 1);
    output.writeI32(this.activityId);
    output.writeFieldEnd();
  }
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 2);
    output.writeI32(this.postId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result.prototype = {};
IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result.prototype.read = function(input) {
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

IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceDeleteAdminPrizeClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
IActivityAdminServiceDeleteAdminPrizeClient.prototype = {};
IActivityAdminServiceDeleteAdminPrizeClient.prototype.seqid = function() { return this._seqid; }
IActivityAdminServiceDeleteAdminPrizeClient.prototype.new_seqid = function() { return this._seqid += 1; }
IActivityAdminServiceDeleteAdminPrizeClient.prototype.deleteAdminPrize = function(activityId, postId, callback) {
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
    this.send_deleteAdminPrize(activityId, postId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_deleteAdminPrize(activityId, postId);
  }
};

IActivityAdminServiceDeleteAdminPrizeClient.prototype.send_deleteAdminPrize = function(activityId, postId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deleteAdminPrize', Thrift.MessageType.CALL, this.seqid());
  var args = new IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_args();
  args.activityId = activityId;
  args.postId = postId;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IActivityAdminServiceDeleteAdminPrizeClient.prototype.recv_deleteAdminPrize = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('deleteAdminPrize failed: unknown result');
};
IActivityAdminServiceDeleteAdminPrizeProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
IActivityAdminServiceDeleteAdminPrizeProcessor.prototype.process = function(input, output) {
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

IActivityAdminServiceDeleteAdminPrizeProcessor.prototype.process_deleteAdminPrize = function(seqid, input, output) {
  var args = new IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.deleteAdminPrize.length === 2) {
    Q.fcall(this._handler.deleteAdminPrize, args.activityId, args.postId)
      .then(function(result) {
        var result = new IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result({success: result});
        output.writeMessageBegin("deleteAdminPrize", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result(err);
        output.writeMessageBegin("deleteAdminPrize", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.deleteAdminPrize(args.activityId, args.postId,  function (err, result) {
      var result = new IActivityAdminServiceDeleteAdminPrize_deleteAdminPrize_result((err != null ? err : {success: result}));
      output.writeMessageBegin("deleteAdminPrize", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

