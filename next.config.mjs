/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // для статического экспорта
  images: {
    unoptimized: true, // если используете изображения
  },
  trailingSlash: true, // добавляет слэш в конце URL
}

export default nextConfig
