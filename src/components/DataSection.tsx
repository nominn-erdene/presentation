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

        {/* Математик дундаж, дисперс, стандарт хазайлт */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl text-slate-900 mb-6">Санамсаргүй хувьсагчдын тархалтын үзүүлэлтүүд</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-3 text-left text-slate-900 font-semibold">Хувьсагч</th>
                  <th className="border border-slate-300 px-4 py-3 text-center text-slate-900 font-semibold">Математик дундаж (E[X])</th>
                  <th className="border border-slate-300 px-4 py-3 text-center text-slate-900 font-semibold">Дисперс (Var(X))</th>
                  <th className="border border-slate-300 px-4 py-3 text-center text-slate-900 font-semibold">Стандарт хазайлт (σ)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700 font-medium">Зээлийн хэмжээ</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">3,271.26</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">7,967,843.47</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">2,822.74</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700 font-medium">Зээлийн хугацаа (сар)</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">20.90</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">145.42</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">12.06</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3 text-slate-700 font-medium">Нас (жил)</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">35.55</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">129.40</td>
                  <td className="border border-slate-300 px-4 py-3 text-center text-slate-900">11.38</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-4 italic">
            Математик дундаж нь тархалтын төв байрлалыг, дисперс нь тархалтын тархалтыг тодорхойлдог.
          </p>
        </div>

        {/* Статистик тестүүд */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl mb-8">
          <h3 className="text-2xl text-slate-900 mb-6">Статистик таамаглал шалгах</h3>
          
          {/* Хэвийн тархалтын шалгалт */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h4 className="text-lg text-slate-900 mb-4 font-semibold">Хэвийн тархалтын шалгалт (Shapiro-Wilk Test)</h4>
            <p className="text-slate-600 mb-4 text-sm">
              Өгөгдөл хэвийн тархалттай эсэхийг шалгах. $H_0$: Өгөгдөл хэвийн тархалттай, $H_1$: Өгөгдөл хэвийн тархалттай биш.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-3 py-2 text-left text-slate-900 font-semibold">Хувьсагч</th>
                    <th className="border border-slate-300 px-3 py-2 text-center text-slate-900 font-semibold">W статистик</th>
                    <th className="border border-slate-300 px-3 py-2 text-center text-slate-900 font-semibold">p-value</th>
                    <th className="border border-slate-300 px-3 py-2 text-center text-slate-900 font-semibold">Дүгнэлт</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 text-slate-700">Зээлийн хэмжээ</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-slate-900">0.7815</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-slate-900">2.58e-25</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-red-600 font-medium">Хэвийн тархалттай биш</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 text-slate-700">Зээлийн хугацаа</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-slate-900">0.8893</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-slate-900">1.71e-18</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-red-600 font-medium">Хэвийн тархалттай биш</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 text-slate-700">Нас</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-slate-900">0.9166</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-slate-900">5.45e-16</td>
                    <td className="border border-slate-300 px-3 py-2 text-center text-red-600 font-medium">Хэвийн тархалттай биш</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              <strong>Тайлбар:</strong> Бүх хувьсагчдын p-value &lt; 0.05 тул $H_0$ таамаглалыг татгалзаж, өгөгдөл хэвийн тархалттай биш гэж дүгнэнэ. 
              Тиймээс Spearman корреляцийн коэффициент ашигласан.
            </p>
          </div>

          {/* Параметрийн таамаглал шалгах */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg text-slate-900 mb-4 font-semibold">Параметрийн тухай таамаглал шалгах (Z-test)</h4>
            <p className="text-slate-600 mb-4 text-sm">
              Эрсдэлтэй зээлийн хувь 30% байна гэсэн таамаглал шалгах. $H_0$: $p = 0.30$, $H_1$: $p \neq 0.30$.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Ажиглагдсан хувь:</span>
                <span className="text-slate-900 font-semibold">30.00%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Таамагласан хувь ($p_0$):</span>
                <span className="text-slate-900 font-semibold">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Z-статистик:</span>
                <span className="text-slate-900 font-semibold">0.0000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">p-value:</span>
                <span className="text-slate-900 font-semibold">1.0000</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-300">
                <span className="text-slate-700 font-semibold">Дүгнэлт:</span>
                <span className="text-green-600 font-semibold">$H_0$ таамаглалыг хүлээн зөвшөөрнө</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              <strong>Тайлбар:</strong> p-value = 1.0000 &gt; 0.05 тул эрсдэлтэй зээлийн хувь 30% байна гэсэн таамаглалыг хүлээн зөвшөөрнө.
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