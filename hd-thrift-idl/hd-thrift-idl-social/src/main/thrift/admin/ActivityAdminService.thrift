namespace java com.evergrande.social.admin.thrift

include "TAdminActivityQueryData.thrift"
include "TActivity.thrift"
include "TAdminPostQueryData.thrift"
include "TAdminPrizeQueryData.thrift"

/**
 * 活动服务(后端）
 *
 * @since 1.1.0
 * @author zhijian.li
 * @date 2016年1月14日 上午9:09:15
 * 
 */
service IActivityAdminServiceGetAdminActivityList{

    /**
     * 
     * 查询活动列表
     * 
     * @param currentPage
     *          当前页
     * @param pageSize
     *          显示多少条
     * @return
     *
     * @author zhijian.li
     */
    TAdminActivityQueryData.TAdminActivityQueryData getAdminActivityList(1: i32 currentPage, 2: i32 pageSize)
}

service IActivityAdminServiceAddAdminActivity{

    /**
     * 
     * 新增活动
     * 
     * @param activity
     * @param activityCommunities
     * @return
     *
     * @author zhijian.li
     */
    bool addAdminActivity(1: string activity, 2: string activityCommunities)
}

service IActivityAdminServiceEditAdminActivity{

    /**
     * 
     * 编辑活动
     * 
     * @param activity
     * @param activityCommunities
     * @return
     *
     * @author zhijian.li
     */
    bool editAdminActivity(1: string activity, 2: string activityCommunities)
}

service IActivityAdminServiceGetAdminActivityById{

    /**
     * 
     * 根据活动id取活动信息
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    TActivity.TActivity getAdminActivityById(1: i32 id)
}

service IActivityAdminServiceUpdateAdminActivityStatus{

    /**
     * 
     * 设置活动状态
     * 
     * @param id
     * @param status
     * @return
     *
     * @author zhijian.li
     */
    bool updateAdminActivityStatus(1: i32 id, 2: i32 status)
}

service IActivityAdminServiceDeleteAdminActivity{

    /**
     * 
     * 删除活动
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    bool deleteAdminActivity(1: i32 id)
}

service IActivityAdminServiceGetAdminPostListByActivityId{

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
    TAdminPostQueryData.TAdminPostQueryData getAdminPostListByActivityId(1: i32 id, 2: i32 currentPage, 3: i32 pageSize)
}

service IActivityAdminServiceAddAdminPrize{

    /**
     * 
     * 新增中奖名单
     * 
     * @param prize
     * @return
     *
     * @author zhijian.li
     */
    bool addAdminPrize(1: string prize)
}

service IActivityAdminServiceDeleteAdminPrize{

    /**
     * 
     * 删除中奖名单
     * 
     * @param activityId
     * @param postId
     * @return
     *
     * @author zhijian.li
     */
    bool deleteAdminPrize(1: i32 activityId, 2: i32 postId)
}

service IActivityAdminServiceUpdateAdminPrizes{

    /**
     * 
     * 批量修改中奖名单，先全部删除，再挑选符合的插入
     * 
     * @param prizes
     * @return
     *
     * @author zhijian.li
     */
    bool updateAdminPrizes(1: string prizes)
}

service IActivityAdminServiceGetAdminPrizeList{

    /**
     * 
     * 根据活动id查询中奖名单列表
     * 
     * @param id
     * @param currentPage
     * @param pageSize
     * @return
     *
     * @author zhijian.li
     */
    TAdminPrizeQueryData.TAdminPrizeQueryData getAdminPrizeList(1: i32 id, 2: i32 currentPage, 3: i32 pageSize)
}

service IActivityAdminServiceConfirmPrizeList{

     /**
     * 
     * 确认中奖名单，修改活动的字段is_prized为1，推送中奖消息给用户
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    bool confirmPrizeList(1: i32 id)
}
