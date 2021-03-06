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

ISocialServiceGetPostById_getPostById_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
ISocialServiceGetPostById_getPostById_args.prototype = {};
ISocialServiceGetPostById_getPostById_args.prototype.read = function(input) {
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
        this.id = input.readI32();
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

ISocialServiceGetPostById_getPostById_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetPostById_getPostById_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetPostById_getPostById_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceGetPostById_getPostById_result.prototype = {};
ISocialServiceGetPostById_getPostById_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new TPost_ttypes.TPost();
        this.success.read(input);
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

ISocialServiceGetPostById_getPostById_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetPostById_getPostById_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetPostByIdClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ISocialServiceGetPostByIdClient.prototype = {};
ISocialServiceGetPostByIdClient.prototype.seqid = function() { return this._seqid; }
ISocialServiceGetPostByIdClient.prototype.new_seqid = function() { return this._seqid += 1; }
ISocialServiceGetPostByIdClient.prototype.getPostById = function(id, callback) {
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
    this.send_getPostById(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPostById(id);
  }
};

ISocialServiceGetPostByIdClient.prototype.send_getPostById = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPostById', Thrift.MessageType.CALL, this.seqid());
  var args = new ISocialServiceGetPostById_getPostById_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ISocialServiceGetPostByIdClient.prototype.recv_getPostById = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ISocialServiceGetPostById_getPostById_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPostById failed: unknown result');
};
ISocialServiceGetPostByIdProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
ISocialServiceGetPostByIdProcessor.prototype.process = function(input, output) {
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

ISocialServiceGetPostByIdProcessor.prototype.process_getPostById = function(seqid, input, output) {
  var args = new ISocialServiceGetPostById_getPostById_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPostById.length === 1) {
    Q.fcall(this._handler.getPostById, args.id)
      .then(function(result) {
        var result = new ISocialServiceGetPostById_getPostById_result({success: result});
        output.writeMessageBegin("getPostById", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ISocialServiceGetPostById_getPostById_result(err);
        output.writeMessageBegin("getPostById", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPostById(args.id,  function (err, result) {
      var result = new ISocialServiceGetPostById_getPostById_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getPostById", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

