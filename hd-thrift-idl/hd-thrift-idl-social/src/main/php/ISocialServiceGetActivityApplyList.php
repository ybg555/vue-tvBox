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


interface ISocialServiceGetActivityApplyListIf {
  /**
   * 
   * 帖子的点赞用户列表
   * 
   * @return
   * 
   * @author jinfeng.bin
   * 
   * @param int $postId
   * @param int $currentPage
   * @param int $pageSize
   * @return \TActivityApply[]
   */
  public function getActivityApplyList($postId, $currentPage, $pageSize);
}

class ISocialServiceGetActivityApplyListClient implements \ISocialServiceGetActivityApplyListIf {
  protected $input_ = null;
  protected $output_ = null;

  protected $seqid_ = 0;

  public function __construct($input, $output=null) {
    $this->input_ = $input;
    $this->output_ = $output ? $output : $input;
  }

  public function getActivityApplyList($postId, $currentPage, $pageSize)
  {
    $this->send_getActivityApplyList($postId, $currentPage, $pageSize);
    return $this->recv_getActivityApplyList();
  }

  public function send_getActivityApplyList($postId, $currentPage, $pageSize)
  {
    $args = new \ISocialServiceGetActivityApplyList_getActivityApplyList_args();
    $args->postId = $postId;
    $args->currentPage = $currentPage;
    $args->pageSize = $pageSize;
    $bin_accel = ($this->output_ instanceof TBinaryProtocolAccelerated) && function_exists('thrift_protocol_write_binary');
    if ($bin_accel)
    {
      thrift_protocol_write_binary($this->output_, 'getActivityApplyList', TMessageType::CALL, $args, $this->seqid_, $this->output_->isStrictWrite());
    }
    else
    {
      $this->output_->writeMessageBegin('getActivityApplyList', TMessageType::CALL, $this->seqid_);
      $args->write($this->output_);
      $this->output_->writeMessageEnd();
      $this->output_->getTransport()->flush();
    }
  }

  public function recv_getActivityApplyList()
  {
    $bin_accel = ($this->input_ instanceof TBinaryProtocolAccelerated) && function_exists('thrift_protocol_read_binary');
    if ($bin_accel) $result = thrift_protocol_read_binary($this->input_, '\ISocialServiceGetActivityApplyList_getActivityApplyList_result', $this->input_->isStrictRead());
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
      $result = new \ISocialServiceGetActivityApplyList_getActivityApplyList_result();
      $result->read($this->input_);
      $this->input_->readMessageEnd();
    }
    if ($result->success !== null) {
      return $result->success;
    }
    throw new \Exception("getActivityApplyList failed: unknown result");
  }

}

// HELPER FUNCTIONS AND STRUCTURES

class ISocialServiceGetActivityApplyList_getActivityApplyList_args {
  static $_TSPEC;

  /**
   * @var int
   */
  public $postId = null;
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
          'var' => 'postId',
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
      if (isset($vals['postId'])) {
        $this->postId = $vals['postId'];
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
    return 'ISocialServiceGetActivityApplyList_getActivityApplyList_args';
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
            $xfer += $input->readI32($this->postId);
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
    $xfer += $output->writeStructBegin('ISocialServiceGetActivityApplyList_getActivityApplyList_args');
    if ($this->postId !== null) {
      $xfer += $output->writeFieldBegin('postId', TType::I32, 1);
      $xfer += $output->writeI32($this->postId);
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

class ISocialServiceGetActivityApplyList_getActivityApplyList_result {
  static $_TSPEC;

  /**
   * @var \TActivityApply[]
   */
  public $success = null;

  public function __construct($vals=null) {
    if (!isset(self::$_TSPEC)) {
      self::$_TSPEC = array(
        0 => array(
          'var' => 'success',
          'type' => TType::LST,
          'etype' => TType::STRUCT,
          'elem' => array(
            'type' => TType::STRUCT,
            'class' => '\TActivityApply',
            ),
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
    return 'ISocialServiceGetActivityApplyList_getActivityApplyList_result';
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
          if ($ftype == TType::LST) {
            $this->success = array();
            $_size49 = 0;
            $_etype52 = 0;
            $xfer += $input->readListBegin($_etype52, $_size49);
            for ($_i53 = 0; $_i53 < $_size49; ++$_i53)
            {
              $elem54 = null;
              $elem54 = new \TActivityApply();
              $xfer += $elem54->read($input);
              $this->success []= $elem54;
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
    $xfer += $output->writeStructBegin('ISocialServiceGetActivityApplyList_getActivityApplyList_result');
    if ($this->success !== null) {
      if (!is_array($this->success)) {
        throw new TProtocolException('Bad type in structure.', TProtocolException::INVALID_DATA);
      }
      $xfer += $output->writeFieldBegin('success', TType::LST, 0);
      {
        $output->writeListBegin(TType::STRUCT, count($this->success));
        {
          foreach ($this->success as $iter55)
          {
            $xfer += $iter55->write($output);
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

