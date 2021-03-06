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

ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_args = function(args) {
  this.postId = null;
  if (args) {
    if (args.postId !== undefined) {
      this.postId = args.postId;
    }
  }
};
ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_args.prototype = {};
ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_args.prototype.read = function(input) {
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

ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_args');
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 1);
    output.writeI32(this.postId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result.prototype = {};
ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size32 = 0;
        var _rtmp336;
        this.success = [];
        var _etype35 = 0;
        _rtmp336 = input.readListBegin();
        _etype35 = _rtmp336.etype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var elem38 = null;
          elem38 = new TAdminPostInform_ttypes.TAdminPostInform();
          elem38.read(input);
          this.success.push(elem38);
        }
        input.readListEnd();
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

ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter39 in this.success)
    {
      if (this.success.hasOwnProperty(iter39))
      {
        iter39 = this.success[iter39];
        iter39.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialAdminServiceGetAdminPostInformListClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ISocialAdminServiceGetAdminPostInformListClient.prototype = {};
ISocialAdminServiceGetAdminPostInformListClient.prototype.seqid = function() { return this._seqid; }
ISocialAdminServiceGetAdminPostInformListClient.prototype.new_seqid = function() { return this._seqid += 1; }
ISocialAdminServiceGetAdminPostInformListClient.prototype.getAdminPostInformList = function(postId, callback) {
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
    this.send_getAdminPostInformList(postId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getAdminPostInformList(postId);
  }
};

ISocialAdminServiceGetAdminPostInformListClient.prototype.send_getAdminPostInformList = function(postId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getAdminPostInformList', Thrift.MessageType.CALL, this.seqid());
  var args = new ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_args();
  args.postId = postId;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ISocialAdminServiceGetAdminPostInformListClient.prototype.recv_getAdminPostInformList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getAdminPostInformList failed: unknown result');
};
ISocialAdminServiceGetAdminPostInformListProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
ISocialAdminServiceGetAdminPostInformListProcessor.prototype.process = function(input, output) {
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

ISocialAdminServiceGetAdminPostInformListProcessor.prototype.process_getAdminPostInformList = function(seqid, input, output) {
  var args = new ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getAdminPostInformList.length === 1) {
    Q.fcall(this._handler.getAdminPostInformList, args.postId)
      .then(function(result) {
        var result = new ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result({success: result});
        output.writeMessageBegin("getAdminPostInformList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result(err);
        output.writeMessageBegin("getAdminPostInformList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getAdminPostInformList(args.postId,  function (err, result) {
      var result = new ISocialAdminServiceGetAdminPostInformList_getAdminPostInformList_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getAdminPostInformList", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

