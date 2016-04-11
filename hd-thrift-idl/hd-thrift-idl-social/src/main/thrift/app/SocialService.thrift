namespace java com.evergrande.social.thrift

include "TLabel.thrift"
include "TComment.thrift"
include "TMessageBox.thrift"
include "TPost.thrift"
include "TPraise.thrift"
include "TReason.thrift"
include "TActivityApply.thrift"

/**
 * 社交服务
 *
 * @since 1.0.0
 * @author bjf
 * @date 2015年9月1日 下午5:34:32
 * 
 */
service ISocialServiceGetLabelList{
    /**
     * 
     * 取标签列表
     * 
     * @param num
     *            取多少个标签
     * @return
     *
     * @author jinfeng.bin
     */
    list<TLabel.TLabel> getLabelList(1: i32 num)
}

service ISocialServiceGetLabelDetailById{
    /**
     * 
     * 取标签详情
     * 
     * @param id
     *            标签id
     * @return
     *
     * @author jinfeng.bin
     */
    string getLabelDetailById(1: i32 id)
}

service ISocialServiceGetPostList{
    /**
     * 
     * 帖子列表
     * 
     * @param communityId
     * @param labelId
     * @param currentPage
     * @param pageSize
     * @return
     *
     * @author jinfeng.bin
     */
    list<TPost.TPost> getPostList(1: i32 communityId, 2: i32 labelId, 3:i32 currentPage, 4:i32 pageSize)
}

service ISocialServiceAddPost{
    /**
     * 
     * 发布帖子
     * 
     * @param post
     * @return
     *
     * @author jinfeng.bin
     */
    i32 addPost(1: TPost.TPost post)
}

service ISocialServiceDeletePost{
    /**
     * 删除帖子
     * 
     * @param id
     * @param mark
     * @return
     *
     * @author jinfeng.bin
     */
    bool deletePost(1:i32 id, 2:string mark)
}

service ISocialServiceGetPostById{
    /**
     * 
     * 帖子详情
     * 
     * @param id
     * @return
     *
     * @author jinfeng.bin
     */
    TPost.TPost getPostById(1:i32 id)
}

service ISocialServiceGetPostByUser{
    /**
     * 
     * 用户发布的帖子列表
     * 
     * @param userId
     * @param currentPage
     * @param pageSize
     * @return
     *
     * @author jinfeng.bin
     */
    list<TPost.TPost> getPostByUser(1:i64 userId,2:i32 currentPage, 3:i32 pageSize)
}

service ISocialServiceGetNewMsgCount{
    /**
     * 
     * 新消息的数目
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    i32 getNewMsgCount()
}

service ISocialServiceGetMessageList{
    /**
     * 
     * 新消息列表
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    list<TMessageBox.TMessageBox> getMessageList()
}

service ISocialServiceAddComment{
    /**
     * 
     * 发表评论
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    i32 addComment(1:TComment.TComment comm)
}

service ISocialServiceDeleteComment{
    /**
     * 
     * 删除评论
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    bool deleteComment(1:i32 id)
}

service ISocialServiceGetCommentList{
    /**
     * 
     * 帖子评论列表
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    list<TComment.TComment> getCommentList(1:i32 postId, 2:i32 currentPage, 3:i32 pageSize)
}

service ISocialServiceAddPostInform{
    /**
     * 
     * 举报帖子
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    bool addPostInform(1:i32 postId, 2:string content)
}

service ISocialServiceAddPraise{
    /**
     * 
     * 点赞
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    bool addPraise(1:i32 postId, 2:i64 postUserId)
}

service ISocialServiceCancelPraise{
    /**
     * 
     * 取消点赞
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    bool cancelPraise(1:i32 postId)
}

service ISocialServiceGetPraiseList{
    /**
     * 
     * 帖子的点赞用户列表
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    list<TPraise.TPraise> getPraiseList(1:i32 postId,2:i32 currentPage,3:i32 pageSize)
}

service ISocialServiceAddActivityApply{
    /**
     * 
     * 活动报名
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    bool addActivityApply(1:i32 postId)
}

service ISocialServiceCancelActivityApply{
    /**
     * 
     * 取消活动报名
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    bool cancelActivityApply(1:i32 postId)
}

service ISocialServiceGetReasonList{
    /**
     * 
     * 原因列表
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    list<TReason.TReason> getReasonList()
}

service ISocialServiceGetActivityApplyList{
    /**
     * 
     * 帖子的点赞用户列表
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    list<TActivityApply.TActivityApply> getActivityApplyList(1:i32 postId,2:i32 currentPage,3:i32 pageSize)
}


  /**
     0406 *******************************************************************************
  */
  
service ISocialServiceGetPostInfoList{
    /**
     * 
     * 帖子列表
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    string getPostInfoList(1:string params)
}
service ISocialServiceGetPostByUserId{
    /**
     * 
     * 用户发布的帖子列表
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    string getPostByUserId(1:string params)
}
service ISocialServiceGetPostDetail{
    /**
     * 
     * 帖子详情
     * 
     * @return
     *
     * @author jinfeng.bin
     */
    string getPostDetail(1:string params)
}























