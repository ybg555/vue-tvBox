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

IActivityAdminServiceGetAdminActivityList_getAdminActivityList_args = function(args) {
  this.currentPage = null;
  this.pageSize = null;
  if (args) {
    if (args.currentPage !== undefined) {
      this.currentPage = args.currentPage;
    }
    if (args.pageSize !== undefined) {
      this.pageSize = args.pageSize;
    }
  }
};
IActivityAdminServiceGetAdminActivityList_getAdminActivityList_args.prototype = {};
IActivityAdminServiceGetAdminActivityList_getAdminActivityList_args.prototype.read = function(input) {
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
        this.currentPage = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
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

IActivityAdminServiceGetAdminActivityList_getAdminActivityList_args.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceGetAdminActivityList_getAdminActivityList_args');
  if (this.currentPage !== null && this.currentPage !== undefined) {
    output.writeFieldBegin('currentPage', Thrift.Type.I32, 1);
    output.writeI32(this.currentPage);
    output.writeFieldEnd();
  }
  if (this.pageSize !== null && this.pageSize !== undefined) {
    output.writeFieldBegin('pageSize', Thrift.Type.I32, 2);
    output.writeI32(this.pageSize);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result.prototype = {};
IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result.prototype.read = function(input) {
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
        this.success = new TAdminActivityQueryData_ttypes.TAdminActivityQueryData();
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

IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceGetAdminActivityListClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
IActivityAdminServiceGetAdminActivityListClient.prototype = {};
IActivityAdminServiceGetAdminActivityListClient.prototype.seqid = function() { return this._seqid; }
IActivityAdminServiceGetAdminActivityListClient.prototype.new_seqid = function() { return this._seqid += 1; }
IActivityAdminServiceGetAdminActivityListClient.prototype.getAdminActivityList = function(currentPage, pageSize, callback) {
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
    this.send_getAdminActivityList(currentPage, pageSize);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getAdminActivityList(currentPage, pageSize);
  }
};

IActivityAdminServiceGetAdminActivityListClient.prototype.send_getAdminActivityList = function(currentPage, pageSize) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getAdminActivityList', Thrift.MessageType.CALL, this.seqid());
  var args = new IActivityAdminServiceGetAdminActivityList_getAdminActivityList_args();
  args.currentPage = currentPage;
  args.pageSize = pageSize;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IActivityAdminServiceGetAdminActivityListClient.prototype.recv_getAdminActivityList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getAdminActivityList failed: unknown result');
};
IActivityAdminServiceGetAdminActivityListProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
IActivityAdminServiceGetAdminActivityListProcessor.prototype.process = function(input, output) {
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

IActivityAdminServiceGetAdminActivityListProcessor.prototype.process_getAdminActivityList = function(seqid, input, output) {
  var args = new IActivityAdminServiceGetAdminActivityList_getAdminActivityList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getAdminActivityList.length === 2) {
    Q.fcall(this._handler.getAdminActivityList, args.currentPage, args.pageSize)
      .then(function(result) {
        var result = new IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result({success: result});
        output.writeMessageBegin("getAdminActivityList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result(err);
        output.writeMessageBegin("getAdminActivityList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getAdminActivityList(args.currentPage, args.pageSize,  function (err, result) {
      var result = new IActivityAdminServiceGetAdminActivityList_getAdminActivityList_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getAdminActivityList", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

