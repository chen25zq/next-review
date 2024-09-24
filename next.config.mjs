/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
        {
            source: '/',  // 用户访问根路径时
            destination: '/demo1',  // 重定向到 /demo1 页面
            permanent: true,  // 设为永久重定向（301）或临时重定向（302）
        },
    ]
    },
};

export default nextConfig;
