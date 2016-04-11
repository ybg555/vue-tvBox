namespace java com.evergrande.social.admin.thrift

/**
 * 原因
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
struct TAdminReason {

	/**
     * 主键
     */
    1: i32 id;

    /**
     * 原因类型 1-删除帖子原因 数据库默认1
     */
    2: i32 type;

    /**
     * 排序的序号(数字越小越靠前显示)
     */
    3: i32 sortNum;

    /**
     * 内容
     */
    4: string content;

    /**
     * 创建时间
     */
    5: i64 createTime;

}