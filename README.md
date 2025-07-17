# 🖋️ TextStrokeFilter

`TextStrokeFilter` คือ React component ที่สร้างเอฟเฟกต์ **stroke (เส้นขอบตัวอักษร)** และ **shadow (เงาด้านหลัง)** โดยใช้ SVG filter เพื่อให้ข้อความดูโดดเด่น เหมาะสำหรับเน้นหัวข้อสำคัญ เช่น ข้อความประกาศ, หัวเรื่อง, คะแนน หรือชื่อผู้ใช้งาน

---

## ✨ Features

- ✅ Stroke รอบตัวอักษร
- ✅ Shadow ด้านหลังตัวอักษร
- ✅ ปรับสี stroke และ shadow ได้
- ✅ ปรับความหนา stroke (`radius`) และ offset shadow ได้
- ✅ ใช้ร่วมกับ Tailwind CSS และ React ได้ง่าย

---

## 📦 การติดตั้ง

ไม่จำเป็นต้องติดตั้งแพ็กเกจเสริม เพียงคัดลอกไฟล์ `TextStrokeFilter.tsx` ไปไว้ในโปรเจกต์ React ของคุณ

### 📁 โฟลเดอร์ที่แนะนำ:
/components/TextStrokeFilter.tsx

จากนั้น import เพื่อใช้งาน:

```tsx
import TextStrokeFilter from "@/components/TextStrokeFilter";
```

### 🛠️ วิธีใช้งาน
```html
<TextStrokeFilter
  id="yellow-stroke"
  strokeColor="#eab308"
  shadowColor="#eab308"
  radius={4}
/>

<h1
  className="text-white"
  style={{ filter: 'url(#yellow-stroke)' }}
>
  เทสๆๆๆๆๆๆ
</h1>
```
