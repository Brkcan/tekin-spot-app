# TEKİN SPOT – Mini İletişim Sitesi

Bu klasörde tek sayfalık, mobil uyumlu bir web sitesi var. Amaç: arama/WhatsApp ile iletişim ve basit bir iletişim formu.

## Dosyalar
- `index.html` — Ana sayfa
- `styles.css` — Basit, modern koyu tema
- `script.js` — Küçük iyileştirmeler
- (Opsiyonel) `logo.png` — Favicon/og görseli koyabilirsiniz

## Canlıya Alma (3 kolay yöntem)

### 1) **Vercel** (çok kolay)
1. [vercel.com](https://vercel.com) hesabı açın.
2. "New Project" → "Import". Bu klasörü bir GitHub deposu olarak yükleyin ve bağlayın.
3. "Framework: Other" seçin. Build gerekmez. Direkt deploy olur.
4. `tekin-spot.vercel.app` gibi bir alan adı oluşur. Kendi alan adınızı da bağlayabilirsiniz.

### 2) **Netlify**
1. [netlify.com](https://netlify.com) hesabı açın.
2. "Add new site" → "Deploy manually" deyip bu klasörü zip olarak yükleyin.
3. İletişim formu **Netlify Forms** ile otomatik çalışır (form ve `data-netlify` etiketleri hazır).

### 3) **GitHub Pages**
1. Bu klasörü bir GitHub reposuna yükleyin.
2. Repo ayarlarından **Pages** → `main` branch → `/root` seçin.
3. 1-2 dk içinde yayınlanır.

## WhatsApp ve Telefon
- `tel:+905343544351` ve `https://wa.me/905343544351` bağlantıları hazır.
- Numara değişirse `index.html` içindeki `phone_digits` ve görünen metni güncelleyin.

## Adres ve Harita
- `address` metni `index.html` içinde geçiyor. Harita iframe'i Google Maps sorgu ile çalışır.

## Küçük SEO
- Başlık, açıklama, OpenGraph ve `LocalBusiness` JSON‑LD eklidir.
- Daha iyi görünüm için bir `logo.png` ekleyebilirsiniz.

## KVKK / Gizlilik
- Form verilerini Netlify saklar. Netlify kullanmak istemezseniz `mailto:` ya da WhatsApp yönlendirmeli form kullanabilirsiniz.

---

Soru/istek: tasarımı genişletmek, fotoğraf galerisi, fiyat teklifi formu vb. eklemek isterseniz `index.html` içine yeni bölümler ekleyin.
