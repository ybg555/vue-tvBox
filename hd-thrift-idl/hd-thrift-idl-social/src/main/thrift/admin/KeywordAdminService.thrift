namespace java com.evergrande.social.admin.thrift



/**
 * 关键词(后端）
 *
 * @since 1.0.0
 * @author zhijian.li
 * @date 2015年11月27日下午5:42:17
 * 
 */
service IKeywordAdminServiceGetKeywordList{

    /**
     * 
     * 列表（分页）
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string getKeywordList(1:string params);
}

service IKeywordAdminServiceAddKeyword{

    /**
     * 
     * 新增
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string addKeyword(1:string params);
}

service IKeywordAdminServiceUpdateKeyword{

    /**
     * 
     * 更新
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string updateKeyword(1:string params);
}

service IKeywordAdminServiceUpdateKeywordStatus{

    /**
     * 
     * 批量更新状态
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string updateKeywordStatus(1:string params);
}

service IKeywordAdminServiceDeleteKeyword{

    /**
     * 
     * 删除
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string deleteKeyword(1:string params);
}

service IKeywordAdminServiceDeleteKeywordBatch{

    /**
     * 
     * 批量删除
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string deleteKeywordBatch(1:string params);
}

service IKeywordAdminServiceGetKeywordById{

    /**
     * 
     * 详情
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string getKeywordById(1:string params);
}
service IKeywordAdminServiceImportKeyword{

    /**
     * 
     * 导入
     * 
     * @param params
     * @return
     *
     * @author jinfeng.bin
     */
    string importKeyword(1:string params);
}

