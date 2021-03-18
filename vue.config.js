module.exports = {
    publicPath: './',
    devServer: {
        host:'localhost', // 設定local服務器(選填)
        https: true,
        port:8080, // 設定本地端默認port號(選填)
        proxy: { // 設定代理，必填
            '/apipath': { // 設定攔截器、攔截器格式，斜槓+攔截器名稱，名字可以自己定
                target: 'https://app.wundoo.com.tw/', // 代理的目標網址，這裡放api domian
                changeOrigin: true, // 是否設置同源
                ws: true,
                pathRewrite: { // 路徑重寫
                    '^/apipath': '/' // 選擇忽略連結器裡面的單詞
                }
            },
            '/line': {
                target: 'https://api.line.me',
                changeOrigin: true,
                ws: true, 
                pathRewrite: {
                    '^/line': 'https://api.line.me'
                }
            },
            '/mainpath': {
                target: 'https://app.wundoo.com.tw/api/club',
                changeOrigin: true,
                ws: true, 
                pathRewrite: {
                    '^mainpath': 'https://app.wundoo.com.tw/api/club'
                }
            }
        }
    }
}