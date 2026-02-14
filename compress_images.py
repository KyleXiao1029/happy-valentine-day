import os
from PIL import Image

def compress_images(directory, max_width=1200, quality=75):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                file_path = os.path.join(root, file)
                try:
                    with Image.open(file_path) as img:
                        # 转换 RGBA 到 RGB (防止 PNG 转换 JPG 报错)
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                        
                        # 获取原始大小
                        original_size = os.path.getsize(file_path) / (1024 * 1024)
                        
                        # 计算缩放比例
                        if img.width > max_width:
                            w_percent = (max_width / float(img.width))
                            h_size = int((float(img.height) * float(w_percent)))
                            img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                        
                        # 保存压缩后的图片
                        # 统一保存为 jpg 格式以获得更好的压缩率，或者保留原后缀
                        # 这里选择保留原后缀但优化保存参数
                        ext = os.path.splitext(file)[1].lower()
                        if ext in ['.jpg', '.jpeg']:
                            img.save(file_path, "JPEG", quality=quality, optimize=True)
                        elif ext == '.png':
                            # PNG 压缩较慢，这里简单处理
                            img.save(file_path, "PNG", optimize=True)
                        
                        new_size = os.path.getsize(file_path) / (1024 * 1024)
                        print(f"Compressed: {file} ({original_size:.2f}MB -> {new_size:.2f}MB)")
                except Exception as e:
                    print(f"Error processing {file}: {e}")

if __name__ == "__main__":
    target_dir = "images"
    compress_images(target_dir)
