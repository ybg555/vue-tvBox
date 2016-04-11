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

IActivityAdminServiceAddAdminActivity_addAdminActivity_args = function(args) {
  this.activity = null;
  this.activityCommunities = null;
  if (args) {
    if (args.activity !== undefined) {
      this.activity = args.activity;
    }
    if (args.activityCommunities !== undefined) {
      this.activityCommunities = args.activityCommunities;
    }
  }
};
IActivityAdminServiceAddAdminActivity_addAdminActivity_args.prototype = {};
IActivityAdminServiceAddAdminActivity_addAdminActivity_args.prototype.read = function(input) {
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
        this.activity = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.activityCommunities = input.readString();
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

IActivityAdminServiceAddAdminActivity_addAdminActivity_args.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceAddAdminActivity_addAdminActivity_args');
  if (this.activity !== null && this.activity !== undefined) {
    output.writeFieldBegin('activity', Thrift.Type.STRING, 1);
    output.writeString(this.activity);
    output.writeFieldEnd();
  }
  if (this.activityCommunities !== null && this.activityCommunities !== undefined) {
    output.writeFieldBegin('activityCommunities', Thrift.Type.STRING, 2);
    output.writeString(this.activityCommunities);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceAddAdminActivity_addAdminActivity_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IActivityAdminServiceAddAdminActivity_addAdminActivity_result.prototype = {};
IActivityAdminServiceAddAdminActivity_addAdminActivity_result.prototype.read = function(input) {
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

IActivityAdminServiceAddAdminActivity_addAdminActivity_result.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceAddAdminActivity_addAdminActivity_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceAddAdminActivityClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
IActivityAdminServiceAddAdminActivityClient.prototype = {};
IActivityAdminServiceAddAdminActivityClient.prototype.seqid = function() { return this._seqid; }
IActivityAdminServiceAddAdminActivityClient.prototype.new_seqid = function() { return this._seqid += 1; }
IActivityAdminServiceAddAdminActivityClient.prototype.addAdminActivity = function(activity, activityCommunities, callback) {
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
    this.send_addAdminActivity(activity, activityCommunities);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addAdminActivity(activity, activityCommunities);
  }
};

IActivityAdminServiceAddAdminActivityClient.prototype.send_addAdminActivity = function(activity, activityCommunities) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addAdminActivity', Thrift.MessageType.CALL, this.seqid());
  var args = new IActivityAdminServiceAddAdminActivity_addAdminActivity_args();
  args.activity = activity;
  args.activityCommunities = activityCommunities;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IActivityAdminServiceAddAdminActivityClient.prototype.recv_addAdminActivity = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IActivityAdminServiceAddAdminActivity_addAdminActivity_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('addAdminActivity failed: unknown result');
};
IActivityAdminServiceAddAdminActivityProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
IActivityAdminServiceAddAdminActivityProcessor.prototype.process = function(input, output) {
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

IActivityAdminServiceAddAdminActivityProcessor.prototype.process_addAdminActivity = function(seqid, input, output) {
  var args = new IActivityAdminServiceAddAdminActivity_addAdminActivity_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addAdminActivity.length === 2) {
    Q.fcall(this._handler.addAdminActivity, args.activity, args.activityCommunities)
      .then(function(result) {
        var result = new IActivityAdminServiceAddAdminActivity_addAdminActivity_result({success: result});
        output.writeMessageBegin("addAdminActivity", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new IActivityAdminServiceAddAdminActivity_addAdminActivity_result(err);
        output.writeMessageBegin("addAdminActivity", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.addAdminActivity(args.activity, args.activityCommunities,  function (err, result) {
      var result = new IActivityAdminServiceAddAdminActivity_addAdminActivity_result((err != null ? err : {success: result}));
      output.writeMessageBegin("addAdminActivity", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}
