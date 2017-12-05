const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx1ecafa253b06d204',

    // 微信小程序 App Secret
    appSecret: '88ce09b62e2238104afb2b5801a3d30a',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wx1ecafa253b06d204',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 区域
         * 北京一区（华北）ap-beijing-1
         * 北京          ap-beijing
         * 上海（华东）   ap-shanghai
         * 广州（华南）   ap-guangzhou
         * 成都（西南）   ap-chengdu
         * 新加坡        ap-singapore
         * 香港          ap-hongkong
         * 多伦多        na-toronto
         * 法兰克福      eu-frankfurt
         * @see https://www.qcloud.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh',

    serverHost: 'hgqsisdh.qcloud.la',
    tunnelServerUrl: '',
    tunnelSignatureKey: '',
    // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.qcloud.com/capi
    qcloudAppId: 1255599781,
    qcloudSecretId: 'AKIDhKvLaOWZxDKO2fvWgjbYM0BJd4WosiR1',
    qcloudSecretKey: 'bJHHBmGrjflgaJqEXgiqpdH2HQRjBUsK'
}

module.exports = CONF
