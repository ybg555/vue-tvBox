//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./ActivityService_types');
//HELPER FUNCTIONS AND STRUCTURES

IActivityServiceGetActivityList_getActivityList_args = function(args) {
  this.communityId = null;
  this.currentPage = null;
  this.pageSize = null;
  if (args) {
    if (args.communityId !== undefined) {
      this.communityId = args.communityId;
    }
    if (args.currentPage !== undefined) {
      this.currentPage = args.currentPage;
    }
    if (args.pageSize !== undefined) {
      this.pageSize = args.pageSize;
    }
  }
};
IActivityServiceGetActivityList_getActivityList_args.prototype = {};
IActivityServiceGetActivityList_getActivityList_args.prototype.read = function(input) {
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
        this.communityId = input.readI32();
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

IActivityServiceGetActivityList_getActivityList_args.prototype.write = function(output) {
  output.writeStructBegin('IActivityServiceGetActivityList_getActivityList_args');
  if (this.communityId !== null && this.communityId !== undefined) {
    output.writeFieldBegin('communityId', Thrift.Type.I32, 1);
    output.writeI32(this.communityId);
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

IActivityServiceGetActivityList_getActivityList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IActivityServiceGetActivityList_getActivityList_result.prototype = {};
IActivityServiceGetActivityList_getActivityList_result.prototype.read = function(input) {
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
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          var _size7 = 0;
          var _rtmp311;
          elem6 = {};
          var _ktype8 = 0;
          var _vtype9 = 0;
          _rtmp311 = input.readMapBegin();
          _ktype8 = _rtmp311.ktype;
          _vtype9 = _rtmp311.vtype;
          _size7 = _rtmp311.size;
          for (var _i12 = 0; _i12 < _size7; ++_i12)
          {
            var key13 = null;
            var val14 = null;
            key13 = input.readString();
            val14 = input.readString();
            elem6[key13] = val14;
          }
          input.readMapEnd();
          this.success.push(elem6);
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

IActivityServiceGetActivityList_getActivityList_result.prototype.write = function(output) {
  output.writeStructBegin('IActivityServiceGetActivityList_getActivityList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.MAP, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(iter15));
        for (var kiter16 in iter15)
        {
          if (iter15.hasOwnProperty(kiter16))
          {
            var viter17 = iter15[kiter16];
            output.writeString(kiter16);
            output.writeString(viter17);
          }
        }
        output.writeMapEnd();
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityServiceGetActivityListClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
IActivityServiceGetActivityListClient.prototype = {};
IActivityServiceGetActivityListClient.prototype.seqid = function() { return this._seqid; }
IActivityServiceGetActivityListClient.prototype.new_seqid = function() { return this._seqid += 1; }
IActivityServiceGetActivityListClient.prototype.getActivityList = function(communityId, currentPage, pageSize, callback) {
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
    this.send_getActivityList(communityId, currentPage, pageSize);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getActivityList(communityId, currentPage, pageSize);
  }
};

IActivityServiceGetActivityListClient.prototype.send_getActivityList = function(communityId, currentPage, pageSize) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getActivityList', Thrift.MessageType.CALL, this.seqid());
  var args = new IActivityServiceGetActivityList_getActivityList_args();
  args.communityId = communityId;
  args.currentPage = currentPage;
  args.pageSize = pageSize;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IActivityServiceGetActivityListClient.prototype.recv_getActivityList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IActivityServiceGetActivityList_getActivityList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getActivityList failed: unknown result');
};
IActivityServiceGetActivityListProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
IActivityServiceGetActivityListProcessor.prototype.process = function(input, output) {
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

IActivityServiceGetActivityListProcessor.prototype.process_getActivityList = function(seqid, input, output) {
  var args = new IActivityServiceGetActivityList_getActivityList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getActivityList.length === 3) {
    Q.fcall(this._handler.getActivityList, args.communityId, args.currentPage, args.pageSize)
      .then(function(result) {
        var result = new IActivityServiceGetActivityList_getActivityList_result({success: result});
        output.writeMessageBegin("getActivityList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new IActivityServiceGetActivityList_getActivityList_result(err);
        output.writeMessageBegin("getActivityList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getActivityList(args.communityId, args.currentPage, args.pageSize,  function (err, result) {
      var result = new IActivityServiceGetActivityList_getActivityList_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getActivityList", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

