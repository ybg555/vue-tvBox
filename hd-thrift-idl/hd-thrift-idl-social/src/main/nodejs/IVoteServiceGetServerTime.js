//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./VoteService_types');
//HELPER FUNCTIONS AND STRUCTURES

IVoteServiceGetServerTime_getServerTime_args = function(args) {
};
IVoteServiceGetServerTime_getServerTime_args.prototype = {};
IVoteServiceGetServerTime_getServerTime_args.prototype.read = function(input) {
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

IVoteServiceGetServerTime_getServerTime_args.prototype.write = function(output) {
  output.writeStructBegin('IVoteServiceGetServerTime_getServerTime_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IVoteServiceGetServerTime_getServerTime_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IVoteServiceGetServerTime_getServerTime_result.prototype = {};
IVoteServiceGetServerTime_getServerTime_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.success = input.readI64();
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

IVoteServiceGetServerTime_getServerTime_result.prototype.write = function(output) {
  output.writeStructBegin('IVoteServiceGetServerTime_getServerTime_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I64, 0);
    output.writeI64(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IVoteServiceGetServerTimeClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
IVoteServiceGetServerTimeClient.prototype = {};
IVoteServiceGetServerTimeClient.prototype.seqid = function() { return this._seqid; }
IVoteServiceGetServerTimeClient.prototype.new_seqid = function() { return this._seqid += 1; }
IVoteServiceGetServerTimeClient.prototype.getServerTime = function(callback) {
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
    this.send_getServerTime();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getServerTime();
  }
};

IVoteServiceGetServerTimeClient.prototype.send_getServerTime = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getServerTime', Thrift.MessageType.CALL, this.seqid());
  var args = new IVoteServiceGetServerTime_getServerTime_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IVoteServiceGetServerTimeClient.prototype.recv_getServerTime = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IVoteServiceGetServerTime_getServerTime_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getServerTime failed: unknown result');
};
IVoteServiceGetServerTimeProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
IVoteServiceGetServerTimeProcessor.prototype.process = function(input, output) {
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

IVoteServiceGetServerTimeProcessor.prototype.process_getServerTime = function(seqid, input, output) {
  var args = new IVoteServiceGetServerTime_getServerTime_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getServerTime.length === 0) {
    Q.fcall(this._handler.getServerTime)
      .then(function(result) {
        var result = new IVoteServiceGetServerTime_getServerTime_result({success: result});
        output.writeMessageBegin("getServerTime", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new IVoteServiceGetServerTime_getServerTime_result(err);
        output.writeMessageBegin("getServerTime", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getServerTime( function (err, result) {
      var result = new IVoteServiceGetServerTime_getServerTime_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getServerTime", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

