import router from '../router'
export default {
    imgAuto(path){
        if(path){
            return path;//上传路径
        }
        return 'https://dn-coding-net-production-static.qbox.me/static/7a51352fa766f4176d7c4543339e0e98.png';
    },
    openRoute(route){
        router.push(route);
    }
}