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

IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_args = function(args) {
  this.prizes = null;
  if (args) {
    if (args.prizes !== undefined) {
      this.prizes = args.prizes;
    }
  }
};
IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_args.prototype = {};
IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_args.prototype.read = function(input) {
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
        this.prizes = input.readString();
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

IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_args.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_args');
  if (this.prizes !== null && this.prizes !== undefined) {
    output.writeFieldBegin('prizes', Thrift.Type.STRING, 1);
    output.writeString(this.prizes);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result.prototype = {};
IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result.prototype.read = function(input) {
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

IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result.prototype.write = function(output) {
  output.writeStructBegin('IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

IActivityAdminServiceUpdateAdminPrizesClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
IActivityAdminServiceUpdateAdminPrizesClient.prototype = {};
IActivityAdminServiceUpdateAdminPrizesClient.prototype.seqid = function() { return this._seqid; }
IActivityAdminServiceUpdateAdminPrizesClient.prototype.new_seqid = function() { return this._seqid += 1; }
IActivityAdminServiceUpdateAdminPrizesClient.prototype.updateAdminPrizes = function(prizes, callback) {
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
    this.send_updateAdminPrizes(prizes);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateAdminPrizes(prizes);
  }
};

IActivityAdminServiceUpdateAdminPrizesClient.prototype.send_updateAdminPrizes = function(prizes) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateAdminPrizes', Thrift.MessageType.CALL, this.seqid());
  var args = new IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_args();
  args.prizes = prizes;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

IActivityAdminServiceUpdateAdminPrizesClient.prototype.recv_updateAdminPrizes = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateAdminPrizes failed: unknown result');
};
IActivityAdminServiceUpdateAdminPrizesProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
IActivityAdminServiceUpdateAdminPrizesProcessor.prototype.process = function(input, output) {
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

IActivityAdminServiceUpdateAdminPrizesProcessor.prototype.process_updateAdminPrizes = function(seqid, input, output) {
  var args = new IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateAdminPrizes.length === 1) {
    Q.fcall(this._handler.updateAdminPrizes, args.prizes)
      .then(function(result) {
        var result = new IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result({success: result});
        output.writeMessageBegin("updateAdminPrizes", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result(err);
        output.writeMessageBegin("updateAdminPrizes", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateAdminPrizes(args.prizes,  function (err, result) {
      var result = new IActivityAdminServiceUpdateAdminPrizes_updateAdminPrizes_result((err != null ? err : {success: result}));
      output.writeMessageBegin("updateAdminPrizes", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

