//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TReason = function(args) {
  this.id = null;
  this.type = null;
  this.sortNum = null;
  this.content = null;
  this.createTime = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.sortNum !== undefined) {
      this.sortNum = args.sortNum;
    }
    if (args.content !== undefined) {
      this.content = args.content;
    }
    if (args.createTime !== undefined) {
      this.createTime = args.createTime;
    }
  }
};
TReason.prototype = {};
TReason.prototype.read = function(input) {
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
        this.type = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.sortNum = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.createTime = input.readI64().value;
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

TReason.prototype.write = function(output) {
  output.writeStructBegin('TReason');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 2);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.sortNum !== null && this.sortNum !== undefined) {
    output.writeFieldBegin('sortNum', Thrift.Type.I32, 3);
    output.writeI32(this.sortNum);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 4);
    output.writeString(this.content);
    output.writeFieldEnd();
  }
  if (this.createTime !== null && this.createTime !== undefined) {
    output.writeFieldBegin('createTime', Thrift.Type.I64, 5);
    output.writeI64(this.createTime);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
