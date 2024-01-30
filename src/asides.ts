export interface AsideItem {
	name: string;
	text: string;
	showName?: boolean;
}

/** 所有的侧边栏列表 */
const asids: AsideItem[] = [
	{
		name: "introduce",
		showName: false,
		text: "介绍",
	},
	{
		name: "usage",
		showName: false,
		text: "快速上手",
	},
	{
		name: "reset",
		showName: false,
		text: "样式重置",
	},
	{
		name: "css_util",
		showName: false,
		text: "工具样式",
	},
	{
		name: "---",
		text: "",
		showName: false,
	},
	{
		name: "Container",
		text: "容器布局",
	},
	{
		name: "Icon",
		text: "图标",
	},
	{
		name: "Tooltip",
		text: "文字提示",
	},
	{
		name: "Table",
		text: "表格",
	},
];
export default asids;
