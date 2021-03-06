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


interface ISocialAdminServiceGetAdminCommentListIf {
  /**
   * 
   * 根据帖子id取帖子评论列表
   * 
   * @param postId
   *          帖子id
   * @param content
   *          话题内容
   * @param currentPage
   *          当前页
   * @param pageSize
   *          显示多少条
   * @return
   * 
   * @author zhijian.li
   * 
   * @param int $postId
   * @param string $content
   * @param int $currentPage
   * @param int $pageSize
   * @return \TAdminCommentQueryData 评论分页对象
   * 
   * @since 0.0.1
   * @author zhijian.li
   * @date 2015年11月27日下午3:45:11
   * 
   * 
   */
  public function getAdminCommentList($postId, $content, $currentPage, $pageSize);
}

class ISocialAdminServiceGetAdminCommentListClient implements \ISocialAdminServiceGetAdminCommentListIf {
  protected $input_ = null;
  protected $output_ = null;

  protected $seqid_ = 0;

  public function __construct($input, $output=null) {
    $this->input_ = $input;
    $this->output_ = $output ? $output : $input;
  }

  public function getAdminCommentList($postId, $content, $currentPage, $pageSize)
  {
    $this->send_getAdminCommentList($postId, $content, $currentPage, $pageSize);
    return $this->recv_getAdminCommentList();
  }

  public function send_getAdminCommentList($postId, $content, $currentPage, $pageSize)
  {
    $args = new \ISocialAdminServiceGetAdminCommentList_getAdminCommentList_args();
    $args->postId = $postId;
    $args->content = $content;
    $args->currentPage = $currentPage;
    $args->pageSize = $pageSize;
    $bin_accel = ($this->output_ instanceof TBinaryProtocolAccelerated) && function_exists('thrift_protocol_write_binary');
    if ($bin_accel)
    {
      thrift_protocol_write_binary($this->output_, 'getAdminCommentList', TMessageType::CALL, $args, $this->seqid_, $this->output_->isStrictWrite());
    }
    else
    {
      $this->output_->writeMessageBegin('getAdminCommentList', TMessageType::CALL, $this->seqid_);
      $args->write($this->output_);
      $this->output_->writeMessageEnd();
      $this->output_->getTransport()->flush();
    }
  }

  public function recv_getAdminCommentList()
  {
    $bin_accel = ($this->input_ instanceof TBinaryProtocolAccelerated) && function_exists('thrift_protocol_read_binary');
    if ($bin_accel) $result = thrift_protocol_read_binary($this->input_, '\ISocialAdminServiceGetAdminCommentList_getAdminCommentList_result', $this->input_->isStrictRead());
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
      $result = new \ISocialAdminServiceGetAdminCommentList_getAdminCommentList_result();
      $result->read($this->input_);
      $this->input_->readMessageEnd();
    }
    if ($result->success !== null) {
      return $result->success;
    }
    throw new \Exception("getAdminCommentList failed: unknown result");
  }

}

// HELPER FUNCTIONS AND STRUCTURES

class ISocialAdminServiceGetAdminCommentList_getAdminCommentList_args {
  static $_TSPEC;

  /**
   * @var int
   */
  public $postId = null;
  /**
   * @var string
   */
  public $content = null;
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
          'var' => 'content',
          'type' => TType::STRING,
          ),
        3 => array(
          'var' => 'currentPage',
          'type' => TType::I32,
          ),
        4 => array(
          'var' => 'pageSize',
          'type' => TType::I32,
          ),
        );
    }
    if (is_array($vals)) {
      if (isset($vals['postId'])) {
        $this->postId = $vals['postId'];
      }
      if (isset($vals['content'])) {
        $this->content = $vals['content'];
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
    return 'ISocialAdminServiceGetAdminCommentList_getAdminCommentList_args';
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
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->content);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 3:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->currentPage);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 4:
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
    $xfer += $output->writeStructBegin('ISocialAdminServiceGetAdminCommentList_getAdminCommentList_args');
    if ($this->postId !== null) {
      $xfer += $output->writeFieldBegin('postId', TType::I32, 1);
      $xfer += $output->writeI32($this->postId);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->content !== null) {
      $xfer += $output->writeFieldBegin('content', TType::STRING, 2);
      $xfer += $output->writeString($this->content);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->currentPage !== null) {
      $xfer += $output->writeFieldBegin('currentPage', TType::I32, 3);
      $xfer += $output->writeI32($this->currentPage);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->pageSize !== null) {
      $xfer += $output->writeFieldBegin('pageSize', TType::I32, 4);
      $xfer += $output->writeI32($this->pageSize);
      $xfer += $output->writeFieldEnd();
    }
    $xfer += $output->writeFieldStop();
    $xfer += $output->writeStructEnd();
    return $xfer;
  }

}

class ISocialAdminServiceGetAdminCommentList_getAdminCommentList_result {
  static $_TSPEC;

  /**
   * @var \TAdminCommentQueryData
   */
  public $success = null;

  public function __construct($vals=null) {
    if (!isset(self::$_TSPEC)) {
      self::$_TSPEC = array(
        0 => array(
          'var' => 'success',
          'type' => TType::STRUCT,
          'class' => '\TAdminCommentQueryData',
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
    return 'ISocialAdminServiceGetAdminCommentList_getAdminCommentList_result';
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
            $this->success = new \TAdminCommentQueryData();
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
    $xfer += $output->writeStructBegin('ISocialAdminServiceGetAdminCommentList_getAdminCommentList_result');
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


