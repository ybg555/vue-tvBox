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

ISocialServiceGetPostByUserId_getPostByUserId_args = function(args) {
  this.params = null;
  if (args) {
    if (args.params !== undefined) {
      this.params = args.params;
    }
  }
};
ISocialServiceGetPostByUserId_getPostByUserId_args.prototype = {};
ISocialServiceGetPostByUserId_getPostByUserId_args.prototype.read = function(input) {
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
        this.params = input.readString();
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

ISocialServiceGetPostByUserId_getPostByUserId_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetPostByUserId_getPostByUserId_args');
  if (this.params !== null && this.params !== undefined) {
    output.writeFieldBegin('params', Thrift.Type.STRING, 1);
    output.writeString(this.params);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetPostByUserId_getPostByUserId_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceGetPostByUserId_getPostByUserId_result.prototype = {};
ISocialServiceGetPostByUserId_getPostByUserId_result.prototype.read = function(input) {
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
        this.success = input.readString();
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

ISocialServiceGetPostByUserId_getPostByUserId_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetPostByUserId_getPostByUserId_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetPostByUserIdClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ISocialServiceGetPostByUserIdClient.prototype = {};
ISocialServiceGetPostByUserIdClient.prototype.seqid = function() { return this._seqid; }
ISocialServiceGetPostByUserIdClient.prototype.new_seqid = function() { return this._seqid += 1; }
ISocialServiceGetPostByUserIdClient.prototype.getPostByUserId = function(params, callback) {
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
    this.send_getPostByUserId(params);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPostByUserId(params);
  }
};

ISocialServiceGetPostByUserIdClient.prototype.send_getPostByUserId = function(params) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPostByUserId', Thrift.MessageType.CALL, this.seqid());
  var args = new ISocialServiceGetPostByUserId_getPostByUserId_args();
  args.params = params;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ISocialServiceGetPostByUserIdClient.prototype.recv_getPostByUserId = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ISocialServiceGetPostByUserId_getPostByUserId_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPostByUserId failed: unknown result');
};
ISocialServiceGetPostByUserIdProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
ISocialServiceGetPostByUserIdProcessor.prototype.process = function(input, output) {
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

ISocialServiceGetPostByUserIdProcessor.prototype.process_getPostByUserId = function(seqid, input, output) {
  var args = new ISocialServiceGetPostByUserId_getPostByUserId_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPostByUserId.length === 1) {
    Q.fcall(this._handler.getPostByUserId, args.params)
      .then(function(result) {
        var result = new ISocialServiceGetPostByUserId_getPostByUserId_result({success: result});
        output.writeMessageBegin("getPostByUserId", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ISocialServiceGetPostByUserId_getPostByUserId_result(err);
        output.writeMessageBegin("getPostByUserId", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPostByUserId(args.params,  function (err, result) {
      var result = new ISocialServiceGetPostByUserId_getPostByUserId_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getPostByUserId", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}
