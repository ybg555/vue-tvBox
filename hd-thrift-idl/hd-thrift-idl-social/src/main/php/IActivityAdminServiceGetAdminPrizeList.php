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


interface IActivityAdminServiceGetAdminPrizeListIf {
  /**
   * 
   * 根据活动id查询中奖名单列表
   * 
   * @param id
   * @param currentPage
   * @param pageSize
   * @return
   * 
   * @author zhijian.li
   * 
   * @param int $id
   * @param int $currentPage
   * @param int $pageSize
   * @return \TAdminPrizeQueryData 中奖名单分页对象
   * 
   * @since 1.1.0
   * @author zhijian.li
   * @date 2016年1月14日 上午9:09:15
   * 
   * 
   */
  public function getAdminPrizeList($id, $currentPage, $pageSize);
}

class IActivityAdminServiceGetAdminPrizeListClient implements \IActivityAdminServiceGetAdminPrizeListIf {
  protected $input_ = null;
  protected $output_ = null;

  protected $seqid_ = 0;

  public function __construct($input, $output=null) {
    $this->input_ = $input;
    $this->output_ = $output ? $output : $input;
  }

  public function getAdminPrizeList($id, $currentPage, $pageSize)
  {
    $this->send_getAdminPrizeList($id, $currentPage, $pageSize);
    return $this->recv_getAdminPrizeList();
  }

  public function send_getAdminPrizeList($id, $currentPage, $pageSize)
  {
    $args = new \IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_args();
    $args->id = $id;
    $args->currentPage = $currentPage;
    $args->pageSize = $pageSize;
    $bin_accel = ($this->output_ instanceof TBinaryProtocolAccelerated) && function_exists('thrift_protocol_write_binary');
    if ($bin_accel)
    {
      thrift_protocol_write_binary($this->output_, 'getAdminPrizeList', TMessageType::CALL, $args, $this->seqid_, $this->output_->isStrictWrite());
    }
    else
    {
      $this->output_->writeMessageBegin('getAdminPrizeList', TMessageType::CALL, $this->seqid_);
      $args->write($this->output_);
      $this->output_->writeMessageEnd();
      $this->output_->getTransport()->flush();
    }
  }

  public function recv_getAdminPrizeList()
  {
    $bin_accel = ($this->input_ instanceof TBinaryProtocolAccelerated) && function_exists('thrift_protocol_read_binary');
    if ($bin_accel) $result = thrift_protocol_read_binary($this->input_, '\IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_result', $this->input_->isStrictRead());
    else
    {
      $rseqid = 0;
      $fname = null;
      $mtype = 0;

      $this->input_->readMessageBegin($fname, $mtype, $rseqid);
      if ($mtype == TMessageType::EXCEPTION) {
        $x = new TApplicationException();
        $x->read($this->input_);
        $this->input_->readMessageEnd();
        throw $x;
      }
      $result = new \IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_result();
      $result->read($this->input_);
      $this->input_->readMessageEnd();
    }
    if ($result->success !== null) {
      return $result->success;
    }
    throw new \Exception("getAdminPrizeList failed: unknown result");
  }

}

// HELPER FUNCTIONS AND STRUCTURES

class IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_args {
  static $_TSPEC;

  /**
   * @var int
   */
  public $id = null;
  /**
   * @var int
   */
  public $currentPage = null;
  /**
   * @var int
   */
  public $pageSize = null;

  public function __construct($vals=null) {
    if (!isset(self::$_TSPEC)) {
      self::$_TSPEC = array(
        1 => array(
          'var' => 'id',
          'type' => TType::I32,
          ),
        2 => array(
          'var' => 'currentPage',
          'type' => TType::I32,
          ),
        3 => array(
          'var' => 'pageSize',
          'type' => TType::I32,
          ),
        );
    }
    if (is_array($vals)) {
      if (isset($vals['id'])) {
        $this->id = $vals['id'];
      }
      if (isset($vals['currentPage'])) {
        $this->currentPage = $vals['currentPage'];
      }
      if (isset($vals['pageSize'])) {
        $this->pageSize = $vals['pageSize'];
      }
    }
  }

  public function getName() {
    return 'IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_args';
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
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->currentPage);
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
    $xfer += $output->writeStructBegin('IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_args');
    if ($this->id !== null) {
      $xfer += $output->writeFieldBegin('id', TType::I32, 1);
      $xfer += $output->writeI32($this->id);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->currentPage !== null) {
      $xfer += $output->writeFieldBegin('currentPage', TType::I32, 2);
      $xfer += $output->writeI32($this->currentPage);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->pageSize !== null) {
      $xfer += $output->writeFieldBegin('pageSize', TType::I32, 3);
      $xfer += $output->writeI32($this->pageSize);
      $xfer += $output->writeFieldEnd();
    }
    $xfer += $output->writeFieldStop();
    $xfer += $output->writeStructEnd();
    return $xfer;
  }

}

class IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_result {
  static $_TSPEC;

  /**
   * @var \TAdminPrizeQueryData
   */
  public $success = null;

  public function __construct($vals=null) {
    if (!isset(self::$_TSPEC)) {
      self::$_TSPEC = array(
        0 => array(
          'var' => 'success',
          'type' => TType::STRUCT,
          'class' => '\TAdminPrizeQueryData',
          ),
        );
    }
    if (is_array($vals)) {
      if (isset($vals['success'])) {
        $this->success = $vals['success'];
      }
    }
  }

  public function getName() {
    return 'IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_result';
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
        case 0:
          if ($ftype == TType::STRUCT) {
            $this->success = new \TAdminPrizeQueryData();
            $xfer += $this->success->read($input);
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
    $xfer += $output->writeStructBegin('IActivityAdminServiceGetAdminPrizeList_getAdminPrizeList_result');
    if ($this->success !== null) {
      if (!is_object($this->success)) {
        throw new TProtocolException('Bad type in structure.', TProtocolException::INVALID_DATA);
      }
      $xfer += $output->writeFieldBegin('success', TType::STRUCT, 0);
      $xfer += $this->success->write($output);
      $xfer += $output->writeFieldEnd();
    }
    $xfer += $output->writeFieldStop();
    $xfer += $output->writeStructEnd();
    return $xfer;
  }

}


