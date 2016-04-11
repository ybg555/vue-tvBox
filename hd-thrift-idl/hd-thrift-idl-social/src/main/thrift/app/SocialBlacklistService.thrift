namespace java com.evergrande.social.thrift


service ISocialServiceAddSocialBlacklist{
    /**
     * 
     * 添加黑名单
     * 
     * @param blackUserId
     *            用户id
     * @return
     *
     * @author jinfeng.bin
     */
    string addSocialBlacklist(1: i64 blackUserId)
}
























