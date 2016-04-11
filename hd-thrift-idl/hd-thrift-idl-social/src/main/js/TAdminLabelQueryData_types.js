//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TAdminLabelQueryData = function(args) {
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
TAdminLabelQueryData.prototype = {};
TAdminLabelQueryData.prototype.read = function(input) {
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
          elem6 = new TAdminLabel();
          elem6.read(input);
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

TAdminLabelQueryData.prototype.write = function(output) {
  output.writeStructBegin('TAdminLabelQueryData');
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
    output.writeListBegin(Thrift.Type.STRUCT, this.dataList.length);
    for (var iter7 in this.dataList)
    {
      if (this.dataList.hasOwnProperty(iter7))
      {
        iter7 = this.dataList[iter7];
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

