namespace java com.evergrande.social.admin.thrift

/**
 * 活动对象
 *
 * @since 1.1.0
 * @author zhijian.li
 * @date 2016年1月14日 上午9:09:15
 * 
 */
struct TActivity {

	/**
     * 活动数据结构
     */
	1: map<string, string> activityBase;
	
	/**
     * 指定小区
     */
	2: list<map<string, i32>> activityCommunities;

}