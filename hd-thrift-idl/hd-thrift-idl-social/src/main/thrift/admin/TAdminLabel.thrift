namespace java com.evergrande.social.admin.thrift

/**
 * 标签
 *
 * @since 0.0.1
 * @author bjf
 * @date 2015年9月24日 下午5:34:32
 * 
 */
struct TAdminLabel {
	/**
     * 主键id
     */
    1: i32 id;

    /**
     * 标签名称
     */
    2: string name;

    /**
     * 0-普通 1-活动
     */
    3: i32 type;
    
    /**
     * 图片完整地址 如：http://image.evergrande.com/aa.jpg
     */
    4: string iconUrl;
    
    /**
     * 1-启用 0-禁用 数据库默认是1
     */
    5: i32 status;
    
    /**
     * 排序的序号(数字越小越靠前显示)
     */
    6: i32 sortNum;
    
    /**
     * 创建时间
     */
    7: i64 createTime;
    
    /**
     * 是否进行活动规则配置：0-否 1-是
     */
    8: i32 hasRule;

    /**
     * 活动主题
     */
    9: string activityTheme;
    
    /**
     * 活动开始时间
     */
    10: i64 activityStartTime;
    
    /**
     * 活动结束时间
     */
    11: i64 activityEndTime;
    
    /**
     * 活动介绍
     */
    12: string activityDescription;
    
    /**
     * 活动奖品
     */
    13: string activityPrize;
	
}