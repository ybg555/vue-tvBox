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
 * 中奖名单分页对象
 * 
 * @since 1.1.0
 * @author zhijian.li
 * @date 2016年1月14日 上午9:09:15
 * 
 */
class TAdminPrizeQueryData {
  static $_TSPEC;

  /**
   * 总数
   * 
   * @var int
   */
  public $totalCount = null;
  /**
   * 总页数
   * 
   * @var int
   */
  public $totalPage = null;
  /**
   * 一页多少条
   * 
   * @var int
   */
  public $pageSize = null;
  /**
   * 当前页
   * 
   * @var int
   */
  public $currPage = null;
  /**
   * 返回的集合对象
   * 
   * @var (array)[]
   */
  public $dataList = null;

  public function __construct($vals=null) {
    if (!isset(self::$_TSPEC)) {
      self::$_TSPEC = array(
        1 => array(
          'var' => 'totalCount',
          'type' => TType::I32,
          ),
        2 => array(
          'var' => 'totalPage',
          'type' => TType::I32,
          ),
        3 => array(
          'var' => 'pageSize',
          'type' => TType::I32,
          ),
        4 => array(
          'var' => 'currPage',
          'type' => TType::I32,
          ),
        5 => array(
          'var' => 'dataList',
          'type' => TType::LST,
          'etype' => TType::MAP,
          'elem' => array(
            'type' => TType::MAP,
            'ktype' => TType::STRING,
            'vtype' => TType::STRING,
            'key' => array(
              'type' => TType::STRING,
            ),
            'val' => array(
              'type' => TType::STRING,
              ),
            ),
          ),
        );
    }
    if (is_array($vals)) {
      if (isset($vals['totalCount'])) {
        $this->totalCount = $vals['totalCount'];
      }
      if (isset($vals['totalPage'])) {
        $this->totalPage = $vals['totalPage'];
      }
      if (isset($vals['pageSize'])) {
        $this->pageSize = $vals['pageSize'];
      }
      if (isset($vals['currPage'])) {
        $this->currPage = $vals['currPage'];
      }
      if (isset($vals['dataList'])) {
        $this->dataList = $vals['dataList'];
      }
    }
  }

  public function getName() {
    return 'TAdminPrizeQueryData';
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
            $xfer += $input->readI32($this->totalCount);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 2:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->totalPage);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 3:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->pageSize);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 4:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->currPage);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 5:
          if ($ftype == TType::LST) {
            $this->dataList = array();
            $_size0 = 0;
            $_etype3 = 0;
            $xfer += $input->readListBegin($_etype3, $_size0);
            for ($_i4 = 0; $_i4 < $_size0; ++$_i4)
            {
              $elem5 = null;
              $elem5 = array();
              $_size6 = 0;
              $_ktype7 = 0;
              $_vtype8 = 0;
              $xfer += $input->readMapBegin($_ktype7, $_vtype8, $_size6);
              for ($_i10 = 0; $_i10 < $_size6; ++$_i10)
              {
                $key11 = '';
                $val12 = '';
                $xfer += $input->readString($key11);
                $xfer += $input->readString($val12);
                $elem5[$key11] = $val12;
              }
              $xfer += $input->readMapEnd();
              $this->dataList []= $elem5;
            }
            $xfer += $input->readListEnd();
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
    $xfer += $output->writeStructBegin('TAdminPrizeQueryData');
    if ($this->totalCount !== null) {
      $xfer += $output->writeFieldBegin('totalCount', TType::I32, 1);
      $xfer += $output->writeI32($this->totalCount);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->totalPage !== null) {
      $xfer += $output->writeFieldBegin('totalPage', TType::I32, 2);
      $xfer += $output->writeI32($this->totalPage);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->pageSize !== null) {
      $xfer += $output->writeFieldBegin('pageSize', TType::I32, 3);
      $xfer += $output->writeI32($this->pageSize);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->currPage !== null) {
      $xfer += $output->writeFieldBegin('currPage', TType::I32, 4);
      $xfer += $output->writeI32($this->currPage);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->dataList !== null) {
      if (!is_array($this->dataList)) {
        throw new TProtocolException('Bad type in structure.', TProtocolException::INVALID_DATA);
      }
      $xfer += $output->writeFieldBegin('dataList', TType::LST, 5);
      {
        $output->writeListBegin(TType::MAP, count($this->dataList));
        {
          foreach ($this->dataList as $iter13)
          {
            {
              $output->writeMapBegin(TType::STRING, TType::STRING, count($iter13));
              {
                foreach ($iter13 as $kiter14 => $viter15)
                {
                  $xfer += $output->writeString($kiter14);
                  $xfer += $output->writeString($viter15);
                }
              }
              $output->writeMapEnd();
            }
          }
        }
        $output->writeListEnd();
      }
      $xfer += $output->writeFieldEnd();
    }
    $xfer += $output->writeFieldStop();
    $xfer += $output->writeStructEnd();
    return $xfer;
  }

}


