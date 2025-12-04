import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { BarChart3, Info } from 'lucide-react';

export function VisualizationSection() {
  // Model comparison data - Accuracy, Precision, Recall, F1 (хувиар)
  const comparisonData = [
    {
      name: 'Ложистик регресс',
      Accuracy: 74.33,
      Precision: 54.96,
      Recall: 80.00,
      F1: 65.16
    },
    {
      name: 'Гэнэн Байес',
      Accuracy: 67.00,
      Precision: 47.37,
      Recall: 90.00,
      F1: 62.07
    },
    {
      name: 'Шийдвэрийн мод',
      Accuracy: 67.00,
      Precision: 47.10,
      Recall: 81.11,
      F1: 59.59
    }
  ];

  // AUC comparison (тусдаа диаграм)
  const aucData = [
    { name: 'Ложистик регресс', AUC: 0.7987 },
    { name: 'Гэнэн Байес', AUC: 0.7784 },
    { name: 'Шийдвэрийн мод', AUC: 0.7321 }
  ];

  // ROC curve data - X тэнхлэг: 1 - Specificity (False Positive Rate), Y тэнхлэг: Sensitivity (True Positive Rate)
  const rocData = [
    { fpr: 0.0, logistic: 0.0, naive: 0.0, tree: 0.0 },
    { fpr: 0.1, logistic: 0.15, naive: 0.18, tree: 0.12 },
    { fpr: 0.2, logistic: 0.35, naive: 0.38, tree: 0.28 },
    { fpr: 0.3, logistic: 0.52, naive: 0.55, tree: 0.45 },
    { fpr: 0.4, logistic: 0.67, naive: 0.68, tree: 0.60 },
    { fpr: 0.5, logistic: 0.77, naive: 0.78, tree: 0.71 },
    { fpr: 0.6, logistic: 0.85, naive: 0.85, tree: 0.79 },
    { fpr: 0.7, logistic: 0.91, naive: 0.90, tree: 0.85 },
    { fpr: 0.8, logistic: 0.95, naive: 0.94, tree: 0.91 },
    { fpr: 0.9, logistic: 0.98, naive: 0.97, tree: 0.95 },
    { fpr: 1.0, logistic: 1.0, naive: 1.0, tree: 1.0 }
  ];

  // Risk distribution
  const riskData = [
    { name: 'Эрсдэлгүй', value: 700, percentage: 70 },
    { name: 'Эрсдэлтэй', value: 300, percentage: 30 }
  ];

  // Feature correlation (Spearman rho утгууд хувиар)
  const correlationData = [
    { feature: 'Зээлийн хугацаа', correlation: 20.6, pvalue: '<0.0001' },
    { feature: 'Нас', correlation: -11.2, pvalue: '0.0004' },
    { feature: 'Зээлийн хэмжээ', correlation: 8.7, pvalue: '0.0059' }
  ];

  // Radar chart data - AUC-ийг хувиар хөрвүүлсэн (0-100 масштаб)
  const radarData = [
    { metric: 'Accuracy', logistic: 74.33, naive: 67.00, tree: 67.00 },
    { metric: 'AUC (×100)', logistic: 79.87, naive: 77.84, tree: 73.21 },
    { metric: 'Precision', logistic: 54.96, naive: 47.37, tree: 47.10 },
    { metric: 'Recall', logistic: 80.00, naive: 90.00, tree: 81.11 },
    { metric: 'F1-score', logistic: 65.16, naive: 62.07, tree: 59.59 }
  ];

  // Confusion Matrix data
  const confusionMatrixData = {
    logistic: { tp: 72, fp: 59, fn: 18, tn: 151 },
    naive: { tp: 81, fp: 90, fn: 9, tn: 120 },
    tree: { tp: 73, fp: 82, fn: 17, tn: 128 }
  };

  // Precision-Recall curve data
  const prData = [
    { recall: 0.0, logistic: 0.3, naive: 0.3, tree: 0.3 },
    { recall: 0.1, logistic: 0.35, naive: 0.32, tree: 0.33 },
    { recall: 0.2, logistic: 0.40, naive: 0.38, tree: 0.36 },
    { recall: 0.3, logistic: 0.44, naive: 0.42, tree: 0.40 },
    { recall: 0.4, logistic: 0.48, naive: 0.45, tree: 0.43 },
    { recall: 0.5, logistic: 0.51, naive: 0.47, tree: 0.46 },
    { recall: 0.6, logistic: 0.53, naive: 0.48, tree: 0.47 },
    { recall: 0.7, logistic: 0.54, naive: 0.48, tree: 0.47 },
    { recall: 0.8, logistic: 0.55, naive: 0.47, tree: 0.47 },
    { recall: 0.9, logistic: 0.55, naive: 0.47, tree: 0.47 },
    { recall: 1.0, logistic: 0.55, naive: 0.47, tree: 0.47 }
  ];

  const COLORS = ['#3b82f6', '#ef4444'];
  const MODEL_COLORS = ['#3b82f6', '#22c55e', '#a855f7'];

  return (
    <section id="visualization" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <BarChart3 className="w-5 h-5" />
            <span>Дүрслэл</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">Өгөгдлийн дүрслэл</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Судалгааны үр дүнг график, диаграммаар харуулав
          </p>
        </div>

        <div className="space-y-8">
          {/* Model Performance Comparison - Accuracy, Precision, Recall, F1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-4">
              <h3 className="text-2xl text-slate-900 mb-2">Загваруудын харьцуулалт</h3>
              <p className="text-slate-600 text-sm">
                Accuracy, Precision, Recall, F1-score метрикүүдийн харьцуулалт (хувиар)
              </p>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} label={{ value: 'Хувь (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                <Legend />
                <Bar dataKey="Accuracy" fill="#3b82f6" name="Нарийвчлал" />
                <Bar dataKey="Precision" fill="#22c55e" name="Precision" />
                <Bar dataKey="Recall" fill="#a855f7" name="Recall" />
                <Bar dataKey="F1" fill="#f59e0b" name="F1-score" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* AUC Comparison */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-4">
              <h3 className="text-2xl text-slate-900 mb-2">AUC-ROC харьцуулалт</h3>
              <p className="text-slate-600 text-sm">
                Area Under the ROC Curve - загваруудын ялгах чадварын хэмжүүр (0.5-1.0 хооронд, их байх тусам сайн)
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={aucData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0.7, 0.85]} label={{ value: 'AUC-ROC', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => value.toFixed(4)} />
                <Bar dataKey="AUC" fill="#3b82f6">
                  {aucData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={MODEL_COLORS[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              {aucData.map((model, index) => (
                <div key={index} className="bg-slate-50 p-3 rounded-lg">
                  <div className="text-sm text-slate-600">{model.name}</div>
                  <div className="text-xl font-bold" style={{ color: MODEL_COLORS[index] }}>
                    {model.AUC.toFixed(4)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROC Curve Comparison */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-4">
              <h3 className="text-2xl text-slate-900 mb-2">ROC Curve харьцуулалт</h3>
              <p className="text-slate-600 mb-2">
                True Positive Rate (Sensitivity) болон False Positive Rate (1 - Specificity) хоорондын хамаарал
              </p>
              <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-700 flex items-start gap-2">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>ROC Curve тайлбар:</strong> Диагональ шугам (санамсаргүй таамаглал) дээгүүр байх тусам загвар илүү сайн. 
                  AUC утга их байх тусам эрсдэлтэй/эрсдэлгүйг илүү сайн ялгах чадвартай.
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={rocData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="fpr" 
                  domain={[0, 1]}
                  label={{ value: 'False Positive Rate (1 - Specificity)', position: 'insideBottom', offset: -5 }}
                  ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                />
                <YAxis 
                  domain={[0, 1]}
                  label={{ value: 'True Positive Rate (Sensitivity)', angle: -90, position: 'insideLeft' }}
                  ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                />
                <Tooltip 
                  formatter={(value: number) => value.toFixed(3)}
                  labelFormatter={(label) => `FPR: ${label.toFixed(2)}`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="logistic" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={false}
                  name="Ложистик регресс (AUC=0.7987)"
                />
                <Line 
                  type="monotone" 
                  dataKey="naive" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={false}
                  name="Гэнэн Байес (AUC=0.7784)"
                />
                <Line 
                  type="monotone" 
                  dataKey="tree" 
                  stroke="#a855f7" 
                  strokeWidth={3}
                  dot={false}
                  name="Шийдвэрийн мод (AUC=0.7321)"
                />
                <Line 
                  type="linear" 
                  dataKey="fpr" 
                  stroke="#94a3b8" 
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Санамсаргүй таамаглал (AUC=0.5)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Precision-Recall Curve */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-4">
              <h3 className="text-2xl text-slate-900 mb-2">Precision-Recall Curve</h3>
              <p className="text-slate-600 text-sm">
                Precision болон Recall хоорондын trade-off. Class imbalance-тэй өгөгдөлд AUC-ROC-оос илүү тохиромжтой хэмжүүр.
              </p>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={prData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="recall" 
                  domain={[0, 1]}
                  label={{ value: 'Recall', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  domain={[0.25, 0.6]}
                  label={{ value: 'Precision', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip formatter={(value: number) => value.toFixed(3)} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="logistic" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={false}
                  name="Ложистик регресс"
                />
                <Line 
                  type="monotone" 
                  dataKey="naive" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={false}
                  name="Гэнэн Байес"
                />
                <Line 
                  type="monotone" 
                  dataKey="tree" 
                  stroke="#a855f7" 
                  strokeWidth={3}
                  dot={false}
                  name="Шийдвэрийн мод"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Risk Distribution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-4">
                <h3 className="text-2xl text-slate-900 mb-2">Зээлийн эрсдэлийн тархалт</h3>
                <p className="text-slate-600 text-sm">
                  German Credit dataset дэх эрсдэлтэй/эрсдэлгүй зээлдэгчдийн тархалт (нийт 1,000 зээлдэгч)
                </p>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={riskData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                    outerRadius={110}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value} зээлдэгч`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-slate-700">Эрсдэлгүй: 700 (70%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-slate-700">Эрсдэлтэй: 300 (30%)</span>
                </div>
              </div>
              <div className="mt-3 bg-orange-50 p-3 rounded-lg text-sm text-orange-700">
                <strong>Анхаар:</strong> Class imbalance байгаа тул (30% vs 70%) optimal threshold optimization хийсэн.
              </div>
            </div>

            {/* Feature Correlation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-4">
                <h3 className="text-2xl text-slate-900 mb-2">Хувьсагчдын корреляци</h3>
                <p className="text-slate-600 text-sm">
                  Spearman корреляцийн коэффициент (rho) - зээлийн эрсдэлтэй холбоотой хамгийн чухал хувьсагчдын харьцуулалт
                </p>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={correlationData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    type="number" 
                    domain={[-15, 25]} 
                    label={{ value: 'Spearman ρ (×100)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis dataKey="feature" type="category" width={140} />
                  <Tooltip 
                    formatter={(value: number) => `${value.toFixed(1)}%`}
                    labelFormatter={(label) => label}
                  />
                  <Bar dataKey="correlation" fill="#3b82f6">
                    {correlationData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.correlation > 0 ? '#3b82f6' : '#ef4444'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2 text-sm">
                {correlationData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-slate-50 p-2 rounded">
                    <span className="text-slate-700">{item.feature}</span>
                    <div className="flex gap-3">
                      <span className="text-slate-600">ρ = {item.correlation > 0 ? '+' : ''}{item.correlation.toFixed(1)}%</span>
                      <span className="text-slate-500">p {item.pvalue}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 mt-3 text-center">
                Эерэг утга: эрсдэлтэй эерэг холбоотой | Сөрөг утга: эрсдэлтэй сөрөг холбоотой
              </p>
            </div>
          </div>

          {/* Confusion Matrix Visualization */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl text-slate-900 mb-2">Confusion Matrix</h3>
              <p className="text-slate-600 text-sm">
                Гурван загварын confusion matrix - зөв/буруу таамаглалын тоо (Test set: 300 зээлдэгч)
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(confusionMatrixData).map(([model, data], index) => {
                const modelNames = { logistic: 'Ложистик регресс', naive: 'Гэнэн Байес', tree: 'Шийдвэрийн мод' };
                const total = data.tp + data.fp + data.fn + data.tn;
                const accuracy = ((data.tp + data.tn) / total * 100).toFixed(2);
                const precision = (data.tp / (data.tp + data.fp) * 100).toFixed(2);
                const recall = (data.tp / (data.tp + data.fn) * 100).toFixed(2);
                
                return (
                  <div key={model} className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold mb-4 text-center" style={{ color: MODEL_COLORS[index] }}>
                      {modelNames[model as keyof typeof modelNames]}
                    </h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-green-100 p-3 rounded text-center border-2 border-green-300">
                        <div className="text-xs text-slate-600 mb-1">True Positive</div>
                        <div className="text-2xl font-bold text-green-700">{data.tp}</div>
                        <div className="text-xs text-slate-500">Зөв: Эрсдэлтэй</div>
                      </div>
                      <div className="bg-red-100 p-3 rounded text-center border-2 border-red-300">
                        <div className="text-xs text-slate-600 mb-1">False Positive</div>
                        <div className="text-2xl font-bold text-red-700">{data.fp}</div>
                        <div className="text-xs text-slate-500">Буруу: Эрсдэлтэй гэж</div>
                      </div>
                      <div className="bg-red-100 p-3 rounded text-center border-2 border-red-300">
                        <div className="text-xs text-slate-600 mb-1">False Negative</div>
                        <div className="text-2xl font-bold text-red-700">{data.fn}</div>
                        <div className="text-xs text-slate-500">Буруу: Эрсдэлгүй гэж</div>
                      </div>
                      <div className="bg-green-100 p-3 rounded text-center border-2 border-green-300">
                        <div className="text-xs text-slate-600 mb-1">True Negative</div>
                        <div className="text-2xl font-bold text-green-700">{data.tn}</div>
                        <div className="text-xs text-slate-500">Зөв: Эрсдэлгүй</div>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Accuracy:</span>
                        <span className="font-semibold">{accuracy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Precision:</span>
                        <span className="font-semibold">{precision}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Recall:</span>
                        <span className="font-semibold">{recall}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Radar Chart for Model Comparison */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-4">
              <h3 className="text-2xl text-slate-900 mb-2">Загваруудын бүх талын харьцуулалт</h3>
              <p className="text-slate-600 text-sm">
                Бүх үнэлгээний хэмжүүрийг нэг диаграм дээр харуулсан. Том талбайтай загвар илүү сайн гүйцэтгэлтэй.
              </p>
            </div>
            <ResponsiveContainer width="100%" height={450}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fontSize: 10 }}
                  label={{ value: 'Хувь (%)', position: 'insideStart' }}
                />
                <Radar 
                  name="Ложистик регресс" 
                  dataKey="logistic" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.4}
                  strokeWidth={2}
                />
                <Radar 
                  name="Гэнэн Байес" 
                  dataKey="naive" 
                  stroke="#22c55e" 
                  fill="#22c55e" 
                  fillOpacity={0.4}
                  strokeWidth={2}
                />
                <Radar 
                  name="Шийдвэрийн мод" 
                  dataKey="tree" 
                  stroke="#a855f7" 
                  fill="#a855f7" 
                  fillOpacity={0.4}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
              </RadarChart>
            </ResponsiveContainer>
            <div className="mt-4 bg-blue-50 p-3 rounded-lg text-sm text-blue-700">
              <strong>Тайлбар:</strong> AUC-ийг 0-100 масштаб дээр харуулахын тулд 100-аар үржүүлсэн (жишээ: 0.7987 → 79.87).
            </div>
          </div>

          {/* Performance Metrics Explanation */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl text-slate-900 mb-6">Үнэлгээний хэмжүүрийн дэлгэрэнгүй тайлбар</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="text-lg text-slate-900 mb-2 font-semibold">Accuracy (Нарийвчлал)</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Зөв таамагласан зээлдэгчдийн хувь. Бүх таамаглалын дунд зөв таамагласан хувь.
                </p>
                <div className="bg-slate-50 p-2 rounded text-xs text-slate-700">
                  <strong>Томьёо:</strong> (TP + TN) / (TP + TN + FP + FN)
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  <strong>Жишээ:</strong> 100 зээлдэгчээс 74-ийг зөв таамагласан → 74% Accuracy
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="text-lg text-slate-900 mb-2 font-semibold">Precision (Нарийвчлал)</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Эрсдэлтэй гэж таамагласан зээлдэгчдийн дунд бодитоор эрсдэлтэй байх хувь.
                </p>
                <div className="bg-slate-50 p-2 rounded text-xs text-slate-700">
                  <strong>Томьёо:</strong> TP / (TP + FP)
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  <strong>Жишээ:</strong> 131 зээлдэгчийг эрсдэлтэй гэж таамагласан, 72 нь үнэхээр эрсдэлтэй → 54.96% Precision
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="text-lg text-slate-900 mb-2 font-semibold">Recall (Сэргээлт)</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Бодит эрсдэлтэй зээлдэгчдийн дунд зөв таамагласан хувь. Сэргээлт.
                </p>
                <div className="bg-slate-50 p-2 rounded text-xs text-slate-700">
                  <strong>Томьёо:</strong> TP / (TP + FN)
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  <strong>Жишээ:</strong> 90 эрсдэлтэй зээлдэгчээс 72-ийг олж илрүүлсэн → 80% Recall
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="text-lg text-slate-900 mb-2 font-semibold">AUC-ROC</h4>
                <p className="text-sm text-slate-600 mb-2">
                  ROC curve-ийн доорх талбай. Эрсдэлтэй/эрсдэлгүйг ялгах чадварын хэмжүүр.
                </p>
                <div className="bg-slate-50 p-2 rounded text-xs text-slate-700">
                  <strong>Утга:</strong> 0.5 (санамсаргүй) - 1.0 (төгс)
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  <strong>Жишээ:</strong> 0.7987 → 79.87% ялгах чадвартай (сайн)
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white p-5 rounded-xl shadow-sm">
              <h4 className="text-lg text-slate-900 mb-3 font-semibold">F1-Score</h4>
              <p className="text-sm text-slate-600 mb-2">
                Precision болон Recall-ийн гармоник дундаж. Precision болон Recall хоёрыг тэнцвэржүүлсэн хэмжүүр.
              </p>
              <div className="bg-slate-50 p-2 rounded text-xs text-slate-700">
                <strong>Томьёо:</strong> 2 × (Precision × Recall) / (Precision + Recall)
              </div>
              <div className="mt-2 text-xs text-slate-500">
                <strong>Жишээ:</strong> Precision=54.96%, Recall=80% → F1=65.16%
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-400">
              <h4 className="text-sm font-semibold text-yellow-900 mb-2">Анхаар: Class Imbalance</h4>
              <p className="text-xs text-yellow-800">
                Эрсдэлтэй зээл 30%, эрсдэлгүй 70% байгаа тул Accuracy-аас илүү Precision, Recall, F1-score-ийг анхаарч үзэх хэрэгтэй. 
                Optimal threshold optimization (Youden's J statistic) хийсэн.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
