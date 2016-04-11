//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


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
        this.communityId = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.currentPage = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.pageSize = input.readI32().value;
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
            if (_i12 > 0 ) {
              if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
                input.rstack.pop();
              }
            }
            var key13 = null;
            var val14 = null;
            key13 = input.readString().value;
            val14 = input.readString().value;
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

IActivityServiceGetActivityListClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
IActivityServiceGetActivityListClient.prototype = {};
IActivityServiceGetActivityListClient.prototype.getActivityList = function(communityId, currentPage, pageSize, callback) {
  this.send_getActivityList(communityId, currentPage, pageSize, callback); 
  if (!callback) {
    return this.recv_getActivityList();
  }
};

IActivityServiceGetActivityListClient.prototype.send_getActivityList = function(communityId, currentPage, pageSize, callback) {
  this.output.writeMessageBegin('getActivityList', Thrift.MessageType.CALL, this.seqid);
  var args = new IActivityServiceGetActivityList_getActivityList_args();
  args.communityId = communityId;
  args.currentPage = currentPage;
  args.pageSize = pageSize;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getActivityList();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

IActivityServiceGetActivityListClient.prototype.recv_getActivityList = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new IActivityServiceGetActivityList_getActivityList_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getActivityList failed: unknown result';
};