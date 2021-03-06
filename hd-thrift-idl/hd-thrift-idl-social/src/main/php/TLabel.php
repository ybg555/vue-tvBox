<?php
namespace ;

/**
 * Autogenerated by Thrift Compiler (0.9.2)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
use Thrift\Base\TBase;
use Thrift\Type\TType;
use Thrift\Type\TMessageType;
use Thrift\Exception\TException;
use Thrift\Exception\TProtocolException;
use Thrift\Protocol\TProtocol;
use Thrift\Protocol\TBinaryProtocolAccelerated;
use Thrift\Exception\TApplicationException;


/**
 * 标签
 * 
 * @since 0.0.1
 * @author bjf
 * @date 2015年9月24日 下午5:34:32
 * 
 */
class TLabel {
  static $_TSPEC;

  /**
   * 主键id
   * 
   * @var int
   */
  public $id = null;
  /**
   * 标签名称
   * 
   * @var string
   */
  public $name = null;
  /**
   * 0-普通 1-活动
   * 
   * @var int
   */
  public $type = null;
  /**
   * 图片完整地址 如：http://image.evergrande.com/aa.jpg
   * 
   * @var string
   */
  public $iconUrl = null;
  /**
   * 1-启用 0-禁用 数据库默认是1
   * 
   * @var int
   */
  public $status = null;

  public function __construct($vals=null) {
    if (!isset(self::$_TSPEC)) {
      self::$_TSPEC = array(
        1 => array(
          'var' => 'id',
          'type' => TType::I32,
          ),
        2 => array(
          'var' => 'name',
          'type' => TType::STRING,
          ),
        3 => array(
          'var' => 'type',
          'type' => TType::I32,
          ),
        4 => array(
          'var' => 'iconUrl',
          'type' => TType::STRING,
          ),
        5 => array(
          'var' => 'status',
          'type' => TType::I32,
          ),
        );
    }
    if (is_array($vals)) {
      if (isset($vals['id'])) {
        $this->id = $vals['id'];
      }
      if (isset($vals['name'])) {
        $this->name = $vals['name'];
      }
      if (isset($vals['type'])) {
        $this->type = $vals['type'];
      }
      if (isset($vals['iconUrl'])) {
        $this->iconUrl = $vals['iconUrl'];
      }
      if (isset($vals['status'])) {
        $this->status = $vals['status'];
      }
    }
  }

  public function getName() {
    return 'TLabel';
  }

  public function read($input)
  {
    $xfer = 0;
    $fname = null;
    $ftype = 0;
    $fid = 0;
    $xfer += $input->readStructBegin($fname);
    while (true)
    {
      $xfer += $input->readFieldBegin($fname, $ftype, $fid);
      if ($ftype == TType::STOP) {
        break;
      }
      switch ($fid)
      {
        case 1:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->id);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 2:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->name);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 3:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->type);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 4:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->iconUrl);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 5:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->status);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        default:
          $xfer += $input->skip($ftype);
          break;
      }
      $xfer += $input->readFieldEnd();
    }
    $xfer += $input->readStructEnd();
    return $xfer;
  }

  public function write($output) {
    $xfer = 0;
    $xfer += $output->writeStructBegin('TLabel');
    if ($this->id !== null) {
      $xfer += $output->writeFieldBegin('id', TType::I32, 1);
      $xfer += $output->writeI32($this->id);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->name !== null) {
      $xfer += $output->writeFieldBegin('name', TType::STRING, 2);
      $xfer += $output->writeString($this->name);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->type !== null) {
      $xfer += $output->writeFieldBegin('type', TType::I32, 3);
      $xfer += $output->writeI32($this->type);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->iconUrl !== null) {
      $xfer += $output->writeFieldBegin('iconUrl', TType::STRING, 4);
      $xfer += $output->writeString($this->iconUrl);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->status !== null) {
      $xfer += $output->writeFieldBegin('status', TType::I32, 5);
      $xfer += $output->writeI32($this->status);
      $xfer += $output->writeFieldEnd();
    }
    $xfer += $output->writeFieldStop();
    $xfer += $output->writeStructEnd();
    return $xfer;
  }

}


