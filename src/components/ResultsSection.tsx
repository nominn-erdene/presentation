import { Trophy, TrendingUp, Award, Target } from 'lucide-react';

export function ResultsSection() {
  const models = [
    {
      name: 'Ложистик регресс',
      color: 'blue',
      accuracy: 74.33,
      auc: 0.7987,
      precision: 0.5496,
      recall: 0.8000,
      f1: 0.6516,
      mcfadden: 0.2336,
      rank: 1
    },
    {
      name: 'Гэнэн Байес',
      color: 'green',
      accuracy: 67.00,
      auc: 0.7784,
      precision: 0.4737,
      recall: 0.9000,
      f1: 0.6207,
      mcfadden: null,
      rank: 2
    },
    {
      name: 'Шийдвэрийн мод',
      color: 'purple',
      accuracy: 67.00,
      auc: 0.7321,
      precision: 0.4710,
      recall: 0.8111,
      f1: 0.5959,
      mcfadden: null,
      rank: 3
    }
  ];

  return (
    <section id="results" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5" />
            <span>Үр дүн</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">Загваруудын гүйцэтгэл</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Test set дээр optimal threshold ашиглан үнэлсэн үр дүн
          </p>
        </div>

        {/* Best Performer Highlight */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl mb-12 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-12 h-12" />
            <div>
              <h3 className="text-2xl">Хамгийн сайн загвар</h3>
              <p className="text-blue-100">Test set дээрх үнэлгээгээр</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl mb-2">74.33%</div>
              <div className="text-blue-100">Нарийвчлал</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl mb-2">0.7987</div>
              <div className="text-blue-100">AUC-ROC</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl mb-2">0.5496</div>
              <div className="text-blue-100">Precision</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl mb-2">0.8000</div>
              <div className="text-blue-100">Recall</div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="space-y-6">
          {models.map((model, index) => (
            <div 
              key={model.name}
              className={`bg-gradient-to-r from-${model.color}-50 to-white border-2 border-${model.color}-200 rounded-2xl p-6 shadow-lg`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {model.rank === 1 && (
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-yellow-900" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl text-slate-900">{model.name}</h3>
                    <p className="text-slate-600">#{model.rank} загвар</p>
                  </div>
                </div>
                <div className={`text-4xl text-${model.color}-600`}>
                  {model.accuracy}%
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-sm text-slate-600 mb-1">AUC-ROC</div>
                  <div className="text-xl text-slate-900">{model.auc.toFixed(4)}</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-sm text-slate-600 mb-1">Precision</div>
                  <div className="text-xl text-slate-900">{model.precision.toFixed(4)}</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-sm text-slate-600 mb-1">Recall</div>
                  <div className="text-xl text-slate-900">{model.recall.toFixed(4)}</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-sm text-slate-600 mb-1">F1-score</div>
                  <div className="text-xl text-slate-900">{model.f1.toFixed(4)}</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-sm text-slate-600 mb-1">McFadden R²</div>
                  <div className="text-xl text-slate-900">{model.mcfadden ? model.mcfadden.toFixed(4) : 'N/A'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Findings */}
        <div className="mt-12 bg-slate-50 p-8 rounded-2xl">
          <h3 className="text-2xl text-slate-900 mb-6">Гол үр дүн</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-2">Ложистик регресс - Хамгийн өндөр нарийвчлал</h4>
                  <p className="text-slate-600">
                    74.33% нарийвчлал, 0.7987 AUC-ROC утгатай. Илүү сайн Precision (0.5496) үзүүлсэн нь эрсдэлтэй гэж таамагласан зээлдэгчдийн дунд бодитоор эрсдэлтэй байх хувь их байгааг илтгэнэ.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-2">Гэнэн Байес - Хамгийн өндөр Recall</h4>
                  <p className="text-slate-600">
                    0.9000 Recall үзүүлсэн нь бодит эрсдэлтэй зээлдэгчдийг илүү сайн олж илрүүлж байгааг харуулж байна. Эрсдэлийн удирдлагад ашигтай.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-2">Шийдвэрийн мод - Тайлбарлахад хялбар</h4>
                  <p className="text-slate-600">
                    67% нарийвчлал, 0.7321 AUC-ROC. Ойлгоход хялбар, тайлбарлахад тохиромжтой загвар бөгөөд практик ашиглалтад тохиромжтой.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-2">Optimal threshold optimization</h4>
                  <p className="text-slate-600">
                    Youden's J statistic ашиглан optimal threshold сонгосноор загваруудын гүйцэтгэл сайжирсан. Class imbalance-ийн асуудлыг шийдсэн.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confusion Matrix Insight */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h4 className="text-lg text-slate-900 mb-4">Ложистик регресс - Confusion Matrix</h4>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">True Positive</div>
                <div className="text-xl text-slate-900">72</div>
              </div>
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">False Positive</div>
                <div className="text-xl text-slate-900">59</div>
              </div>
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">False Negative</div>
                <div className="text-xl text-slate-900">18</div>
              </div>
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">True Negative</div>
                <div className="text-xl text-slate-900">151</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <h4 className="text-lg text-slate-900 mb-4">Гэнэн Байес - Confusion Matrix</h4>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">True Positive</div>
                <div className="text-xl text-slate-900">81</div>
              </div>
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">False Positive</div>
                <div className="text-xl text-slate-900">90</div>
              </div>
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">False Negative</div>
                <div className="text-xl text-slate-900">9</div>
              </div>
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">True Negative</div>
                <div className="text-xl text-slate-900">120</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h4 className="text-lg text-slate-900 mb-4">Шийдвэрийн мод - Confusion Matrix</h4>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">True Positive</div>
                <div className="text-xl text-slate-900">73</div>
              </div>
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">False Positive</div>
                <div className="text-xl text-slate-900">82</div>
              </div>
              <div className="bg-red-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">False Negative</div>
                <div className="text-xl text-slate-900">17</div>
              </div>
              <div className="bg-green-100 p-3 rounded text-center">
                <div className="text-sm text-slate-600">True Negative</div>
                <div className="text-xl text-slate-900">128</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
