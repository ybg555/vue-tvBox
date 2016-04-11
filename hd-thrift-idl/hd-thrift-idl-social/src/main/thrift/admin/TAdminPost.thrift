namespace java com.evergrande.social.admin.thrift

/**
 * 帖子信息
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
struct TAdminPost {

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
     * 1-正常 0-屏蔽
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
     * 浏览次数
     */
    10: i32 browse;

    /**
     * 多个图片链接，用 #_# 分割
     */
    11: string imageUrl;

    /**
     * 帖子内容
     */
    12: string content;

    /**
     * 备注 可用来写删除帖子的原因
     */
    13: string mark;

    /**
     * 被赞的次数
     */
    14: i32 praiseCount;
    
    /**
     * 被评论的次数
     */
    15: i32 commentCount;

    /**
     * 创建时间
     */
    16: i64 createTime;
    
    /**
     * 标签类型0-普通 1-活动
     */
    17: i32 labelType;
    
    /**
     * 用户手机号
     */
    18: string mobile;
    
    /**
     * 城市+小区列表
     */
    19: list<string> cityCommunities;
    
    /**
     * 参加活动数
     */
    20: i32 applyCount;
    
    /**
     * 是否被举报：1：是，0：否
     */
    21: i32 inform;
    
    /**
     * 0-正常 1-用户删除 2-管理员删除
     */
    22: i32 isDelete;
    
    /**
     * 0-正常 1-处理违规 2-处理不违规
     */
    23: i32 informStatus;
    
    /**
     * 是否通知发帖人（仅当status为0时有效）： 1-通知 0-不通知
     */
    24: i32 notify;
    
    /**
     * 是否符合活动规则： 0-不符合 1-符合
     */
    25: i32 isConform;

}