//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
TAdminLabel = module.exports.TAdminLabel = function(args) {
  this.id = null;
  this.name = null;
  this.type = null;
  this.iconUrl = null;
  this.status = null;
  this.sortNum = null;
  this.createTime = null;
  this.hasRule = null;
  this.activityTheme = null;
  this.activityStartTime = null;
  this.activityEndTime = null;
  this.activityDescription = null;
  this.activityPrize = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.iconUrl !== undefined) {
      this.iconUrl = args.iconUrl;
    }
    if (args.status !== undefined) {
      this.status = args.status;
    }
    if (args.sortNum !== undefined) {
      this.sortNum = args.sortNum;
    }
    if (args.createTime !== undefined) {
      this.createTime = args.createTime;
    }
    if (args.hasRule !== undefined) {
      this.hasRule = args.hasRule;
    }
    if (args.activityTheme !== undefined) {
      this.activityTheme = args.activityTheme;
    }
    if (args.activityStartTime !== undefined) {
      this.activityStartTime = args.activityStartTime;
    }
    if (args.activityEndTime !== undefined) {
      this.activityEndTime = args.activityEndTime;
    }
    if (args.activityDescription !== undefined) {
      this.activityDescription = args.activityDescription;
    }
    if (args.activityPrize !== undefined) {
      this.activityPrize = args.activityPrize;
    }
  }
};
TAdminLabel.prototype = {};
TAdminLabel.prototype.read = function(input) {
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
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.iconUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.sortNum = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.createTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.hasRule = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.activityTheme = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I64) {
        this.activityStartTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.activityEndTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.activityDescription = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.activityPrize = input.readString();
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

TAdminLabel.prototype.write = function(output) {
  output.writeStructBegin('TAdminLabel');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.iconUrl !== null && this.iconUrl !== undefined) {
    output.writeFieldBegin('iconUrl', Thrift.Type.STRING, 4);
    output.writeString(this.iconUrl);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 5);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.sortNum !== null && this.sortNum !== undefined) {
    output.writeFieldBegin('sortNum', Thrift.Type.I32, 6);
    output.writeI32(this.sortNum);
    output.writeFieldEnd();
  }
  if (this.createTime !== null && this.createTime !== undefined) {
    output.writeFieldBegin('createTime', Thrift.Type.I64, 7);
    output.writeI64(this.createTime);
    output.writeFieldEnd();
  }
  if (this.hasRule !== null && this.hasRule !== undefined) {
    output.writeFieldBegin('hasRule', Thrift.Type.I32, 8);
    output.writeI32(this.hasRule);
    output.writeFieldEnd();
  }
  if (this.activityTheme !== null && this.activityTheme !== undefined) {
    output.writeFieldBegin('activityTheme', Thrift.Type.STRING, 9);
    output.writeString(this.activityTheme);
    output.writeFieldEnd();
  }
  if (this.activityStartTime !== null && this.activityStartTime !== undefined) {
    output.writeFieldBegin('activityStartTime', Thrift.Type.I64, 10);
    output.writeI64(this.activityStartTime);
    output.writeFieldEnd();
  }
  if (this.activityEndTime !== null && this.activityEndTime !== undefined) {
    output.writeFieldBegin('activityEndTime', Thrift.Type.I64, 11);
    output.writeI64(this.activityEndTime);
    output.writeFieldEnd();
  }
  if (this.activityDescription !== null && this.activityDescription !== undefined) {
    output.writeFieldBegin('activityDescription', Thrift.Type.STRING, 12);
    output.writeString(this.activityDescription);
    output.writeFieldEnd();
  }
  if (this.activityPrize !== null && this.activityPrize !== undefined) {
    output.writeFieldBegin('activityPrize', Thrift.Type.STRING, 13);
    output.writeString(this.activityPrize);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
