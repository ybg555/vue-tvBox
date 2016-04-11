namespace java com.evergrande.social.admin.thrift

include "TAdminLabel.thrift"
include "TAdminLabelQueryData.thrift"
include "TAdminPost.thrift"
include "TAdminActivityApply.thrift"
include "TAdminComment.thrift"
include "TAdminCommentQueryData.thrift"
include "TAdminReason.thrift"
include "TAdminCityPost.thrift"
include "TAdminPostQueryData.thrift"
include "TAdminPostInform.thrift"

/**
 * 社交服务(后端）
 *
 * @since 1.0.0
 * @author zhijian.li
 * @date 2015年11月27日下午5:42:17
 * 
 */
service ISocialAdminServiceGetAdminLabelList{

    /**
     * 
     * 取展示标签
     * 
     * @param currentPage
     *          当前页
     * @param pageSize
     *          显示多少条
     * @return
     *
     * @author zhijian.li
     */
    TAdminLabelQueryData.TAdminLabelQueryData getAdminLabelList(1:string params)
}

service ISocialAdminServiceAddAdminLabel{

    /**
     * 
     * 新增标签
     * 
     * @param label
     * @return
     *
     * @author zhijian.li
     */
    bool addAdminLabel(1: TAdminLabel.TAdminLabel label)
}

service ISocialAdminServiceEditAdminLabel{

    /**
     * 
     * 编辑标签
     * 
     * @param label
     * @return
     *
     * @author zhijian.li
     */
    bool editAdminLabel(1: TAdminLabel.TAdminLabel label)
}

service ISocialAdminServiceGetAdminLabelById{

    /**
     * 
     * 根据标签id取标签信息
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    TAdminLabel.TAdminLabel getAdminLabelById(1: i32 id)
}

service ISocialAdminServiceUpdateAdminLabelStatus{

    /**
     * 
     * 设置标签状态
     * 
     * @param label
     * @return
     *
     * @author zhijian.li
     */
    bool updateAdminLabelStatus(1: TAdminLabel.TAdminLabel label)
}

service ISocialAdminServiceDeleteAdminLabel{

    /**
     * 删除标签
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    bool deleteAdminLabel(1: i32 id)
}

service ISocialAdminServiceAddAdminPost{

    /**
     * 
     * 新增帖子
     * 
     * @param post
     * @return
     *
     * @author zhijian.li
     */
    bool addAdminPost(1: TAdminPost.TAdminPost post, 2: list<TAdminCityPost.TAdminCityPost> cityPosts)
}

service ISocialAdminServiceAddAdminPostUseMobile{

    /**
     * 
     * 新增帖子
     * 
     * @param post
     * @return
     *
     * @author zhijian.li
     */
    bool addAdminPostUseMobile(1: TAdminPost.TAdminPost post, 2: list<TAdminCityPost.TAdminCityPost> cityPosts)
}

service ISocialAdminServiceGetAdminPostById{

    /**
     * 
     * 根据id取帖子详细信息
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    TAdminPost.TAdminPost getAdminPostById(1: i32 id)
}

service ISocialAdminServiceGetAdminApplyList{

    /**
     * 
     * 根据帖子id取帖子的活动报名列表
     * 
     * @param postId
     *          帖子id
     * @return
     *
     * @author zhijian.li
     */
    list<TAdminActivityApply.TAdminActivityApply> getAdminApplyList(1: i32 postId)
}

service ISocialAdminServiceGetAdminCommentList{

    /**
     * 
     * 根据帖子id取帖子评论列表
     * 
     * @param postId
     *          帖子id
     * @param content
     *          话题内容
     * @param currentPage
     *          当前页
     * @param pageSize
     *          显示多少条
     * @return
     *
     * @author zhijian.li
     */
    TAdminCommentQueryData.TAdminCommentQueryData getAdminCommentList(1: i32 postId, 2: string content, 3: i32 currentPage, 4: i32 pageSize)
}

service ISocialAdminServiceAddAdminComment{

    /**
     * 
     * 新增评论
     * 
     * @param comment
     * @return
     *
     * @author zhijian.li
     */
    bool addAdminComment(1: TAdminComment.TAdminComment comment)
}

