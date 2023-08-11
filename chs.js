/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Basic furnace. Takes in a fuel and the item to be heated.": "基础炉子。 吸收燃料和要加热的物品。",
    "Cistern": "蓄水池",
    "Earth": "土",
    "EssencePurifier": "精华净化器",
    "Machines": "机器",
    "Mixes water and another element. It's leaky.": "混合水和另一种元素。 漏水了",
    "None": "无",
    "Sell All": "全部出售",
    "Shoveller": "铲子",
    "The Second Alterhistorian": "The Second Alterhistorian",
    "Upgrades": "升级",
    "Quarry": "采石场",
    "Attach a primitive axe to cut down trees": "附上原始斧头砍树",
    "Capacity": "容量",
    "Collapsed": "折叠",
    "Currently: Not unlocked": "当前：未解锁",
    "Increase Earth capacity": "增加土容量",
    "Increase Earth production": "增加土产量",
    "Info": "信息",
    "Okay": "好的",
    "Outputs": "输出",
    "Produces Earth.": "产生土。",
    "Statistics (Shoveller)": "统计数据（铲子）",
    "Take Average": "取平均值",
    "Upgrades (Shoveller)": "升级（铲子）",
    "Velocity": "速度",
    "Wood": "木头",
    "IDLE": "闲置",
    "Taking Average...": "取平均...",
    "Extracts Basic Essences from raw materials.": "从原材料中提取基本精华。",
    "Pipes": "管道",
    "Power": "力量",
    "Statistics (EssencePurifier)": "统计数据（精华净化器）",
    "Supply Power to the EssencePurifier.": "为 精华净化器 供电。",
    "Unlock basic pipes. They transport resources based on the capacity of the attached input containers.": "解锁基本管道。 它们根据附加输入容器的容量传输资源。",
    "Upgrades (EssencePurifier)": "升级（精华净化器）",
    "Build": "建造",
    "Build the quarry.": "建造采石场。",
    "Produces Stone and Coal.": "生产石头和煤炭。",
    "Produces Water.": "产生水。",
    "Unlock": "解锁",
    "Unlock the cistern": "解锁水箱",
    "Upgrades (Cistern)": "升级（蓄水池）",
    "Upgrades (Quarry)": "升级（采石场）",
    "Water": "水",
    "Incrcease Water capacity": "增加水容量",
    "Increase Water production": "提高水产量",
    "Clay": "粘土",
    "Increase capacity.": "增加容量。",
    "Input 1 accepts: Earth": "输入 1 接受：土",
    "Input 2 accepts: Water": "输入 2 接受：水",
    "Inputs": "输入",
    "Statistics (WaterMixer)": "统计数据（混水器）",
    "Upgrades (WaterMixer)": "升级（水混合器）",
    "Volume": "体积",
    "Improve": "提升",
    "Increase speed and fuel efficiency. Unlocks ability to use coal as fuel.": "提高速度和燃油效率。 解锁使用煤炭作为燃料的能力。",
    "Increase Wood production": "增加木材产量",
    "Input 1 accepts: Clay, Water": "输入 1 接受：粘土、水",
    "Input 2 accepts: Wood": "输入 2 接受：木材",
    "Persistence": "持久性",
    "Statistics (FurnaceBasic)": "统计（基础熔炉）",
    "Steam": "蒸汽",
    "Upgrades (FurnaceBasic)": "升级（基础熔炉）",
    "Bricks": "砖块",
    "Input Pipes": "输入管道",
    "Output Pipes": "输出管道",
    "Are you sure you want to remove this machine? Alchemy resources inside the machine will be lost!": "您确定要删除这台机器吗？ 机器内的炼金资源将丢失！",
    "Cancel": "取消",
    "Confirm": "确认",
    "Merges three inputs into one single stream.": "将三个输入合并到一个流中。",
    "Remove Machine (WaterMixer)": "移除机器（水混合器）",
    "Coal": "煤",
    "Converts Steam into Energy. James Watt would be proud.": "将蒸汽转化为能量。 詹姆斯瓦特会感到自豪。",
    "Increase Stone and Coal capacity": "增加石头和煤炭的产能",
    "Increase Stone and Coal production": "增加石头和煤炭的产量",
    "Stone": "石头",
    "Input 1 accepts: All": "输入 1 接受：全部",
    "Input 2 accepts: All": "输入 2 接受：全部",
    "Input 3 accepts: All": "输入 3 接受：全部",
    "No upgrades, sorry :(": "没有升级，对不起:(",
    "Statistics (InputMerger)": "统计（输入合并）",
    "Statistics (Quarry)": "统计（采石场）",
    "Upgrades (InputMerger)": "升级（输入合并）",
    "Increase speed and fuel efficiency.": "提高速度和燃油效率。",
    "Input 2 accepts: Wood, Coal": "输入 2 接受：木材、煤炭",
    "Decrease steam usage and water byproduct": "减少蒸汽使用和水副产品",
    "Energy": "电力",
    "Harness": "马具",
    "Increase operation speed": "提高运行速度",
    "Input 1 accepts: Earth, Stone": "输入 1 接受：土、石头",
    "Input 1 accepts: Steam": "输入 1 接受：蒸汽",
    "Input 2 accepts: Energy": "输入 2 接受：电力",
    "Sand": "沙",
    "Upgrades (SteamEngine)": "升级（蒸汽引擎）",
    "Uses Energy to pound materials to dust.": "使用能量将材料粉碎成灰尘。",
    "Yielding": "生产",
    "Increase the power level to extract essences from 1 more type of raw material": "增加从 1 种原料中提取精华的电力等级",
    "Input 1 accepts: Clay, Water, Sand, Stone": "输入 1 接受：粘土、水、沙子、石头",
    "Input 1 accepts: Coal, Energy": "输入 1 接受：煤炭、电力",
    "Input 3 accepts: Fire": "输入 3 接受：火",
    "Lava": "岩浆",
    "Plater": "电镀",
    "Statistics (ArcFurnace)": "统计（电弧炉）",
    "Statistics (Pulverizer)": "统计（粉碎机）",
    "Upgrades (ArcFurnace)": "升级（电弧炉）",
    "Upgrades (AutoSeller)": "升级（自动卖家）",
    "Upgrades (Pulverizer)": "升级（粉碎机）",
    "Allows insertion of Fire for increased efficiency.": "允许插入火以提高效率。",
    "Arc furnace. Takes in Energy and the item to be heated.": "电弧炉。 吸收电力和要加热的物品。",
    "Automagically sells things.": "自动卖东西。",
    "Catalysis": "催化",
    "Catalyst\n(5 Fire)": "催化剂\n（5 火）",
    "Efficiency": "效率",
    "Fire": "火",
    "Increase operation speed but only increases Energy usage at sqrt the rate": "提高运行速度，但仅以 平方 的速率增加电力使用量",
    "Increase operation speed without increasing energy usage": "在不增加电力使用的情况下提高运行速度",
    "Vitriol": "硫酸",
    "You know what this is.": "你知道这是什么。",
    "Copper": "铜",
    "Gold": "金子",
    "Input 1 accepts: Clay, Water, Sand": "输入 1 接受：粘土、水、沙子",
    "Input 1 accepts: Stone, StoneDust, Iron, Lead, Copper, Silver, Gold": "输入 1 接受：石头、石粉、铁、铅、铜、银、金",
    "Input 2 accepts: Vitriol": "输入 2 接受：硫酸",
    "Iron": "铁",
    "Lead": "铅",
    "Silver": "银",
    "Statistics (SteamEngine)": "统计数据（蒸汽引擎）",
    "Statistics (Transmuter)": "统计数据（转换器）",
    "StoneDust": "石粉",
    "Upgrades (Transmuter)": "升级（转换器）",
    "Essence": "精华",
    "Input 1 accepts: Quicksilver": "输入 1 接受：水银",
    "Input 3 accepts: Water": "输入 3 接受：水",
    "Input 4 accepts: Fire": "输入 4 接受：火",
    "Input 5 accepts: Earth": "输入 5 接受：土",
    "Input 6 accepts: Purity": "输入 6 接受：纯净",
    "Quicksilver": "水银",
    "Statistics (ElixirMaker)": "统计数据（灵药制造商）",
    "Upgrades (ElixirMaker)": "升级（灵药制造者）",
    "and I owe it for giving me this idea. If you're enjoying this game you will definitely enjoy that too.": "我欠它给我这个想法。 如果您喜欢这款游戏，您也一定会喜欢它。",
    "Arrow Keys/Dragging": "方向键/拖动",
    "BaineGames: Contributor": "BaineGames：贡献者",
    "Brian bugh: Co-dev": "Brian Bugh：联合开发者",
    "Consume the elixir.": "服下灵药。",
    "Credits:": "制作人员：",
    "Extract/Insert resources instantly": "立即提取/插入资源",
    "Extract/Insert resources slowly": "缓慢提取/插入资源",
    "Glowing Green": "发绿色",
    "Glowing Yellow": "发黄光",
    "How To Play": "怎么玩",
    "If you want to contribute to this game, you may visit its github page below. Joining the discord for more in depth discussion of development work is also recommended.": "如果您想为这个游戏做出贡献，您可以访问下面的 github 页面。 还建议加入 Discord 以更深入地讨论开发工作。",
    "Left Click": "左键单击",
    "Minimap": "小地图",
    "NOTE: This game is not optimised for play on mobile devices, or anything that doesn't have mouse controls.": "注意：该游戏并未针对在移动设备或任何没有鼠标控制的设备上进行优化。",
    "Pan the viewing grid": "平移查看网格",
    "Right Click": "右键点击",
    "Scarlet / Dystopia181: Main dev": "Scarlet / Dystopia181：主要开发",
    "Scrollwheel": "滚轮",
    "The First Alkahistorian": "第一个阿尔卡历史学家",
    "This game was heavily inspired by": "这个游戏的灵感很大",
    "Unlock basic pipes.\n\t\t\t\tThey transport resources based on the capacity of the attached input containers.": "解锁基本管道。\n\t\t\t\t它们根据附加输入容器的容量传输资源。",
    "Upgrade fully available": "升级完全可用",
    "Upgrade partially available": "部分可升级",
    "Zoom in/out": "放大/缩小",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'O': 'O',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "WaterMixer": "水混合器",
    "FurnaceBasic": "基础熔炉",
    "Increase efficiency of pipes by x": "将管道效率提高 x",
    "Pipes ": "管道 ",
    "InputMerger": "输入合并",
    "SteamEngine": "蒸汽引擎",
    "Pulverizer": "粉碎机",
    "AutoSeller": "自动出售器",
    "ArcFurnace": "电弧炉",
    "ElixirMaker": "灵药制造者",
    "EssencePurifier": "精华净化器",
    "Transmuter": "转换器",
    "   Machines: ": "   机器: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^成本(.+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\+\$([\d\.]+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Consumes (.+) Wood\/s$/, '消耗 $1 木头\/秒'],
    [/^Consumes (.+) Stone\/s$/, '消耗 $1 石头\/秒'],
    [/^Consumes (.+) Energy\/s$/, '消耗 $1 电力\/秒'],
    [/^Consumes (.+) Steam\/s$/, '消耗 $1 蒸汽\/秒'],
    [/^Consumes (.+) Gold\/s$/, '消耗 $1 金\/秒'],
    [/^Consumes (.+) Lead\/s$/, '消耗 $1 铅\/秒'],
    [/^Consumes (.+) Copper\/s$/, '消耗 $1 铜\/秒'],
    [/^Consumes (.+) Silver\/s$/, '消耗 $1 银\/秒'],
    [/^Consumes (.+) StoneDust\/s$/, '消耗 $1 石粉\/秒'],
    [/^Consumes (.+) Vitriol\/s$/, '消耗 $1 硫酸\/秒'],
    [/^Consumes (.+) Lava\/s$/, '消耗 $1 岩浆\/秒'],
    [/^Consumes (.+) Earth\/s$/, '消耗 $1 土\/秒'],
    [/^Consumes (.+) \/s$/, '消耗 $1 \/秒'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Input ([\d\.,]+)$/, '输入 $1'],
    [/^Input ([\d\.,]+):$/, '输入 $1:'],
    [/^Output ([\d\.,]+)$/, '输出 $1'],
    [/^Output ([\d\.,]+):$/, '输出 $1:'],
    [/^Sell ([\d\.,]+)$/, '出售 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Fast Time: (.+)s$/, '快速时间：$1秒'],
    [/^Time speedup: ×(.+)$/, '时间加速：×$1'],
    [/^Currently: ×(.+)$/, '当前：×$1'],
    [/^Cost: (.+) \?\?\?$/, '成本：$1 \?\?\?'],
    [/^Cost: (.+) elixir$/, '成本：$1 灵药'],
    [/^Cost: (.+) stone$/, '成本：$1 石头'],
    [/^Cost: (.+) fire$/, '成本：$1 火'],
    [/^Cost: (.+) lava$/, '成本：$1 岩浆'],
    [/^Cost: (.+) lead$/, '成本：$1 铅'],
    [/^Cost: (.+) gold$/, '成本：$1 金'],
    [/^Cost: (.+) essence$/, '成本：$1 精华'],
    [/^Cost: (.+) glass$/, '成本：$1 玻璃'],
    [/^Cost: (.+) iron$/, '成本：$1 铁'],
    [/^Cost: (.+) bricks$/, '成本：$1 砖块'],
    [/^Cost: (.+) energy$/, '成本：$1 电力'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) wood$/, '成本：$1 木头'],
    [/^Cost: \$ (.+)$/, '成本：\$ $1'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);