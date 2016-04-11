namespace java com.evergrande.social.admin.thrift

include "TAdminComment.thrift"

/**
 * 评论分页对象
 *
 * @since 0.0.1
 * @author zhijian.li
 * @date 2015年11月27日下午3:45:11
 * 
 */
struct TAdminCommentQueryData {

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
	5: list<TAdminComment.TAdminComment> dataList;

}