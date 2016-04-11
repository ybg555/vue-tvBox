namespace java com.evergrande.social.thrift

/**
 * 帖子 赞
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
struct TPraise {

	/**
     * 主键
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
     * 发帖人用户id
     */
    6: i32 postUserId;
    
    /**
     * 创建时间
     */
    7: i64 createTime;

}