export default function (hiprint) {
  return function (options) {
    var addElementTypes = function (context) {
      context.removePrintElementTypes('defaultModule')
      context.addPrintElementTypes('defaultModule', [
        new hiprint.PrintElementTypeGroup('常规', [
          {
            tid: 'defaultModule.text',
            title: '文本',
            data: '',
            type: 'text',
          },
          {
            tid: 'defaultModule.image',
            title: '图片',
            data: '',
            type: 'image',
          },
          {
            tid: 'defaultModule.longText',
            title: '长文',
            data: '155123456789',
            type: 'longText',
          },
          {
            tid: 'defaultModule.table',
            title: '表格',
            type: 'table',
            columns: [
              [
                {
                  title: '行号',
                  width: 100,
                },
                { title: '', width: 100 },
                { title: '', width: 100 },
                { title: '', width: 100 },
              ],
            ],
            editable: true,
            columnDisplayEditable: true, //列显示是否能编辑
            columnDisplayIndexEditable: true, //列顺序显示是否能编辑
            columnTitleEditable: true, //列标题是否能编辑
            columnResizable: true, //列宽是否能调整
            columnAlignEditable: true, //列对齐是否调整
            isEnableEditField: true, //编辑字段
            isEnableContextMenu: true, //开启右键菜单 默认true
            isEnableInsertRow: true, //插入行
            isEnableDeleteRow: true, //删除行
            isEnableInsertColumn: true, //插入列
            isEnableDeleteColumn: true, //删除列
            isEnableMergeCell: true, //合并单元格
          },
          {
            tid: 'defaultModule.html',
            title: 'html',
            formatter: function (data, options) {
              return '<div style="height:50pt;width:50pt;background:red;border-radius: 50%;"></div>'
            },
            type: 'html',
          },
          {
            tid: 'defaultModule.customText',
            title: '自定义文本',
            customText: '自定义文本',
            custom: true,
            type: 'text',
          },
        ]),
        new hiprint.PrintElementTypeGroup('辅助', [
          {
            tid: 'defaultModule.hline',
            title: '横线',
            type: 'hline',
          },
          {
            tid: 'defaultModule.vline',
            title: '竖线',
            type: 'vline',
          },
          {
            tid: 'defaultModule.rect',
            title: '矩形',
            type: 'rect',
          },
          {
            tid: 'defaultModule.oval',
            title: '椭圆',
            type: 'oval',
          },
        ]),
      ])
    }
    return {
      addElementTypes: addElementTypes,
    }
  }
}
