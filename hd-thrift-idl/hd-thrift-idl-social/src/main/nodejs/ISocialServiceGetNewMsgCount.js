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

ISocialServiceGetNewMsgCount_getNewMsgCount_args = function(args) {
};
ISocialServiceGetNewMsgCount_getNewMsgCount_args.prototype = {};
ISocialServiceGetNewMsgCount_getNewMsgCount_args.prototype.read = function(input) {
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

ISocialServiceGetNewMsgCount_getNewMsgCount_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetNewMsgCount_getNewMsgCount_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetNewMsgCount_getNewMsgCount_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceGetNewMsgCount_getNewMsgCount_result.prototype = {};
ISocialServiceGetNewMsgCount_getNewMsgCount_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
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

ISocialServiceGetNewMsgCount_getNewMsgCount_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetNewMsgCount_getNewMsgCount_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetNewMsgCountClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ISocialServiceGetNewMsgCountClient.prototype = {};
ISocialServiceGetNewMsgCountClient.prototype.seqid = function() { return this._seqid; }
ISocialServiceGetNewMsgCountClient.prototype.new_seqid = function() { return this._seqid += 1; }
ISocialServiceGetNewMsgCountClient.prototype.getNewMsgCount = function(callback) {
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
    this.send_getNewMsgCount();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getNewMsgCount();
  }
};

ISocialServiceGetNewMsgCountClient.prototype.send_getNewMsgCount = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getNewMsgCount', Thrift.MessageType.CALL, this.seqid());
  var args = new ISocialServiceGetNewMsgCount_getNewMsgCount_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ISocialServiceGetNewMsgCountClient.prototype.recv_getNewMsgCount = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ISocialServiceGetNewMsgCount_getNewMsgCount_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getNewMsgCount failed: unknown result');
};
ISocialServiceGetNewMsgCountProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
ISocialServiceGetNewMsgCountProcessor.prototype.process = function(input, output) {
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

ISocialServiceGetNewMsgCountProcessor.prototype.process_getNewMsgCount = function(seqid, input, output) {
  var args = new ISocialServiceGetNewMsgCount_getNewMsgCount_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getNewMsgCount.length === 0) {
    Q.fcall(this._handler.getNewMsgCount)
      .then(function(result) {
        var result = new ISocialServiceGetNewMsgCount_getNewMsgCount_result({success: result});
        output.writeMessageBegin("getNewMsgCount", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ISocialServiceGetNewMsgCount_getNewMsgCount_result(err);
        output.writeMessageBegin("getNewMsgCount", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getNewMsgCount( function (err, result) {
      var result = new ISocialServiceGetNewMsgCount_getNewMsgCount_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getNewMsgCount", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

