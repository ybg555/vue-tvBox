namespace java com.evergrande.social.admin.thrift

/**
 * 活动报名
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
struct TAdminActivityApply {

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
    6: i64 postUserId;

    /**
     * 创建时间
     */
    7: i64 createTime;
    
    /**
     * 手机号码
     */
    8: string mobile;

}