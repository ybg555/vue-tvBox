namespace java com.evergrande.social.vote.admin.thrift



/**
 * 投票活动后台
 *
 * @since 1.5.0
 * @author yunbiao.liu
 * @date 2015年2月29日 
 * 
 */
service IVoteServiceAddVote{
    /**
     * 
     * 新增投票活动
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string addVote(1: string params)
}
service IVoteServiceUpdateVote{
    /**
     * 
     * 更新投票活动
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string updateVote(1: string params)
}
service IVoteServiceGetVoteList{
    /**
     * 
     * 投票活动列表
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string getVoteList(1: string params)
}

service IVoteServiceGetVote{
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
    string getVote(1: string params)
}

service IVoteServiceGetJoinList{
    /**
     * 
     * 报名人数列表
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string getJoinList(1: string params)
}
service IVoteServiceSetCandidate{
    /**
     * 
     * 设置候选人
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string setCandidate(1: string params)
}
service IVoteServiceSetPrize{
    /**
     * 
     * 设置获奖人
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string setPrize(1: string params)
}
service IVoteServiceEditAddVotes{
    /**
     * 
     * 设置获奖人
     * 
     * @param params
     		参数
     * @return
     *
     * @author yunbiao.liu
     */
    string editAddVotes(1: string params)
}