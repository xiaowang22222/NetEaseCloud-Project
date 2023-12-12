import {Howl,Howler} from 'howler'
import {getTrackUrl,getSongDetail} from "@/service"
//Howl 加载音乐 播放 暂停
// Howler 全局设置 声音大小 播放速率
let timer = null
// 功能 ： 
// 定义一个属性保存播放歌单列表 
// 定义一个方法替换(更新)播放列表
export default class {
    constructor() {
        this.tracks = []; //歌单歌曲ID集合
        this.index = 0; //播放歌曲索引
        this.loopMode = 0; // 播放模式 0单曲循环 1列表循环
        this.howl = null; //存储Howl实例
        this.CurrentTrackDetails = {}; //当前歌单详情
        this.playing = false, //播放器的播放状态
        this.duration = 0, //播放总时长
        this.progress = 0 //播放进度
        this.listOfPlaylistDetails =[]
    }
    interval() {
        clearInterval(timer)
        timer = setInterval(()=>{
            this.progress = this.howl.seek() / this.howl.duration() //获取当前播放进度
        },1000)
    }

    replaceTracks(tracks,autoplayTrack) {
        this.tracks = tracks;
        //指定从autoplayTrack开始播放
        if(autoplayTrack) {
            this.index = this.tracks.indexOf(autoplayTrack)
        }
        this.playTrack(this.tracks[this.index]);
    }
    // 播放的方法
    async playTrack(track){
        const [err,res] = await getTrackUrl(track)
        const [errTrack,resTrack] = await getSongDetail(track)
        if(err) return alert('异常');
        if(errTrack) return console.log(errTrack);
        this.CurrentTrackDetails = resTrack.data.songs[0];
        const Mp3Url = res.data.data[0].url;
        if(Mp3Url) return this.mountAudioSource(Mp3Url,true);
        this.platNectTrack();
    }

    mountAudioSource(url,autoplay = false){
        Howler.unload()
        this.howl = new Howl({
            src: [url],
            html5: true,
            format: ['mp3'],
        });
        if(autoplay) this.play();
        this.howl.on('end',() => this.platNectTrack())
    }

    //开始
    play(){
        this.playing = true;
        this.duration = this.howl.duration();
        this.interval();
        this.howl.play();
    }

    //暂停
    pause(){
        this.playing = false;
        this.howl.pause();
    }

    //获取需要播放的trackid
    platNectTrack(){
        const nextTrack = this.getNextTrack();
        this.playTrack(nextTrack)
    }
    
    getNextTrack(){
        if(this.loopMode === 1) return this.tracks[this.index]
        const currentTrackiSLast = this.index+1 === this.tracks.length;
        if(currentTrackiSLast && this.loopMode === 0) return this.tracks[(this.index = 0)];
        return this.tracks[++this.index]
    }

    setRate(rate){
        Howler.rate = rate
    }

    // 获取歌单播放列表数据、歌单歌曲ID集合
    getTrackIds(trackArr){
        this.PlayListDate = trackArr

    }

    toggle(){
        this.playing ? this.pause() : this.play()
    }
    
}

// export default Vue.observable(new Player());

// export default (Vue) => {
//     Vue.mixin({ //全局混入：把提供的配置项混入到所有的组件中
//         computed:{
//             player(){
//                 return Vue.observable(new Player());
//             }
//         }
//     })
// } 
