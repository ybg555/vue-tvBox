namespace java com.evergrande.social.thrift

include "TLabel.thrift"
include "TComment.thrift"
include "TMessageBox.thrift"
include "TPost.thrift"
include "TPraise.thrift"
include "TReason.thrift"
include "TActivityApply.thrift"

/**
 * 关键词服务
 *
 * @since 1.0.0
 * @author bjf
 * @date 2015年9月1日 下午5:34:32
 * 
 */
service IKeywordServiceCheckKeyword{
    /**
     * 
     * 敏感词检测
     * 
     * @param params
     		参数
     * @return
     *
     * @author jinfeng.bin
     */
    string checkKeyword(1: string params)
}

