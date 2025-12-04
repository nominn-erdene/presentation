import { CheckCircle, TrendingUp, AlertCircle, Lightbulb, Target, Building2 } from 'lucide-react';

export function ConclusionSection() {
  return (
    <section id="conclusion" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-5 h-5" />
            <span>Дүгнэлт</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">Судалгааны дүгнэлт</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Зээлийн эрсдэлийн шинжилгээний үндсэн үр дүн болон зөвлөмж
          </p>
        </div>

        {/* Main Findings */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl text-slate-900 mb-6 flex items-center gap-3">
            <Target className="w-7 h-7 text-blue-600" />
            Үндсэн үр дүн
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-2">1. Өгөгдлийн шинжилгээ</h4>
                  <p className="text-slate-700">
                    German Credit dataset нь 1,000 зээлдэгчийн мэдээллийг агуулдаг бөгөөд эрсдэлтэй зээлийн хувь 30% байна. 
                    20 хувьсагч агуулдаг бөгөөд зээлийн хэмжээ, хугацаа, нас зэрэг тоон хувьсагч болон checking_status, 
                    credit_history зэрэг категори хувьсагчдыг багтаасан.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-2">2. Хувьсагчдын хоорондын холбоо</h4>
                  <p className="text-slate-700 mb-3">
                    Корреляцийн шинжилгээгээр дараах үр дүнг гаргав:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="text-slate-700">• Зээлийн хэмжээ - сул эерэг холбоо (rho=0.087, p=0.0059)</li>
                    <li className="text-slate-700">• Зээлийн хугацаа - дунд зэрэг эерэг холбоо (rho=0.206, p&lt;0.0001)</li>
                    <li className="text-slate-700">• Нас - дунд зэрэг сөрөг холбоо (rho=-0.112, p=0.0004)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-2">3. Загваруудын гүйцэтгэл</h4>
                  <p className="text-slate-700 mb-3">
                    Гурван загварын харьцуулалт:
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-sm text-blue-700 mb-1">Ложистик регресс</div>
                      <div className="text-xl text-blue-900">74.33%</div>
                      <div className="text-sm text-slate-600">Хамгийн өндөр нарийвчлал</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-sm text-green-700 mb-1">Гэнэн Байес</div>
                      <div className="text-xl text-green-900">67.00%</div>
                      <div className="text-sm text-slate-600">Хамгийн өндөр Recall (90%)</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <div className="text-sm text-purple-700 mb-1">Шийдвэрийн мод</div>
                      <div className="text-xl text-purple-900">67.00%</div>
                      <div className="text-sm text-slate-600">Тайлбарлахад хялбар</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Applications */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl text-slate-900 mb-6 flex items-center gap-3">
            <Building2 className="w-7 h-7 text-green-600" />
            Практик ач холбогдол
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600">1</span>
                </div>
                Зээл олгох шийдвэр
              </h4>
              <p className="text-slate-700">
                Загварууд нь зээлдэгчдийн эрсдэлийг урьдчилан таамаглах боломжийг олгоно. 
                Ложистик регресс нь илүү сайн Precision үзүүлсэн тул эрсдэлтэй зээлдэгчдийг 
                илүү нарийвчлалтай таних боломжтой.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600">2</span>
                </div>
                Эрсдэлийн удирдлага
              </h4>
              <p className="text-slate-700">
                Гэнэн Байес нь илүү сайн Recall үзүүлсэн тул эрсдэлтэй зээлдэгчдийг илүү сайн 
                олж илрүүлж, эрсдэлийг бууруулах боломжтой. Эрсдэлийн удирдлагын системд 
                нэгтгэж ашиглах боломжтой.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600">3</span>
                </div>
                Зээлийн нөхцөл тогтоох
              </h4>
              <p className="text-slate-700">
                Их хэмжээний, урт хугацаатай зээл эрсдэлтэй байх магадлал их байгаа тул 
                ийм зээлд илүү өндөр хүү, баталгаа шаардах боломжтой. Өгөгдөлд суурилсан 
                pricing стратеги боловсруулах.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600">4</span>
                </div>
                Объектив үнэлгээ
              </h4>
              <p className="text-slate-700">
                Загварууд нь зээлдэгчдийн шинж чанарыг үндэслэн объектив, өгөгдөлд суурилсан 
                шийдвэр гаргахад тусална. Хүний субъектив үнэлгээг багасгах боломжтой.
              </p>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl text-slate-900 mb-6 flex items-center gap-3">
            <AlertCircle className="w-7 h-7 text-orange-600" />
            Хязгаарлалт
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-slate-900 mb-2">Өгөгдлийн хязгаарлалт</h4>
                  <p className="text-slate-700 text-sm">
                    Cross-sectional өгөгдөл тул цаг хугацааны хандлага судлах боломжгүй. 
                    Германы өгөгдөл тул бусад улс оронд шууд ашиглах боломжгүй.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-slate-900 mb-2">Хувьсагчдын хязгаарлалт</h4>
                  <p className="text-slate-700 text-sm">
                    Зарим хувьсагч (personal_status, other_parties гэх мэт) загварт оруулаагүй. 
                    Илүү олон хувьсагч ашиглах шаардлагатай.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-slate-900 mb-2">Загваруудын тоо</h4>
                  <p className="text-slate-700 text-sm">
                    Гурван статистик загварыг авч үзсэн. Random Forest, XGBoost зэрэг илүү 
                    орчин үеийн загваруудыг туршиж үзэх шаардлагатай.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-slate-900 mb-2">Class imbalance</h4>
                  <p className="text-slate-700 text-sm">
                    Эрсдэлтэй зээл 30% байгаа нь тэнцвэргүй байна. SMOTE, class weights зэрэг 
                    илүү сайн арга ашиглах боломжтой.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Research */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl">
          <h3 className="text-2xl text-slate-900 mb-6 flex items-center gap-3">
            <Lightbulb className="w-7 h-7 text-purple-600" />
            Ирээдүйн судалгаа
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h4 className="text-slate-900">Илүү орчин үеийн загварууд</h4>
              </div>
              <p className="text-slate-700 text-sm">
                Random Forest, XGBoost, Neural Networks зэрэг илүү орчин үеийн машин сургалтын 
                загваруудыг туршиж үзэх
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-purple-600" />
                <h4 className="text-slate-900">Feature engineering</h4>
              </div>
              <p className="text-slate-700 text-sm">
                Бүх хувьсагчдыг загварт оруулах, хувьсагчдын харилцан үйлчлэлийг судлах, 
                шинэ хувьсагч үүсгэх
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h4 className="text-slate-900">Hyperparameter tuning</h4>
              </div>
              <p className="text-slate-700 text-sm">
                Grid search, Random search ашиглан загваруудын параметрүүдийг оновчлох, 
                Cross-validation хийх
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-purple-600" />
                <h4 className="text-slate-900">Цаг хугацааны хандлага</h4>
              </div>
              <p className="text-slate-700 text-sm">
                Бодит цаг хугацааны өгөгдөл ашиглан зээлийн эрсдэлийн хандлагыг судлах, 
                урьдчилсан таамаглал хийх
              </p>
            </div>
          </div>
        </div>

        {/* Final Summary */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 to-blue-900 text-white p-8 rounded-2xl">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h3 className="text-3xl mb-4">Судалгааны эцсийн дүгнэлт</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Энэхүү судалгаанд UCI Machine Learning Repository-аас татаж авсан German Credit dataset-ийг 
              ашиглан зээлийн эрсдэлийг статистик арга зүй болон машин сургалтын загваруудаар судалж, 
              дараах үр дүнг гаргав: <strong className="text-white">Ложистик регресс нь 74.33% нарийвчлал, 
              0.7987 AUC-ROC утгатай хамгийн сайн гүйцэтгэл үзүүлсэн</strong>. Бэлтгэсэн загваруудыг банк, 
              санхүүгийн байгууллагуудад зээл олгох шийдвэр гаргахад ашиглах боломжтой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}