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
 * 帖子信息
 * 
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
class TPost {
  static $_TSPEC;

  /**
   * 主键id
   * 
   * @var int
   */
  public $id = null;
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
   * 是否管理员发布 0-不是 1-是
   * 
   * @var int
   */
  public $isAdmin = null;
  /**
   * 活动开始时间
   * 
   * @var int
   */
  public $activityStartTime = null;
  /**
   * 1-正常 0-删除 2-屏蔽
   * 
   * @var int
   */
  public $status = null;
  /**
   * 标签id 默认-1
   * 
   * @var int
   */
  public $labelId = null;
  /**
   * 标签名称
   * 
   * @var string
   */
  public $labelName = null;
  /**
   * 标签类型
   * 
   * @var int
   */
  public $labelType = null;
  /**
   * 浏览次数
   * 
   * @var int
   */
  public $browse = null;
  /**
   * 多个图片链接，用 #_# 分割
   * 
   * @var string
   */
  public $imageUrl = null;
  /**
   * 帖子内容
   * 
   * @var string
   */
  public $content = null;
  /**
   * 备注 可用来写删除帖子的原因
   * 
   * @var string
   */
  public $mark = null;
  /**
   * 被赞的次数
   * 
   * @var int
   */
  public $praiseCount = null;
  /**
   * 被评论的次数
   * 
   * @var int
   */
  public $commentCount = null;
  /**
   * 参加活动计数
   * 
   * @var int
   */
  public $activityCount = null;
  /**
   * 创建时间
   * 
   * @var int
   */
  public $createTime = null;
  /**
   * 服务器时间
   * 
   * @var int
   */
  public $serverTime = null;
  /**
   * 帖子是否被登录用户赞过
   * 
   * @var bool
   */
  public $myPraise = null;
  /**
   * 登录用户是否参加了活动
   * 
   * @var bool
   */
  public $myActivity = null;
  /**
   * 小区id
   * 
   * @var int
   */
  public $communityId = null;
  /**
   * 0-普通 1-置顶
   * 
   * @var int
   */
  public $topType = null;
  /**
   * 是否进行活动规则配置：0-否 1-是
   * 
   * @var int
   */
  public $hasRule = null;

