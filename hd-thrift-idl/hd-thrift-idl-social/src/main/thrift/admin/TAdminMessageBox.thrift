namespace java com.evergrande.social.admin.thrift

/**
 * 消息
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
struct TAdminMessageBox {

	/**
     * 主键
     */
    1: i32 id;

    /**
     * 1-赞 2-评论
     */
    2: i32 type;

    /**
     * 帖子id
     */
    3: i32 postId;

    /**
     * 用户id
     */
    4: i64 userId;

    /**
     * 用户昵称
     */
    5: string nickName;
    
    /**
     * 用户头像
     */
    6: string avatarUrl;
    
    /**
     * 被回复用户的userid
     */
    7: i64 toUserId;

    /**
     * 状态 1-已读 0-未读 数据库默认0
     */
    8: i32 status;

    /**
     * 创建时间
     */
    9: i64 createTime;

    /**
     * 评论内容
     */
    10: string content;

}