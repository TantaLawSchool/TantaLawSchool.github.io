import os

def split_file(input_file, chunk_size_mb=1):
    # تحويل حجم الشريحة إلى بايت (1MB = 1024 * 1024 بايت)
    chunk_size = chunk_size_mb * 1024 * 1024

    # فتح الملف الثنائي
    with open(input_file, 'rb') as file:
        # الحصول على حجم الملف
        file_size = os.path.getsize(input_file)
        
        # حساب عدد الأجزاء المطلوبة
        num_chunks = (file_size + chunk_size - 1) // chunk_size

        for i in range(num_chunks):
            # تحديد اسم الجزء
            chunk_name = f"{input_file}_chunk_{i+1}"
            
            # فتح ملف جديد للكتابة
            with open(chunk_name, 'wb') as chunk_file:
                # قراءة الجزء من الملف الأصلي وكتابته في الملف الجديد
                chunk_data = file.read(chunk_size)
                chunk_file.write(chunk_data)
                print(f"تم إنشاء {chunk_name} بحجم {len(chunk_data)} بايت")

# استدعاء الدالة مع اسم الملف الذي تريد تقسيمه
split_file('SampleVideo.mp4')
