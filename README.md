# Dota2 KV Editor - not finished yet
Dota2 KV Editor is a easy tool for dota2 developer to edit KV ability & multi language support description with Visualization.
【Dota2 KV编辑器 是一款可以可视化编辑KV技能及其多语言描述的编辑器】

已经完成：
* 新建、复制、删除技能/物品
* 修改技能、修饰器名称会自动改动多语言描述字段
* 智能读取游戏技能/物品图标 和 自定义图标
* 不需要手写precache，会自动填入
* 声音文件自动匹配名称
* 技能/物品可以标记颜色，排序
* 智能检测冲突的技能名称
* 文字描述调色盘
* 如果没有勾选行为，将隐藏对应的属性
* 物品自动分配id
* 简易的技能模板
* 树状结构快速导航
* 如果修饰器被设为隐藏，则多语言界面显示隐藏标记
* 语言界面显示所有使用到的语言
* 检测是否存在未填写描述的技能和修饰器
* 图标选择器
* 自动备份
* 光环支持
* 法球支持
* 编辑器版本更新提示
* 操作、属性数值自动填充支持
* 技能快速搜索
* 技能树状视图
* 单位/英雄技能提供自动提示

### TODO list
* 自动生成多语言、单位、技能文件
* 添加事件、操作，自动高亮输入框
* 拖拽事件、操作
* 单位属性快捷键操作
* 文字全选改色BUG
* Search able of modifier attrs/states
* link each other
* item compound formula auto generate
* Auto generate english language version
* Auto create empty modifier
* Custom sound support:http://www.dota2rpg.com/thread-2491-1-1.html
* ability_lua & RunScript auto generate lua file
* SpellLibrary as template
* Win10 smartScreen will block program
* Auto detect file change to reload in UI
