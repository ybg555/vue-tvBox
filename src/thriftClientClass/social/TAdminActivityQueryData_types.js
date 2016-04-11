var Thrift = require('../../Thrift.js');var TAdminActivityQueryData ;//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TAdminActivityQueryData = function(args) {
  this.totalCount = null;
  this.totalPage = null;
  this.pageSize = null;
  this.currPage = null;
  this.dataList = null;
  if (args) {
    if (args.totalCount !== undefined) {
      this.totalCount = args.totalCount;
    }
    if (args.totalPage !== undefined) {
      this.totalPage = args.totalPage;
    }
    if (args.pageSize !== undefined) {
      this.pageSize = args.pageSize;
    }
    if (args.currPage !== undefined) {
      this.currPage = args.currPage;
    }
    if (args.dataList !== undefined) {
      this.dataList = args.dataList;
    }
  }
};
TAdminActivityQueryData.prototype = {};
TAdminActivityQueryData.prototype.read = function(input) {
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
        this.totalCount = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.totalPage = input.readI32().value;
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
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.currPage = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.dataList = [];
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
          this.dataList.push(elem6);
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

TAdminActivityQueryData.prototype.write = function(output) {
  output.writeStructBegin('TAdminActivityQueryData');
  if (this.totalCount !== null && this.totalCount !== undefined) {
    output.writeFieldBegin('totalCount', Thrift.Type.I32, 1);
    output.writeI32(this.totalCount);
    output.writeFieldEnd();
  }
  if (this.totalPage !== null && this.totalPage !== undefined) {
    output.writeFieldBegin('totalPage', Thrift.Type.I32, 2);
    output.writeI32(this.totalPage);
    output.writeFieldEnd();
  }
  if (this.pageSize !== null && this.pageSize !== undefined) {
    output.writeFieldBegin('pageSize', Thrift.Type.I32, 3);
    output.writeI32(this.pageSize);
    output.writeFieldEnd();
  }
  if (this.currPage !== null && this.currPage !== undefined) {
    output.writeFieldBegin('currPage', Thrift.Type.I32, 4);
    output.writeI32(this.currPage);
    output.writeFieldEnd();
  }
  if (this.dataList !== null && this.dataList !== undefined) {
    output.writeFieldBegin('dataList', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.MAP, this.dataList.length);
    for (var iter15 in this.dataList)
    {
      if (this.dataList.hasOwnProperty(iter15))
      {
        iter15 = this.dataList[iter15];
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

;module.exports = { 'TAdminActivityQueryData' : TAdminActivityQueryData }