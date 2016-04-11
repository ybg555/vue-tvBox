namespace java com.evergrande.social.admin.thrift



/**
 * 置顶服务(后端）
 *
 * @since 1.0.0
 * @author zhijian.li
 * @date 2015年11月27日下午5:42:17
 * 
 */
service IPostTopServiceQueryPostTop{

    /**
     * 
     * 查询置顶列表（分页）
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string queryPostTop(1:string params);
}

service IPostTopServiceAddTop{

    /**
     * 
     * 新增置顶
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string addTop(1:string params);
}

service IPostTopServiceUpdateTop{

    /**
     * 
     * 更新置顶
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string updateTop(1:string params);
}

service IPostTopServiceDeleteTop{

    /**
     * 
     * 删除置顶
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string deleteTop(1:string params);
}

service IPostTopServiceGetPostTopById{

    /**
     * 
     * 置顶详情
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string getPostTopById(1:string params);
}

