import React, { useState } from 'react';
import { Snowflake, Settings, X } from 'lucide-react';
import { useSnowfall } from '../contexts/SnowfallContext';

const SnowfallControls: React.FC = () => {
  const { settings, toggleSnowfall, setIntensity, setEnabled } = useSnowfall();
  const [isOpen, setIsOpen] = useState(false);

  const intensityLabels = {
    light: 'خفيف',
    medium: 'متوسط',
    heavy: 'كثيف',
  };

  const intensityDescriptions = {
    light: 'ثلج خفيف للجو العام',
    medium: 'ثلج متوسط للجو الشتوي',
    heavy: 'ثلج كثيف للجو الشتوي القوي',
  };

  return (
    <>
      {/* Floating Control Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group border-2 border-white/20"
        aria-label="إعدادات الثلج"
      >
        <Snowflake className="w-6 h-6 text-white group-hover:animate-spin transition-transform duration-300" />
      </button>

      {/* Control Panel Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-6 relative border border-gray-700">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-full transition-colors duration-200"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">إعدادات الثلج</h3>
              <p className="text-gray-300 text-sm">تخصيص تجربة الشتاء</p>
            </div>

            {/* Enable/Disable Toggle */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-200">تفعيل الثلج</span>
                <button
                  onClick={toggleSnowfall}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${settings.enabled ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  role="switch"
                  aria-checked={settings.enabled}
                  aria-label="تفعيل الثلج"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${settings.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
              </div>
              <p className="text-sm text-gray-400">
                {settings.enabled ? 'مفعل - استمتع بالجو الشتوي' : 'معطل - بدون تأثيرات الثلج'}
              </p>
            </div>

            {/* Intensity Selection */}
            {settings.enabled && (
              <div className="mb-6">
                <label className="block font-medium text-gray-200 mb-3">
                  كثافة الثلج
                </label>
                <div className="space-y-3">
                  {(['light', 'medium', 'heavy'] as const).map((intensity) => (
                    <label
                      key={intensity}
                      className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${settings.intensity === intensity
                        ? 'border-green-500 bg-green-900/30'
                        : 'border-gray-600 hover:border-gray-500'
                        }`}
                    >
                      <input
                        type="radio"
                        name="intensity"
                        value={intensity}
                        checked={settings.intensity === intensity}
                        onChange={() => setIntensity(intensity)}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${settings.intensity === intensity
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-500'
                            }`}
                        >
                          {settings.intensity === intensity && (
                            <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            {intensityLabels[intensity]}
                          </div>
                          <div className="text-sm text-gray-400">
                            {intensityDescriptions[intensity]}
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Performance Info */}
            <div className="bg-gray-700 rounded-xl p-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  محسن للأداء - يتوقف تلقائياً عند التمرير
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SnowfallControls;
