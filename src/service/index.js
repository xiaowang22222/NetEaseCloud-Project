
import { co } from "@/utils/index"
import request from "@/utils/request"
/**
 * @description 轮播图
 * @param {Object} params  //请求参数 
 * @param {Number} params.type  //0: pc 1: android 2: iphone 3: ipad
 * @returns  {Promise}
 */
//axios.post返回值是promise实例
export const CarouselAll = () => {
    return request.get(`/banner`)
}

/**
 * @description 获取首页所有数据
 * @returns {Promise}
 */
//获取首页所有数据
export const horizontalAll = () => {
    return co(request.get("/homepage/block/page"))
}

export const horizontalAlLlst = () => {
    return co(request.get("/homepage/block/page"))
}

/**
 * @description 可获取热门话题
 * @returns 
 */

export const hotTopicAll = () => {
    return request.get("/hot/topic")
}

/**
 * @description 获取歌单列表详情
 * @param data.id 必传id
 * @returns 
 */
export const playlistDetail = (params) => {
    return co(request.get("playlist/detail", { params }))
}

/**
 * @description 获取歌单列表
 * @param data.id 必传id
 * @returns 
 */
export const playlistDetaila = (params) => {
    return co(request.get("playlist/track/all", { params }))
}
/**
 * @description 获取验证码
 * @param  params.phone //必传手机号
 * @returns 
 */
export const getCaptcha = (params) => {
    return co(request.get("/captcha/sent", { params }))
}

/**
 * @description 登录验证
 * @param  params.phone //必传手机号
 * @param  params.captcha //必传验证码
 * @returns 
 */
export const loginCellphone = (data) => {
    return co(request.post("/login/cellphone", data))
}

/**
 * 
 *@description 获取地区
 * @returns 
 */

export const areaDataAll = () => {
    return co(request.get("/countries/code/list"))
}

/**
 * @description 获取个人信息
 * @param params.uid  传个人id
 * @returns  
 */
export const personalInformation = (params) => {
    return request.get("/user/detail", { params })
}

/**
 * @description 获取个人信息
 * @returns  
 */
export const userSubcount = () => {
    return request.get("/user/subcount")
}

/**
 * @description 获取用户歌单
 * @param {Object} params
 * @param {Number}  params.uid
 * @returns 
 */

export const userPlaylist = (params) => {
    return co(request.get("/user/playlist", { params }))
}

/**
 * @description 获取相关推荐
 * @param {Object} params
 * @param {Number}  params.id  传入歌单id
 * @returns 
 */

export const relatedPlaylist = (params) => {
    return co(request.get("/related/playlist", { params }))
}


/**
 * @description 获取排行榜mv
 * @param {Object} params
 * @param {Number}  params.limit 取出数量 , 默认为 30 
 * @param {String}  params.area 可选值为内地,港台,欧美,日本,韩国,不填则为全部  
 * @param {Number}  params.offset 偏移数量 , 用于分页 , 如 :( 页数 -1)\*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns 
 */

export const topMv = (params) => {
    return request.get("/top/mv", { params })
}

/**
 * @description 获取mv视频
 * @param {Object} params
 * @param {Number}  params.id  传入视频id
 * @returns 
 */

export const mvUrl = (params) => {
    return co(request.get("/mv/url", { params }))
}

/**
 * 
 * @param {Object} data 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据
 * @param {Number} data.mvid mv id
 * @returns 
 */
export const getMvDetailInfo = (params) =>
    co(request.get(`/mv/detail/info`, { params }))

/**
 * 
 * @param {Object} data 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
 * @param {Number} data.mvid mv id
 * @returns 
 */
export const getMvDetail = (params) =>
    co(request.get(`/mv/detail`, { params }))


export const getTrackUrl = (track) => {
    return co(request.post(`/song/url/v1?timestamp=${Date.now()}`, { id: track, level: "standard" }));
};

export const getSongDetail = (ids) => {
    console.log(ids);
    return co(request.get(`/song/detail?timestamp=${Date.now()}`, { params: { ids } }));
}


// 音乐评论
export const postCommentMusic = (data) => co(request.post(`/comment/music?timestamp=${Date.now()}`, data));
