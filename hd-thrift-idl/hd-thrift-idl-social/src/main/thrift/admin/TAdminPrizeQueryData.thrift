namespace java com.evergrande.social.admin.thrift

/**
 * 中奖名单分页对象
 *
 * @since 1.1.0
 * @author zhijian.li
 * @date 2016年1月14日 上午9:09:15
 * 
 */
struct TAdminPrizeQueryData {

	/**
     * 总数
     */
	1: i32 totalCount;
	
	/**
     * 总页数
     */
	2: i32 totalPage;
	
	/**
     * 一页多少条
     */
	3: i32 pageSize;
	
	/**
     * 当前页
     */
	4: i32 currPage;
	
	/**
     * 返回的集合对象
     */
	5: list<map<string, string>> dataList;

}