namespace java com.evergrande.social.thrift

/**
 * 标签
 *
 * @since 0.0.1
 * @author bjf
 * @date 2015年9月24日 下午5:34:32
 * 
 */
struct TLabel {
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
	
}