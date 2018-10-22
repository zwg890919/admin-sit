export default {
    data() {
        return {
            tableColum: [
                {
                    label: "姓名",
                    prop: "name",
                    sortable: true,
                    showCloumn: true,
                },
                {
                    label: "类型",
                    prop: "type",
                    showCloumn: true,
                },
                {
                    width:160,
                    label: "时间",
                    prop: "time",
                    showCloumn: true,
                },
                {
                    label: "数字",
                    prop: "number",
                    showCloumn: true,
                },
                {
                    label: "开关",
                    prop: "switch",
                    showCloumn: true,
                },
                {
                    width: 100,
                    label: "select多选",
                    prop: "moreselect",
                    showCloumn: true,
                },
                {
                    label: "日期时间",
                    width: 160,
                    prop: "datetime",
                    showCloumn: true,
                },
                {
                    label: "权限",
                    prop: "grade",
                    showCloumn: true,
                },
                {
                    width:120,
                    label: "密码",
                    prop: "password",
                    showCloumn: true,
                },
                {
                    width: 100,
                    label: "多选",
                    prop: "checkbox",
                    showCloumn: true,
                },
                {
                    label: "地址",
                    prop: "address",
                    showCloumn: true,
                    width: 300,
                },
            ],
            tableData:[
                {}
            ]
        }
    }
}