service ISocialAdminServiceAddAdminCommentUseMobile{

    /**
     * 
     * 新增评论
     * 
     * @param comment
     * @return
     *
     * @author zhijian.li
     */
    bool addAdminCommentUseMobile(1: TAdminComment.TAdminComment comment)
}

service ISocialAdminServiceDeleteAdminComment{

    /**
     * 
     * 删除评论
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    bool deleteAdminComment(1: i32 id)
}

service ISocialAdminServiceAddAdminReason{

    /**
     * 
     * 新增原因
     * 
     * @param reason
     * @return
     *
     * @author zhijian.li
     */
    bool addAdminReason(1: TAdminReason.TAdminReason reason)
}

service ISocialAdminServiceDeleteAdminReason{

    /**
     * 
     * 删除原因
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    bool deleteAdminReason(1: i32 id)
}

service ISocialAdminServiceGetAdminPostList{

    /**
     * 
     * 查询帖子列表
     * 
     * @param content
     *          内容
     * @param mobile
     *          发布人手机号
     * @param nickName
     *            用户昵称
     * @param objType
     *          类型：1-标签 2-活动
     * @param objId
     *          相关类型的id
     * @param createTimeStart
     *          发布时间开始
     * @param createTimeEnd
     *          发布时间结束
     * @param cityId
     *          城市id
     * @param communityId
     *          小区id
     * @param inform
     *          是否被举报：1：是，0：否
     * @param currentPage
     *          当前页
     * @param pageSize
     *          显示多少条
     * @return
     *
     * @author zhijian.li
     */
    TAdminPostQueryData.TAdminPostQueryData getAdminPostList(1: string content, 2: string mobile, 3: string nickName, 4: i32 objType, 5: i32 objId,
    	6: i64 createTimeStart, 7: i64 createTimeEnd, 8: i32 cityId, 9: i32 communityId, 10: i32 inform,
    	11: i32 currentPage, 12: i32 pageSize)
}

service ISocialAdminServiceUpdateAdminPostStatus{

    /**
     * 
     * 更新帖子状态
     * 
     * @param post
     * @return
     *
     * @author zhijian.li
     */
    bool updateAdminPostStatus(1: TAdminPost.TAdminPost post)
}

service ISocialAdminServiceDeletePostInformFromPostId{

    /**
     * 
     * 根据帖子id删除帖子举报 
     * 
     * @param postId
     * @return
     *
     * @author zhijian.li
     */
    bool deletePostInformFromPostId(1: i32 postId)
}

service ISocialAdminServiceDealWithIllegal{

    /**
     * 
     * 处理违规
     * 
     * @param postId
     * @returns
     *
     * @author zhijian.li
     */
    bool dealWithIllegal(1: i32 postId)
}

service ISocialAdminServiceDealWithLegitimate{

    /**
     * 
     * 处理不违规
     * 
     * @param postId
     * @returns
     *
     * @author zhijian.li
     */
    bool dealWithLegitimate(1: i32 postId)
}

service ISocialAdminServiceGetAdminReasonList{

    /**
     * 
     * 查询原因列表
     * 
     * @return
     *
     * @author zhijian.li
     */
    list<TAdminReason.TAdminReason> getAdminReasonList()
}

service ISocialAdminServiceGetAdminReasonById{

    /**
     * 
     * 根据原因id取原因详细信息
     * 
     * @param id
     * @return
     *
     * @author zhijian.li
     */
    TAdminReason.TAdminReason getAdminReasonById(1: i32 id)
}

service ISocialAdminServiceUpdateAdminReason{

    /**
     * 
     * 编辑原因
     * 
     * @param reason
     * @return
     *
     * @author zhijian.li
     */
    bool updateAdminReason(1: TAdminReason.TAdminReason reason)
}

service ISocialAdminServiceGetAdminPostInformList{

    /**
     * 
     * 根据帖子id取帖子举报列表
     * 
     * @param postId
     *          帖子id
     * @return
     *
     * @author zhijian.li
     */
    list<TAdminPostInform.TAdminPostInform> getAdminPostInformList(1: i32 postId)
}

service ISocialAdminServiceDeleteAdminPost{

    /**
     * 
     * 删除帖子
     * 
     * @param post
     * @return
     *
     * @author zhijian.li
     */
    bool deleteAdminPost(1: TAdminPost.TAdminPost post)
}