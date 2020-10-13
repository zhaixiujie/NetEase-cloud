import request from '@/utils/request'

//获取轮播图
export function banner() {
    return request({
        url: "/banner",
        method: 'get'
    })
}

//获取精选碟
export function playlist(payload) {
    return request({
        url: "/top/playlist",
        method: 'get',
        params: {
            ...payload
        }
    })
}


//个性化推荐     需要登录
export function resource(payload) {
    return request({
        url: "/recommend/resource",
        method: 'get',

    })
}

//新碟上架 
export function newAlbum(payload) {
    return request({
        url: "/album/newest",
        method: 'get',
        params: {
            ...payload
        }
    })
}

//所有榜单的摘要主要就是方便查看歌单ID
export function topList(payload) {
    return request({
        url: "/toplist/detail",
        method: 'get',
    })
}

//获取歌单详情
export function playlistDetail(payload) {
    return request({
        url: "/playlist/detail",
        method: 'get',
        params: {
            "id":payload
        }
    })
}