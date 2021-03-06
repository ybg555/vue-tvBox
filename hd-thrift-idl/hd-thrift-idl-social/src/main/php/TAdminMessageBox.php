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
 * 消息
 * 
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
class TAdminMessageBox {
  static $_TSPEC;

  /**
   * 主键
   * 
   * @var int
   */
  public $id = null;
  /**
   * 1-赞 2-评论
   * 
   * @var int
   */
  public $type = null;
  /**
   * 帖子id
   * 
   * @var int
   */
  public $postId = null;
  /**
   * 用户id
   * 
   * @var int
   */
  public $userId = null;
  /**
   * 用户昵称
   * 
   * @var string
   */
  public $nickName = null;
  /**
   * 用户头像
   * 
   * @var string
   */
  public $avatarUrl = null;
  /**
   * 被回复用户的userid
   * 
   * @var int
   */
  public $toUserId = null;
  /**
   * 状态 1-已读 0-未读 数据库默认0
   * 
   * @var int
   */
  public $status = null;
  /**
   * 创建时间
   * 
   * @var int
   */
  public $createTime = null;
  /**
   * 评论内容
   * 
   * @var string
   */
  public $content = null;

  public function __construct($vals=null) {
    if (!isset(self::$_TSPEC)) {
      self::$_TSPEC = array(
        1 => array(
          'var' => 'id',
          'type' => TType::I32,
          ),
        2 => array(
          'var' => 'type',
          'type' => TType::I32,
          ),
        3 => array(
          'var' => 'postId',
          'type' => TType::I32,
          ),
        4 => array(
          'var' => 'userId',
          'type' => TType::I64,
          ),
        5 => array(
          'var' => 'nickName',
          'type' => TType::STRING,
          ),
        6 => array(
          'var' => 'avatarUrl',
          'type' => TType::STRING,
          ),
        7 => array(
          'var' => 'toUserId',
          'type' => TType::I64,
          ),
        8 => array(
          'var' => 'status',
          'type' => TType::I32,
          ),
        9 => array(
          'var' => 'createTime',
          'type' => TType::I64,
          ),
        10 => array(
          'var' => 'content',
          'type' => TType::STRING,
          ),
        );
    }
    if (is_array($vals)) {
      if (isset($vals['id'])) {
        $this->id = $vals['id'];
      }
      if (isset($vals['type'])) {
        $this->type = $vals['type'];
      }
      if (isset($vals['postId'])) {
        $this->postId = $vals['postId'];
      }
      if (isset($vals['userId'])) {
        $this->userId = $vals['userId'];
      }
      if (isset($vals['nickName'])) {
        $this->nickName = $vals['nickName'];
      }
      if (isset($vals['avatarUrl'])) {
        $this->avatarUrl = $vals['avatarUrl'];
      }
      if (isset($vals['toUserId'])) {
        $this->toUserId = $vals['toUserId'];
      }
      if (isset($vals['status'])) {
        $this->status = $vals['status'];
      }
      if (isset($vals['createTime'])) {
        $this->createTime = $vals['createTime'];
      }
      if (isset($vals['content'])) {
        $this->content = $vals['content'];
      }
    }
  }

  public function getName() {
    return 'TAdminMessageBox';
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
            $xfer += $input->readI32($this->type);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 3:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->postId);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 4:
          if ($ftype == TType::I64) {
            $xfer += $input->readI64($this->userId);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 5:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->nickName);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 6:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->avatarUrl);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 7:
          if ($ftype == TType::I64) {
            $xfer += $input->readI64($this->toUserId);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 8:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->status);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 9:
          if ($ftype == TType::I64) {
            $xfer += $input->readI64($this->createTime);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 10:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->content);
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
    $xfer += $output->writeStructBegin('TAdminMessageBox');
    if ($this->id !== null) {
      $xfer += $output->writeFieldBegin('id', TType::I32, 1);
      $xfer += $output->writeI32($this->id);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->type !== null) {
      $xfer += $output->writeFieldBegin('type', TType::I32, 2);
      $xfer += $output->writeI32($this->type);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->postId !== null) {
      $xfer += $output->writeFieldBegin('postId', TType::I32, 3);
      $xfer += $output->writeI32($this->postId);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->userId !== null) {
      $xfer += $output->writeFieldBegin('userId', TType::I64, 4);
      $xfer += $output->writeI64($this->userId);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->nickName !== null) {
      $xfer += $output->writeFieldBegin('nickName', TType::STRING, 5);
      $xfer += $output->writeString($this->nickName);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->avatarUrl !== null) {
      $xfer += $output->writeFieldBegin('avatarUrl', TType::STRING, 6);
      $xfer += $output->writeString($this->avatarUrl);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->toUserId !== null) {
      $xfer += $output->writeFieldBegin('toUserId', TType::I64, 7);
      $xfer += $output->writeI64($this->toUserId);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->status !== null) {
      $xfer += $output->writeFieldBegin('status', TType::I32, 8);
      $xfer += $output->writeI32($this->status);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->createTime !== null) {
      $xfer += $output->writeFieldBegin('createTime', TType::I64, 9);
      $xfer += $output->writeI64($this->createTime);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->content !== null) {
      $xfer += $output->writeFieldBegin('content', TType::STRING, 10);
      $xfer += $output->writeString($this->content);
      $xfer += $output->writeFieldEnd();
    }
    $xfer += $output->writeFieldStop();
    $xfer += $output->writeStructEnd();
    return $xfer;
  }

}


