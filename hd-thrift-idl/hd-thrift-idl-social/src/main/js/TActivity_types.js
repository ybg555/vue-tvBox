//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TActivity = function(args) {
  this.activityBase = null;
  this.activityCommunities = null;
  if (args) {
    if (args.activityBase !== undefined) {
      this.activityBase = args.activityBase;
    }
    if (args.activityCommunities !== undefined) {
      this.activityCommunities = args.activityCommunities;
    }
  }
};
TActivity.prototype = {};
TActivity.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.activityBase = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          if (_i5 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key6 = null;
          var val7 = null;
          key6 = input.readString().value;
          val7 = input.readString().value;
          this.activityBase[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.activityCommunities = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          var _size15 = 0;
          var _rtmp319;
          elem14 = {};
          var _ktype16 = 0;
          var _vtype17 = 0;
          _rtmp319 = input.readMapBegin();
          _ktype16 = _rtmp319.ktype;
          _vtype17 = _rtmp319.vtype;
          _size15 = _rtmp319.size;
          for (var _i20 = 0; _i20 < _size15; ++_i20)
          {
            if (_i20 > 0 ) {
              if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
                input.rstack.pop();
              }
            }
            var key21 = null;
            var val22 = null;
            key21 = input.readString().value;
            val22 = input.readI32().value;
            elem14[key21] = val22;
          }
          input.readMapEnd();
          this.activityCommunities.push(elem14);
        }
        input.readListEnd();
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

TActivity.prototype.write = function(output) {
  output.writeStructBegin('TActivity');
  if (this.activityBase !== null && this.activityBase !== undefined) {
    output.writeFieldBegin('activityBase', Thrift.Type.MAP, 1);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.activityBase));
    for (var kiter23 in this.activityBase)
    {
      if (this.activityBase.hasOwnProperty(kiter23))
      {
        var viter24 = this.activityBase[kiter23];
        output.writeString(kiter23);
        output.writeString(viter24);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.activityCommunities !== null && this.activityCommunities !== undefined) {
    output.writeFieldBegin('activityCommunities', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.MAP, this.activityCommunities.length);
    for (var iter25 in this.activityCommunities)
    {
      if (this.activityCommunities.hasOwnProperty(iter25))
      {
        iter25 = this.activityCommunities[iter25];
        output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I32, Thrift.objectLength(iter25));
        for (var kiter26 in iter25)
        {
          if (iter25.hasOwnProperty(kiter26))
          {
            var viter27 = iter25[kiter26];
            output.writeString(kiter26);
            output.writeI32(viter27);
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

