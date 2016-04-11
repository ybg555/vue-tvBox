namespace java com.evergrande.social.thrift

/**
 * 帖子信息
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
struct TPost {

	/**
     * 主键id
     */
    1: i32 id;
    
    /**
     * 用户id
     */
    2: i64 userId;

    /**
     * 用户昵称
     */
    3: string nickName;
    
    /**
     * 用户头像
     */
    4: string avatarUrl;

    /**
     * 是否管理员发布 0-不是 1-是
     */
    5: i32 isAdmin;

    /**
     * 活动开始时间
     */
    6: i64 activityStartTime;

    /**
     * 1-正常 0-删除 2-屏蔽
     */
    7: i32 status;

    /**
     * 标签id 默认-1
     */
    8: i32 labelId;

    /**
     * 标签名称
     */
    9: string labelName;
    /**
     * 标签类型
     */
    10: i32 labelType;

    /**
     * 浏览次数
     */
    11: i32 browse;

    /**
     * 多个图片链接，用 #_# 分割
     */
    12: string imageUrl;

    /**
     * 帖子内容
     */
    13: string content;

    /**
     * 备注 可用来写删除帖子的原因
     */
    14: string mark;

    /**
     * 被赞的次数
     */
    15: i32 praiseCount;
    
    /**
     * 被评论的次数
     */
    16: i32 commentCount;
    
    /**
     * 参加活动计数
     */
    17: i32 activityCount;

    /**
     * 创建时间
     */
    18: i64 createTime;
    /**
     * 服务器时间
     */
    19: i64 serverTime;
    
    /**
     * 帖子是否被登录用户赞过
     */
    20: bool myPraise;
    
    /**
     * 登录用户是否参加了活动
     */
    21: bool myActivity;
    
    /**
     * 小区id
     */
    22: i32 communityId;
   /**
     * 0-普通 1-置顶
     */
    23: i32 topType;
    /**
     * 是否进行活动规则配置：0-否 1-是
     */
    24: i32 hasRule;

}