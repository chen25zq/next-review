## Fork 项目

## 1. 添加 demo1 为默认路由

- 在 next.config.js 中添加如下代码：

```javascript
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
```

## 2. 设置路由守卫，不管从哪个页面进入网页都跳转到 demo1 页 (通过 middleware 或其他方式)

## 3. 完善 demo1/page.tsx

## 4. 完善 demo2/page.tsx