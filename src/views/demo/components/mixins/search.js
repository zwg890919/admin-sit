export default {
    computed: {
        conditionData() {
            return [
                {
                    key: 'productOwnId',
                    label: '产品方简称',
                    type: 'text',
                    value: '',
                }, {
                    key: 'productType',
                    label: '产品类型',
                    type: 'select',
                    value: '',
                    default: 0,
                    option: [{
                        id: '1',
                        label: '全部',
                        value: 0
                    }, {
                        id: '2',
                        label: '企业经营性贷款',
                        value: 1
                    }]
                }, {
                    key: 'status',
                    label: '产品状态',
                    type: 'select',
                    value: '',
                    default: 0,
                    option: [{
                        id: '1',
                        label: '全部',
                        value: 0
                    }, {
                        id: '2',
                        label: '已发布',
                        value: 1
                    }, {
                        id: '3',
                        label: '已下架',
                        value: 2
                    }, {
                        id: '3',
                        label: '已暂停',
                        value: 2
                    }]
                }, {
                    key: 'userName',
                    label: '业务员名称',
                    type: 'text',
                    value: '',
                }, {
                    key: 'userPhone',
                    label: '业务员手机号',
                    type: 'text',
                    value: '',
                }, {
                    key: 'customerName',
                    label: '借款主体',
                    type: 'text',
                    value: '',
                }, {
                    key: 'cellphone',
                    label: '联系人手机',
                    type: 'text',
                    value: '',
                }, {
                    key: 'applyStatus',
                    label: '融资申请状态',
                    type: 'select',
                    value: '',
                    default: 0,
                    option: this.statusArr
                }, {
                    key: ['payNumS', 'payNumE'],
                    label: '数字区间',
                    type: 'numberBetween',
                    value: '',
                }, {
                    key: ['applyTimeFrom', 'applyTimeEnd'],
                    label: '注册时间',
                    type: 'date',
                    value: '',
                    datetype: 'daterange'
                }, {
                    key: ['releaseTimeFrom', 'releaseTimeEnd'],
                    label: '放款时间',
                    type: 'date',
                    value: '',
                    datetype: 'daterange'
                },
            ]
        }
    },
}
