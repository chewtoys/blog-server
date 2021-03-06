/**
 * 网站基本信息数据模型
 */

const mongoose = require('../mongodb').mongoose
const Schema = mongoose.Schema

const optionSchema = new Schema({

	// 网站标题
	title: {
		type: String,
		required: true
	},

	// 网站副标题
	subtitle: {
		type: String,
		required: true
	},

	// 站点地址
	url: {
		type: String,
		required: true
	},

	// 关键字
	keywords: {
		type: String
	},

	// 网站描述
	description: String,

	// 邮箱
	email: {
		type: String,
		required: true
	},

	// 备案号
	icp: String,

	meta: {
		votes: Number,
		favs: Number
	}

});

const Option = mongoose.model('Option', optionSchema)

module.exports = Option