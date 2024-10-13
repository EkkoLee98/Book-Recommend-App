const base = {
    get() {
        return {
            url : "http://localhost:8080/django0uys6855/",
            name: "django0uys6855",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "互联网图书推荐系统设计"
        } 
    }
}
export default base
