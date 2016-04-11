namespace java com.evergrande.social.admin.thrift

/**
 * 城市帖子关联信息 
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月30日 下午2:40:30
 * 
 */
struct TAdminCityPost {

	/**
     * 主键id
     */
    1: i32 id;

	/**
     * 帖子id
     */
    2: i32 postId;

	/**
     * 城市id
     */
    3: i32 cityId;

	/**
     * 小区id
     */
    4: i32 communityId;
    
}