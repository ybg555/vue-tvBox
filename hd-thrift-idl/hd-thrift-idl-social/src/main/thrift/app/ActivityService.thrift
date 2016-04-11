namespace java com.evergrande.social.thrift

/**
 * 活动服务(前端）
 *
 * @since 1.1.0
 * @author zhijian.li
 * @date 2016年1月18日 下午3:54:36
 * 
 */
service IActivityServiceGetActivityList{

    /**
     * 
     * 查询活动列表
     * 
     * @param communityId
     *          小区id
     * @param currentPage
     *          当前页
     * @param pageSize
     *          显示多少条
     * @return
     *
     * @author zhijian.li
     */
    list<map<string, string>> getActivityList(1: i32 communityId, 2: i32 currentPage, 3: i32 pageSize)
}

service IActivityServiceGetActivityById{

    /**
     * 
     * 根据活动id取活动信息
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    map<string, string> getActivityById(1: i32 id)
}

service IActivityServiceGetPostListByActivityId{

    /**
     * 
     * 根据活动id查询帖子列表
     * 
     * @param id
     * @param currentPage
     * @param pageSize
     * @return
     *
     * @author zhijian.li
     */
    list<map<string, string>> getPostListByActivityId(1: i32 id, 2: i32 currentPage, 3: i32 pageSize)
}
