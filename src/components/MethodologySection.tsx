import { Brain, Layers, GitBranch } from 'lucide-react';

export function MethodologySection() {
  return (
    <section id="methodology" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Brain className="w-5 h-5" />
            <span>Арга зүй</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">Ашигласан загварууд</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Машин сургалтын гурван өөр загвар ашиглан зээлийн эрсдэлийг таамаглав
          </p>
        </div>

        <div className="space-y-8">
          {/* Logistic Regression */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl">Ложистик регресс</h3>
                  <p className="text-blue-100">Binary classification загвар</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg text-slate-900 mb-3">Онолын үндэс</h4>
                  <p className="text-slate-600 mb-4">
                    Ложистик регресс нь эрсдэлтэй эсвэл эрсдэлгүй гэсэн хоёр ангиллын асуудалд тохиромжтой загвар юм.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <code className="text-sm text-slate-700">
                      log(p / (1-p)) = β₀ + β₁X₁ + β₂X₂ + ... + βₖXₖ
                    </code>
                  </div>
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                    <h5 className="text-sm font-semibold text-blue-900 mb-2">Ашигласан R функцүүд:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <code className="bg-blue-100 px-2 py-1 rounded text-xs">glm()</code>
                        <span className="text-blue-700">Загвар бэлтгэх: <code className="bg-blue-100 px-1 rounded">family = binomial(link = "logit")</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-blue-100 px-2 py-1 rounded text-xs">predict()</code>
                        <span className="text-blue-700">Таамаглал: <code className="bg-blue-100 px-1 rounded">type = "response"</code> (магадлал)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-blue-100 px-2 py-1 rounded text-xs">roc()</code>
                        <span className="text-blue-700">ROC curve үүсгэх (pROC багц)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-blue-100 px-2 py-1 rounded text-xs">coords()</code>
                        <span className="text-blue-700">Optimal threshold олох: <code className="bg-blue-100 px-1 rounded">best.method = "youden"</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-blue-100 px-2 py-1 rounded text-xs">logLik()</code>
                        <span className="text-blue-700">McFadden R² тооцоолох</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-3">Ашигласан хувьсагчид</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600">Зээлийн хэмжээ, хугацаа, нас</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600">Checking status, Credit history</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600">Purpose, Savings status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600">Employment, Property magnitude</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700 font-semibold mb-2">Optimal threshold optimization</p>
                    <p className="text-xs text-blue-600">Youden's J statistic: J = TPR - FPR</p>
                    <p className="text-xs text-blue-600 mt-1">Threshold = 0.267 (default 0.5-аас бага, class imbalance-ийн улмаас)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Naive Bayes */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl">Гэнэн Байесын алгоритм</h3>
                  <p className="text-green-100">Байесын теорем дээр суурилсан</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg text-slate-900 mb-3">Онолын үндэс</h4>
                  <p className="text-slate-600 mb-4">
                    Байесын теорем ашиглан хувьсагчдыг хамааралгүй гэж үзэх naive assumption дээр суурилдаг.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <code className="text-sm text-slate-700 block">
                      P(Y=k|X) = P(X|Y=k)P(Y=k) / P(X)
                    </code>
                    <code className="text-sm text-slate-700 block">
                      P(X₁,X₂,X₃|Y) = P(X₁|Y)P(X₂|Y)P(X₃|Y)
                    </code>
                  </div>
                  <div className="mt-4 bg-green-50 p-4 rounded-lg">
                    <h5 className="text-sm font-semibold text-green-900 mb-2">Ашигласан R функцүүд:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <code className="bg-green-100 px-2 py-1 rounded text-xs">naiveBayes()</code>
                        <span className="text-green-700">Гэнэн Байесын загвар бэлтгэх (e1071 багц)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-green-100 px-2 py-1 rounded text-xs">predict()</code>
                        <span className="text-green-700">Таамаглал: <code className="bg-green-100 px-1 rounded">type = "raw"</code> (магадлал)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-green-100 px-2 py-1 rounded text-xs">roc()</code>
                        <span className="text-green-700">ROC curve үүсгэх</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-green-100 px-2 py-1 rounded text-xs">coords()</code>
                        <span className="text-green-700">Optimal threshold: 0.1359</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-3">Давуу тал</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-slate-600">Хурдан бөгөөд үр дүнтэй тооцоолол</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-slate-600">Бага өгөгдөл дээр сайн ажиллах</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-slate-600">Ойлгоход хялбар, тайлбарлахад энгийн</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700 font-semibold mb-1">Conditional probabilities</p>
                    <p className="text-xs text-green-600">Тоон хувьсагч: Normal тархалт (дундаж, стандарт хазайлт)</p>
                    <p className="text-xs text-green-600">Категори хувьсагч: Магадлалын хүснэгт</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Tree */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl">Шийдвэрийн мод</h3>
                  <p className="text-purple-100">Рекурсив хуваалт дээр суурилсан</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg text-slate-900 mb-3">Онолын үндэс</h4>
                  <p className="text-slate-600 mb-4">
                    Өгөгдлийг рекурсив байдлаар хувааж, ангиллын дүрмийг бүтээдэг. Gini impurity ашиглан хуваалтыг сонгодог.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <code className="text-sm text-slate-700">
                      Gini(D) = 1 - Σ pᵢ²
                    </code>
                  </div>
                  <div className="mt-4 bg-purple-50 p-4 rounded-lg">
                    <h5 className="text-sm font-semibold text-purple-900 mb-2">Ашигласан R функцүүд:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <code className="bg-purple-100 px-2 py-1 rounded text-xs">rpart()</code>
                        <span className="text-purple-700">Шийдвэрийн мод бэлтгэх (rpart багц)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-purple-100 px-2 py-1 rounded text-xs">rpart.control()</code>
                        <span className="text-purple-700">Параметр тохируулах: cp, minsplit, minbucket, maxdepth</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-purple-100 px-2 py-1 rounded text-xs">predict()</code>
                        <span className="text-purple-700">Таамаглал: <code className="bg-purple-100 px-1 rounded">type = "class"</code> эсвэл <code className="bg-purple-100 px-1 rounded">type = "prob"</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <code className="bg-purple-100 px-2 py-1 rounded text-xs">roc()</code>
                        <span className="text-purple-700">ROC curve үүсгэх</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-slate-900 mb-3">Параметрүүд</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Complexity parameter (cp)</span>
                      <span className="text-slate-900">0.001</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Min split</span>
                      <span className="text-slate-900">20</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Min bucket</span>
                      <span className="text-slate-900">7</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Max depth</span>
                      <span className="text-slate-900">10</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-700 font-semibold mb-1">Модны бүтэц</p>
                    <p className="text-xs text-purple-600">Root node → Internal nodes → Terminal nodes</p>
                    <p className="text-xs text-purple-600 mt-1">Хуваалт: checking_status, purpose, duration, age, credit_amount гэх мэт</p>
                  </div>
                </div>
              </div>
              
              {/* Модны дэлгэрэнгүй мэдээлэл */}
              <div className="mt-6 bg-slate-50 p-6 rounded-xl">
                <h4 className="text-lg text-slate-900 mb-4">Модны гүйцэтгэл</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Training accuracy</div>
                    <div className="text-2xl text-purple-600 font-semibold">83.43%</div>
                    <p className="text-xs text-slate-500 mt-1">Training set дээрх нарийвчлал</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Test accuracy</div>
                    <div className="text-2xl text-purple-600 font-semibold">67.00%</div>
                    <p className="text-xs text-slate-500 mt-1">Test set дээрх нарийвчлал</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Overfitting:</strong> Training accuracy (83.43%) &gt; Test accuracy (67%) нь модны overfitting-ийг илтгэнэ. 
                    Гэхдээ энэ нь хэвийн үзэгдэл бөгөөд мод нь training data-д сайн таамаглах чадвартай.
                  </p>
                </div>
                <div className="mt-4 bg-white p-4 rounded-lg">
                  <h5 className="text-sm font-semibold text-slate-900 mb-2">Модны гол хуваалтууд:</h5>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li>• Root: checking_status (A13,A14 vs A11,A12)</li>
                    <li>• Level 2: purpose, duration, credit_history</li>
                    <li>• Level 3: age, credit_amount, employment</li>
                    <li>• Level 4: savings_status, property_magnitude</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl text-slate-900 mb-6 text-center">Загваруудын үнэлгээний арга</h3>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">%</span>
              </div>
              <h4 className="text-lg text-slate-900 mb-2">Accuracy</h4>
              <p className="text-sm text-slate-600">Нарийвчлал</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-lg text-slate-900 mb-2">AUC-ROC</h4>
              <p className="text-sm text-slate-600">ROC curve-ийн талбай</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg text-slate-900 mb-2">Precision</h4>
              <p className="text-sm text-slate-600">Нарийвчлал</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="text-lg text-slate-900 mb-2">Recall</h4>
              <p className="text-sm text-slate-600">Сэргээлт</p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-xl">
            <h4 className="text-lg text-slate-900 mb-4">Ашигласан R багц болон функцүүд</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-slate-700 mb-2">Өгөгдөл бэлтгэх:</h5>
                <ul className="space-y-1 text-slate-600">
                  <li>• <code className="bg-slate-200 px-1 rounded">caret::createDataPartition()</code> - Train/Test хуваах</li>
                  <li>• <code className="bg-slate-200 px-1 rounded">stats::cor.test()</code> - Корреляцийн шинжилгээ</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-700 mb-2">Загвар бэлтгэх:</h5>
                <ul className="space-y-1 text-slate-600">
                  <li>• <code className="bg-slate-200 px-1 rounded">stats::glm()</code> - Ложистик регресс</li>
                  <li>• <code className="bg-slate-200 px-1 rounded">e1071::naiveBayes()</code> - Гэнэн Байес</li>
                  <li>• <code className="bg-slate-200 px-1 rounded">rpart::rpart()</code> - Шийдвэрийн мод</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-700 mb-2">Үнэлгээ:</h5>
                <ul className="space-y-1 text-slate-600">
                  <li>• <code className="bg-slate-200 px-1 rounded">pROC::roc()</code> - ROC curve</li>
                  <li>• <code className="bg-slate-200 px-1 rounded">pROC::auc()</code> - AUC тооцоолох</li>
                  <li>• <code className="bg-slate-200 px-1 rounded">pROC::coords()</code> - Optimal threshold</li>
                  <li>• <code className="bg-slate-200 px-1 rounded">PRROC::pr.curve()</code> - Precision-Recall curve</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-700 mb-2">Статистик тест:</h5>
                <ul className="space-y-1 text-slate-600">
                  <li>• <code className="bg-slate-200 px-1 rounded">stats::shapiro.test()</code> - Хэвийн тархалтын шалгалт</li>
                  <li>• <code className="bg-slate-200 px-1 rounded">stats::pnorm()</code> - Z-test</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
