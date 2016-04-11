//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var TAdminLabel_ttypes = require('./TAdminLabel_types')
var TAdminLabelQueryData_ttypes = require('./TAdminLabelQueryData_types')
var TAdminPost_ttypes = require('./TAdminPost_types')
var TAdminActivityApply_ttypes = require('./TAdminActivityApply_types')
var TAdminComment_ttypes = require('./TAdminComment_types')
var TAdminCommentQueryData_ttypes = require('./TAdminCommentQueryData_types')
var TAdminReason_ttypes = require('./TAdminReason_types')
var TAdminCityPost_ttypes = require('./TAdminCityPost_types')
var TAdminPostQueryData_ttypes = require('./TAdminPostQueryData_types')
var TAdminPostInform_ttypes = require('./TAdminPostInform_types')


var ttypes = require('./SocialAdminService_types');
//HELPER FUNCTIONS AND STRUCTURES

ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_args = function(args) {
  this.postId = null;
  if (args) {
    if (args.postId !== undefined) {
      this.postId = args.postId;
    }
  }
};
ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_args.prototype = {};
ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_args.prototype.read = function(input) {
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

ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_args');
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 1);
    output.writeI32(this.postId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result.prototype = {};
ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result.prototype.read = function(input) {
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

ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceDealWithLegitimateClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ISocialAdminServiceDealWithLegitimateClient.prototype = {};
ISocialAdminServiceDealWithLegitimateClient.prototype.seqid = function() { return this._seqid; }
ISocialAdminServiceDealWithLegitimateClient.prototype.new_seqid = function() { return this._seqid += 1; }
ISocialAdminServiceDealWithLegitimateClient.prototype.dealWithLegitimate = function(postId, callback) {
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
    this.send_dealWithLegitimate(postId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_dealWithLegitimate(postId);
  }
};

ISocialAdminServiceDealWithLegitimateClient.prototype.send_dealWithLegitimate = function(postId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('dealWithLegitimate', Thrift.MessageType.CALL, this.seqid());
  var args = new ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_args();
  args.postId = postId;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ISocialAdminServiceDealWithLegitimateClient.prototype.recv_dealWithLegitimate = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('dealWithLegitimate failed: unknown result');
};
ISocialAdminServiceDealWithLegitimateProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
ISocialAdminServiceDealWithLegitimateProcessor.prototype.process = function(input, output) {
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

ISocialAdminServiceDealWithLegitimateProcessor.prototype.process_dealWithLegitimate = function(seqid, input, output) {
  var args = new ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.dealWithLegitimate.length === 1) {
    Q.fcall(this._handler.dealWithLegitimate, args.postId)
      .then(function(result) {
        var result = new ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result({success: result});
        output.writeMessageBegin("dealWithLegitimate", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result(err);
        output.writeMessageBegin("dealWithLegitimate", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.dealWithLegitimate(args.postId,  function (err, result) {
      var result = new ISocialAdminServiceDealWithLegitimate_dealWithLegitimate_result((err != null ? err : {success: result}));
      output.writeMessageBegin("dealWithLegitimate", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

