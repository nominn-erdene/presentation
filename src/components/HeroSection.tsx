import { TrendingUp, Calendar, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full mb-6">
              <TrendingUp className="w-6 h-6" />
              <span className="font-medium">Судалгаа шинжилгээ</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-slate-900 mb-6">
            Зээлийн эрсдэлийн<br />
            <span className="text-blue-600">шинжилгээ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            UCI Machine Learning Repository-аас татаж авсан German Credit dataset дээрх өгөгдөлд тулгуурлан 
            зээлдэгчдийн шинж чанарууд зээлийн эрсдэлтэй хэрхэн холбогдож байгааг статистик арга зүйгээр шинжилнэ
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl text-slate-900 mb-2">1,000</div>
              <div className="text-slate-600">Зээлдэгч</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl text-slate-900 mb-2">30%</div>
              <div className="text-slate-600">Эрсдэлтэй зээл</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4 mx-auto">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl text-slate-900 mb-2">20</div>
              <div className="text-slate-600">Хувьсагч</div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-2xl text-slate-900 mb-6">Судалгааны зорилго</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Зээлдэгчдийн шинж чанарууд зээлийн эрсдэлтэй хэрхэн холбогдож байгааг статистик аргаар судлах</p>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Машин сургалтын загварууд ашиглан зээлийн эрсдэлийг урьдчилан таамаглах</p>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Өөр өөр загваруудын гүйцэтгэлийг харьцуулж үнэлэх</p>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Банк, санхүүгийн байгууллагуудад практик зөвлөмж өгөх</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
