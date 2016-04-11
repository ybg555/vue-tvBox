namespace java com.evergrande.social.admin.thrift

/**
 * 帖子评论
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
struct TAdminComment {

	/**
     * 主键id
     */
    1: i32 id;

    /**
     * 帖子id
     */
    2: i32 postId;

    /**
     * 用户id
     */
    3: i64 userId;

    /**
     * 用户昵称
     */
    4: string nickName;
    
    /**
     * 用户头像
     */
    5: string avatarUrl;

    /**
     * 父id
     */
    6: i32 pid;
    
    /**
     * 状态 1-正常 0-删除
     */
    7: i32 status;

    /**
     * 评论内容
     */
    8: string content;

    /**
     * 创建时间
     */
    9: i64 createTime;
    
    /**
     * 手机号
     */
    10: string mobile;
    
    /**
     * 被回复人的用户名
     */
    11: string toNickName;
    
    /**
     * 被回复人的手机号
     */
    12: string toMobile;
    
    /**
     * 被回复人的用户id
     */
    13: i64 toUserId;

}