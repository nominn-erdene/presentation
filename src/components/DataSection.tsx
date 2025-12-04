import { Database, BarChart2, TrendingUp } from 'lucide-react';

export function DataSection() {
  return (
    <section id="data" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Database className="w-5 h-5" />
            <span>Өгөгдөл</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">German Credit Dataset</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            UCI Machine Learning Repository-аас татаж авсан өгөгдлийн бүрдэл
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl text-slate-900 mb-6">Өгөгдлийн тухай</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <span className="text-slate-700">Нийт зээлдэгчид</span>
                <span className="text-slate-900">1,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <span className="text-slate-700">Эрсдэлтэй зээл</span>
                <span className="text-slate-900">30%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <span className="text-slate-700">Эрсдэлгүй зээл</span>
                <span className="text-slate-900">70%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <span className="text-slate-700">Хувьсагчдын тоо</span>
                <span className="text-slate-900">20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Өгөгдлийн төрөл</span>
                <span className="text-slate-900">Cross-sectional</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
            <h3 className="text-2xl text-slate-900 mb-6">Үндсэн үзүүлэлтүүд</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-green-200">
                <span className="text-slate-700">Дундаж зээлийн хэмжээ</span>
                <span className="text-slate-900">3,271</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-green-200">
                <span className="text-slate-700">Дундаж хугацаа</span>
                <span className="text-slate-900">20.9 сар</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-green-200">
                <span className="text-slate-700">Дундаж нас</span>
                <span className="text-slate-900">35.5 жил</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-green-200">
                <span className="text-slate-700">Training set</span>
                <span className="text-slate-900">70% (700)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Test set</span>
                <span className="text-slate-900">30% (300)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl mb-8">
          <h3 className="text-2xl text-slate-900 mb-6">Өгөгдөл татаж авах процесс</h3>
          <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
            <h4 className="text-lg text-slate-900 mb-4">Ашигласан R функцүүд</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-700">download.file()</code>
                <div>
                  <p className="text-slate-700 font-medium">UCI Repository-аас өгөгдөл татаж авах</p>
                  <p className="text-sm text-slate-500">URL: https://archive.ics.uci.edu/ml/machine-learning-databases/statlog/german/german.data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-700">read.table()</code>
                <div>
                  <p className="text-slate-700 font-medium">Татаж авсан өгөгдлийг унших</p>
                  <p className="text-sm text-slate-500">Space-separated формат, 20 багана (checking_status, duration, credit_history, ...)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-700">createDataPartition()</code>
                <div>
                  <p className="text-slate-700 font-medium">Train/Test хуваах (stratified sampling)</p>
                  <p className="text-sm text-slate-500">70% training (700), 30% test (300) - class баланс хадгалах</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-700">cor.test()</code>
                <div>
                  <p className="text-slate-700 font-medium">Корреляцийн шинжилгээ</p>
                  <p className="text-sm text-slate-500">Spearman корреляцийн коэффициент (rho) ба p-value тооцоолох</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Алдааны боловсруулалт:</strong> Өгөгдөл татаж чадахгүй тохиолдолд <code className="bg-blue-100 px-1 rounded">tryCatch()</code> ашиглан жишээ өгөгдөл үүсгэж, <code className="bg-blue-100 px-1 rounded">saveRDS()</code> болон <code className="bg-blue-100 px-1 rounded">write.csv()</code> ашиглан хадгална.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl">
          <h3 className="text-2xl text-slate-900 mb-6">Хувьсагчдын корреляци</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h4 className="text-lg text-slate-900">Зээлийн хэмжээ</h4>
              </div>
              <p className="text-slate-600 mb-2">Сул эерэг холбоо</p>
              <p className="text-sm text-slate-500">rho = 0.087, p = 0.0059</p>
              <p className="text-sm text-slate-600 mt-3">Их хэмжээний зээл эрсдэлтэй байх магадлал их</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h4 className="text-lg text-slate-900">Зээлийн хугацаа</h4>
              </div>
              <p className="text-slate-600 mb-2">Дунд зэрэг эерэг холбоо</p>
              <p className="text-sm text-slate-500">rho = 0.206, p &lt; 0.0001</p>
              <p className="text-sm text-slate-600 mt-3">Урт хугацаатай зээл эрсдэлтэй байх магадлал их</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <h4 className="text-lg text-slate-900">Нас</h4>
              </div>
              <p className="text-slate-600 mb-2">Дунд зэрэг сөрөг холбоо</p>
              <p className="text-sm text-slate-500">rho = -0.112, p = 0.0004</p>
              <p className="text-sm text-slate-600 mt-3">Нас ихсэх тусам эрсдэл буурах хандлагатай</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}