  public function __construct($vals=null) {
    if (!isset(self::$_TSPEC)) {
      self::$_TSPEC = array(
        1 => array(
          'var' => 'id',
          'type' => TType::I32,
          ),
        2 => array(
          'var' => 'userId',
          'type' => TType::I64,
          ),
        3 => array(
          'var' => 'nickName',
          'type' => TType::STRING,
          ),
        4 => array(
          'var' => 'avatarUrl',
          'type' => TType::STRING,
          ),
        5 => array(
          'var' => 'isAdmin',
          'type' => TType::I32,
          ),
        6 => array(
          'var' => 'activityStartTime',
          'type' => TType::I64,
          ),
        7 => array(
          'var' => 'status',
          'type' => TType::I32,
          ),
        8 => array(
          'var' => 'labelId',
          'type' => TType::I32,
          ),
        9 => array(
          'var' => 'labelName',
          'type' => TType::STRING,
          ),
        10 => array(
          'var' => 'labelType',
          'type' => TType::I32,
          ),
        11 => array(
          'var' => 'browse',
          'type' => TType::I32,
          ),
        12 => array(
          'var' => 'imageUrl',
          'type' => TType::STRING,
          ),
        13 => array(
          'var' => 'content',
          'type' => TType::STRING,
          ),
        14 => array(
          'var' => 'mark',
          'type' => TType::STRING,
          ),
        15 => array(
          'var' => 'praiseCount',
          'type' => TType::I32,
          ),
        16 => array(
          'var' => 'commentCount',
          'type' => TType::I32,
          ),
        17 => array(
          'var' => 'activityCount',
          'type' => TType::I32,
          ),
        18 => array(
          'var' => 'createTime',
          'type' => TType::I64,
          ),
        19 => array(
          'var' => 'serverTime',
          'type' => TType::I64,
          ),
        20 => array(
          'var' => 'myPraise',
          'type' => TType::BOOL,
          ),
        21 => array(
          'var' => 'myActivity',
          'type' => TType::BOOL,
          ),
        22 => array(
          'var' => 'communityId',
          'type' => TType::I32,
          ),
        23 => array(
          'var' => 'topType',
          'type' => TType::I32,
          ),
        24 => array(
          'var' => 'hasRule',
          'type' => TType::I32,
          ),
        );
    }
    if (is_array($vals)) {
      if (isset($vals['id'])) {
        $this->id = $vals['id'];
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
      if (isset($vals['isAdmin'])) {
        $this->isAdmin = $vals['isAdmin'];
      }
      if (isset($vals['activityStartTime'])) {
        $this->activityStartTime = $vals['activityStartTime'];
      }
      if (isset($vals['status'])) {
        $this->status = $vals['status'];
      }
      if (isset($vals['labelId'])) {
        $this->labelId = $vals['labelId'];
      }
      if (isset($vals['labelName'])) {
        $this->labelName = $vals['labelName'];
      }
      if (isset($vals['labelType'])) {
        $this->labelType = $vals['labelType'];
      }
      if (isset($vals['browse'])) {
        $this->browse = $vals['browse'];
      }
      if (isset($vals['imageUrl'])) {
        $this->imageUrl = $vals['imageUrl'];
      }
      if (isset($vals['content'])) {
        $this->content = $vals['content'];
      }
      if (isset($vals['mark'])) {
        $this->mark = $vals['mark'];
      }
      if (isset($vals['praiseCount'])) {
        $this->praiseCount = $vals['praiseCount'];
      }
      if (isset($vals['commentCount'])) {
        $this->commentCount = $vals['commentCount'];
      }
      if (isset($vals['activityCount'])) {
        $this->activityCount = $vals['activityCount'];
      }
      if (isset($vals['createTime'])) {
        $this->createTime = $vals['createTime'];
      }
      if (isset($vals['serverTime'])) {
        $this->serverTime = $vals['serverTime'];
      }
      if (isset($vals['myPraise'])) {
        $this->myPraise = $vals['myPraise'];
      }
      if (isset($vals['myActivity'])) {
        $this->myActivity = $vals['myActivity'];
      }
      if (isset($vals['communityId'])) {
        $this->communityId = $vals['communityId'];
      }
      if (isset($vals['topType'])) {
        $this->topType = $vals['topType'];
      }
      if (isset($vals['hasRule'])) {
        $this->hasRule = $vals['hasRule'];
      }
    }
  }

  public function getName() {
    return 'TPost';
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
          if ($ftype == TType::I64) {
            $xfer += $input->readI64($this->userId);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 3:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->nickName);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 4:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->avatarUrl);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 5:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->isAdmin);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 6:
          if ($ftype == TType::I64) {
            $xfer += $input->readI64($this->activityStartTime);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 7:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->status);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 8:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->labelId);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 9:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->labelName);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 10:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->labelType);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 11:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->browse);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 12:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->imageUrl);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 13:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->content);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 14:
          if ($ftype == TType::STRING) {
            $xfer += $input->readString($this->mark);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 15:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->praiseCount);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 16:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->commentCount);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 17:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->activityCount);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 18:
          if ($ftype == TType::I64) {
            $xfer += $input->readI64($this->createTime);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 19:
          if ($ftype == TType::I64) {
            $xfer += $input->readI64($this->serverTime);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 20:
          if ($ftype == TType::BOOL) {
            $xfer += $input->readBool($this->myPraise);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 21:
          if ($ftype == TType::BOOL) {
            $xfer += $input->readBool($this->myActivity);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 22:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->communityId);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 23:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->topType);
          } else {
            $xfer += $input->skip($ftype);
          }
          break;
        case 24:
          if ($ftype == TType::I32) {
            $xfer += $input->readI32($this->hasRule);
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
    $xfer += $output->writeStructBegin('TPost');
    if ($this->id !== null) {
      $xfer += $output->writeFieldBegin('id', TType::I32, 1);
      $xfer += $output->writeI32($this->id);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->userId !== null) {
      $xfer += $output->writeFieldBegin('userId', TType::I64, 2);
      $xfer += $output->writeI64($this->userId);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->nickName !== null) {
      $xfer += $output->writeFieldBegin('nickName', TType::STRING, 3);
      $xfer += $output->writeString($this->nickName);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->avatarUrl !== null) {
      $xfer += $output->writeFieldBegin('avatarUrl', TType::STRING, 4);
      $xfer += $output->writeString($this->avatarUrl);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->isAdmin !== null) {
      $xfer += $output->writeFieldBegin('isAdmin', TType::I32, 5);
      $xfer += $output->writeI32($this->isAdmin);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->activityStartTime !== null) {
      $xfer += $output->writeFieldBegin('activityStartTime', TType::I64, 6);
      $xfer += $output->writeI64($this->activityStartTime);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->status !== null) {
      $xfer += $output->writeFieldBegin('status', TType::I32, 7);
      $xfer += $output->writeI32($this->status);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->labelId !== null) {
      $xfer += $output->writeFieldBegin('labelId', TType::I32, 8);
      $xfer += $output->writeI32($this->labelId);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->labelName !== null) {
      $xfer += $output->writeFieldBegin('labelName', TType::STRING, 9);
      $xfer += $output->writeString($this->labelName);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->labelType !== null) {
      $xfer += $output->writeFieldBegin('labelType', TType::I32, 10);
      $xfer += $output->writeI32($this->labelType);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->browse !== null) {
      $xfer += $output->writeFieldBegin('browse', TType::I32, 11);
      $xfer += $output->writeI32($this->browse);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->imageUrl !== null) {
      $xfer += $output->writeFieldBegin('imageUrl', TType::STRING, 12);
      $xfer += $output->writeString($this->imageUrl);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->content !== null) {
      $xfer += $output->writeFieldBegin('content', TType::STRING, 13);
      $xfer += $output->writeString($this->content);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->mark !== null) {
      $xfer += $output->writeFieldBegin('mark', TType::STRING, 14);
      $xfer += $output->writeString($this->mark);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->praiseCount !== null) {
      $xfer += $output->writeFieldBegin('praiseCount', TType::I32, 15);
      $xfer += $output->writeI32($this->praiseCount);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->commentCount !== null) {
      $xfer += $output->writeFieldBegin('commentCount', TType::I32, 16);
      $xfer += $output->writeI32($this->commentCount);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->activityCount !== null) {
      $xfer += $output->writeFieldBegin('activityCount', TType::I32, 17);
      $xfer += $output->writeI32($this->activityCount);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->createTime !== null) {
      $xfer += $output->writeFieldBegin('createTime', TType::I64, 18);
      $xfer += $output->writeI64($this->createTime);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->serverTime !== null) {
      $xfer += $output->writeFieldBegin('serverTime', TType::I64, 19);
      $xfer += $output->writeI64($this->serverTime);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->myPraise !== null) {
      $xfer += $output->writeFieldBegin('myPraise', TType::BOOL, 20);
      $xfer += $output->writeBool($this->myPraise);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->myActivity !== null) {
      $xfer += $output->writeFieldBegin('myActivity', TType::BOOL, 21);
      $xfer += $output->writeBool($this->myActivity);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->communityId !== null) {
      $xfer += $output->writeFieldBegin('communityId', TType::I32, 22);
      $xfer += $output->writeI32($this->communityId);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->topType !== null) {
      $xfer += $output->writeFieldBegin('topType', TType::I32, 23);
      $xfer += $output->writeI32($this->topType);
      $xfer += $output->writeFieldEnd();
    }
    if ($this->hasRule !== null) {
      $xfer += $output->writeFieldBegin('hasRule', TType::I32, 24);
      $xfer += $output->writeI32($this->hasRule);
      $xfer += $output->writeFieldEnd();
    }
    $xfer += $output->writeFieldStop();
    $xfer += $output->writeStructEnd();
    return $xfer;
  }

}


