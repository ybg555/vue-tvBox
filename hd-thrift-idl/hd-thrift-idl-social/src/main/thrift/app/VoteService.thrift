namespace java com.evergrande.social.vote.thrift



/**
 * 投票活动服务
 *
 * @since 1.5.0
 * @author yunbiao.liu
 * @date 2015年2月29日 
 * 
 */
service IVoteServiceGetVoteDetail{
    /**
     * 
     * 查看投票活动详情
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string getVoteDetail(1: string params)
}
service IVoteServiceVote{
    /**
     * 
     * 给帖子投票
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string vote(1: string params)
}
service IVoteServiceGetServerTime{
    /**
     * 
     * 获取服务器时间
     *
     * @return
     *
     * @author yunbiao.liu
     */
    i64 getServerTime()
}

service IVoteServiceGetVoteRankList{
    /**
     * 
     * 获取排行榜
     *
     * @return
     *
     * @author yunbiao.liu
     */
    string getVoteRankList(1:string params)
}
service IVoteServiceGetVotedPost{
    /**
     * 
     * 获取用户已投票的帖子列表
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string getVotedPost(1: string params)
}
service IVoteServiceGetPostListByVoteId{
    /**
     * 
     * 根据voteid查询帖子列表
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string getPostListByVoteId(1: string params)
}

