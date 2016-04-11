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

ISocialServiceGetLabelList_getLabelList_args = function(args) {
  this.num = null;
  if (args) {
    if (args.num !== undefined) {
      this.num = args.num;
    }
  }
};
ISocialServiceGetLabelList_getLabelList_args.prototype = {};
ISocialServiceGetLabelList_getLabelList_args.prototype.read = function(input) {
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
        this.num = input.readI32();
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

ISocialServiceGetLabelList_getLabelList_args.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetLabelList_getLabelList_args');
  if (this.num !== null && this.num !== undefined) {
    output.writeFieldBegin('num', Thrift.Type.I32, 1);
    output.writeI32(this.num);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetLabelList_getLabelList_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ISocialServiceGetLabelList_getLabelList_result.prototype = {};
ISocialServiceGetLabelList_getLabelList_result.prototype.read = function(input) {
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
          elem6 = new TLabel_ttypes.TLabel();
          elem6.read(input);
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

ISocialServiceGetLabelList_getLabelList_result.prototype.write = function(output) {
  output.writeStructBegin('ISocialServiceGetLabelList_getLabelList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ISocialServiceGetLabelListClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ISocialServiceGetLabelListClient.prototype = {};
ISocialServiceGetLabelListClient.prototype.seqid = function() { return this._seqid; }
ISocialServiceGetLabelListClient.prototype.new_seqid = function() { return this._seqid += 1; }
ISocialServiceGetLabelListClient.prototype.getLabelList = function(num, callback) {
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
    this.send_getLabelList(num);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getLabelList(num);
  }
};

ISocialServiceGetLabelListClient.prototype.send_getLabelList = function(num) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getLabelList', Thrift.MessageType.CALL, this.seqid());
  var args = new ISocialServiceGetLabelList_getLabelList_args();
  args.num = num;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ISocialServiceGetLabelListClient.prototype.recv_getLabelList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ISocialServiceGetLabelList_getLabelList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getLabelList failed: unknown result');
};
ISocialServiceGetLabelListProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
ISocialServiceGetLabelListProcessor.prototype.process = function(input, output) {
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

ISocialServiceGetLabelListProcessor.prototype.process_getLabelList = function(seqid, input, output) {
  var args = new ISocialServiceGetLabelList_getLabelList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getLabelList.length === 1) {
    Q.fcall(this._handler.getLabelList, args.num)
      .then(function(result) {
        var result = new ISocialServiceGetLabelList_getLabelList_result({success: result});
        output.writeMessageBegin("getLabelList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ISocialServiceGetLabelList_getLabelList_result(err);
        output.writeMessageBegin("getLabelList", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getLabelList(args.num,  function (err, result) {
      var result = new ISocialServiceGetLabelList_getLabelList_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getLabelList", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}
