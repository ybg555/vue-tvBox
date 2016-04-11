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

ISocialServiceGetCommentList_getCommentList_args = function(args) {
  this.postId = null;
  this.currentPage = null;
  this.pageSize = null;
  if (args) {
    if (args.postId !== undefined) {
      this.postId = args.postId;
    }
    if (args.currentPage !== undefined) {
      this.currentPage = args.currentPage;
    }
    if (args.pageSize !== undefined) {
      this.pageSize = args.pageSize;
    }
  }
};
ISocialServiceGetCommentList_getCommentList_args.prototype = {};
ISocialServiceGetCommentList_getCommentList_args.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.currentPage = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.pageSize = input.readI32();
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

ISocialServiceGetCommentList_getCommentList_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetCommentList_getCommentList_args');
  if (this.postId !== null && this.postId !== undefined) {
    output.writeFieldBegin('postId', Thrift.Type.I32, 1);
    output.writeI32(this.postId);
    output.writeFieldEnd();
  }
  if (this.currentPage !== null && this.currentPage !== undefined) {
    output.writeFieldBegin('currentPage', Thrift.Type.I32, 2);
    output.writeI32(this.currentPage);
    output.writeFieldEnd();
  }
  if (this.pageSize !== null && this.pageSize !== undefined) {
    output.writeFieldBegin('pageSize', Thrift.Type.I32, 3);
    output.writeI32(this.pageSize);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetCommentList_getCommentList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceGetCommentList_getCommentList_result.prototype = {};
ISocialServiceGetCommentList_getCommentList_result.prototype.read = function(input) {
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
          elem38 = new TComment_ttypes.TComment();
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

ISocialServiceGetCommentList_getCommentList_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetCommentList_getCommentList_result');
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

ISocialServiceGetCommentListClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ISocialServiceGetCommentListClient.prototype = {};
ISocialServiceGetCommentListClient.prototype.seqid = function() { return this._seqid; }
ISocialServiceGetCommentListClient.prototype.new_seqid = function() { return this._seqid += 1; }
ISocialServiceGetCommentListClient.prototype.getCommentList = function(postId, currentPage, pageSize, callback) {
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
    this.send_getCommentList(postId, currentPage, pageSize);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getCommentList(postId, currentPage, pageSize);
  }
};

ISocialServiceGetCommentListClient.prototype.send_getCommentList = function(postId, currentPage, pageSize) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCommentList', Thrift.MessageType.CALL, this.seqid());
  var args = new ISocialServiceGetCommentList_getCommentList_args();
  args.postId = postId;
  args.currentPage = currentPage;
  args.pageSize = pageSize;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ISocialServiceGetCommentListClient.prototype.recv_getCommentList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ISocialServiceGetCommentList_getCommentList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCommentList failed: unknown result');
};
ISocialServiceGetCommentListProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
ISocialServiceGetCommentListProcessor.prototype.process = function(input, output) {
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

ISocialServiceGetCommentListProcessor.prototype.process_getCommentList = function(seqid, input, output) {
  var args = new ISocialServiceGetCommentList_getCommentList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getCommentList.length === 3) {
    Q.fcall(this._handler.getCommentList, args.postId, args.currentPage, args.pageSize)
      .then(function(result) {
        var result = new ISocialServiceGetCommentList_getCommentList_result({success: result});
        output.writeMessageBegin("getCommentList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ISocialServiceGetCommentList_getCommentList_result(err);
        output.writeMessageBegin("getCommentList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getCommentList(args.postId, args.currentPage, args.pageSize,  function (err, result) {
      var result = new ISocialServiceGetCommentList_getCommentList_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getCommentList", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}
