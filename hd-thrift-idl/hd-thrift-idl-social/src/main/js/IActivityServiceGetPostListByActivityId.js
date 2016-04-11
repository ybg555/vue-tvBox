//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

IActivityServiceGetPostListByActivityId_getPostListByActivityId_args = function(args) {
  this.id = null;
  this.currentPage = null;
  this.pageSize = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.currentPage !== undefined) {
      this.currentPage = args.currentPage;
    }
    if (args.pageSize !== undefined) {
      this.pageSize = args.pageSize;
    }
  }
};
IActivityServiceGetPostListByActivityId_getPostListByActivityId_args.prototype = {};
IActivityServiceGetPostListByActivityId_getPostListByActivityId_args.prototype.read = function(input) {
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
        this.id = input.readI32().value;
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

IActivityServiceGetPostListByActivityId_getPostListByActivityId_args.prototype.write = function(output) {
  output.writeStructBegin('IActivityServiceGetPostListByActivityId_getPostListByActivityId_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
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

IActivityServiceGetPostListByActivityId_getPostListByActivityId_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
IActivityServiceGetPostListByActivityId_getPostListByActivityId_result.prototype = {};
IActivityServiceGetPostListByActivityId_getPostListByActivityId_result.prototype.read = function(input) {
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
        var _size28 = 0;
        var _rtmp332;
        this.success = [];
        var _etype31 = 0;
        _rtmp332 = input.readListBegin();
        _etype31 = _rtmp332.etype;
        _size28 = _rtmp332.size;
        for (var _i33 = 0; _i33 < _size28; ++_i33)
        {
          var elem34 = null;
          var _size35 = 0;
          var _rtmp339;
          elem34 = {};
          var _ktype36 = 0;
          var _vtype37 = 0;
          _rtmp339 = input.readMapBegin();
          _ktype36 = _rtmp339.ktype;
          _vtype37 = _rtmp339.vtype;
          _size35 = _rtmp339.size;
          for (var _i40 = 0; _i40 < _size35; ++_i40)
          {
            if (_i40 > 0 ) {
              if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
                input.rstack.pop();
              }
            }
            var key41 = null;
            var val42 = null;
            key41 = input.readString().value;
            val42 = input.readString().value;
            elem34[key41] = val42;
          }
          input.readMapEnd();
          this.success.push(elem34);
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

IActivityServiceGetPostListByActivityId_getPostListByActivityId_result.prototype.write = function(output) {
  output.writeStructBegin('IActivityServiceGetPostListByActivityId_getPostListByActivityId_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.MAP, this.success.length);
    for (var iter43 in this.success)
    {
      if (this.success.hasOwnProperty(iter43))
      {
        iter43 = this.success[iter43];
        output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(iter43));
        for (var kiter44 in iter43)
        {
          if (iter43.hasOwnProperty(kiter44))
          {
            var viter45 = iter43[kiter44];
            output.writeString(kiter44);
            output.writeString(viter45);
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

IActivityServiceGetPostListByActivityIdClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
IActivityServiceGetPostListByActivityIdClient.prototype = {};
IActivityServiceGetPostListByActivityIdClient.prototype.getPostListByActivityId = function(id, currentPage, pageSize, callback) {
  this.send_getPostListByActivityId(id, currentPage, pageSize, callback); 
  if (!callback) {
    return this.recv_getPostListByActivityId();
  }
};

IActivityServiceGetPostListByActivityIdClient.prototype.send_getPostListByActivityId = function(id, currentPage, pageSize, callback) {
  this.output.writeMessageBegin('getPostListByActivityId', Thrift.MessageType.CALL, this.seqid);
  var args = new IActivityServiceGetPostListByActivityId_getPostListByActivityId_args();
  args.id = id;
  args.currentPage = currentPage;
  args.pageSize = pageSize;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getPostListByActivityId();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

IActivityServiceGetPostListByActivityIdClient.prototype.recv_getPostListByActivityId = function() {
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
  var result = new IActivityServiceGetPostListByActivityId_getPostListByActivityId_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getPostListByActivityId failed: unknown result';
};