'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface ConsultButtonProps {
  locale: 'en' | 'zh';
}

export default function ConsultButton({ locale }: ConsultButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isZh = locale === 'zh';

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          trackEvent('consulting_click', { locale, source: 'floating_consult_button', target: 'wechat_modal' });
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group sm:bottom-6 sm:right-6"
        style={{ bottom: '1.5rem', right: '1.5rem' }}
        aria-label={isZh ? '商务合作' : 'Business Collaboration'}
      >
        <span className="text-xl">💬</span>
        <span className="hidden sm:inline">{isZh ? '商务合作' : 'Business'}</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-3xl">🦞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {isZh ? 'OpenClaw 商务合作' : 'OpenClaw Business Collaboration'}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {isZh ? '腾讯T11 · 字节3-1 · AI编程专家' : 'Ex-Tencent T11 · Ex-ByteDance · AI Expert'}
              </p>
            </div>

            {/* QR Code */}
            <div className="text-center mb-2">
              <img
                src="/wechat-personal-qr.jpg"
                alt={isZh ? '微信二维码' : 'WeChat QR'}
                className="block w-full max-w-[220px] h-auto mx-auto rounded-xl border border-gray-200 mb-3 bg-white p-1 object-contain"
              />
              <p className="text-sm text-gray-600 leading-6">
                {isZh ? '扫码添加微信，备注「OpenClaw合作」即可' : 'Scan to add WeChat and note "OpenClaw Collaboration"'}
              </p>
              <button
                type="button"
                onClick={() => trackEvent('consulting_click', { locale, source: 'consult_modal_qr_visible', target: 'wechat_qr' })}
                className="mt-3 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700"
              >
                {isZh ? '我准备咨询/合作' : 'I am interested'}
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-400">📚 {isZh ? '《DeepSeek》作者' : 'DeepSeek Book Author'}</span>
              <span className="text-xs text-gray-400">👥 {isZh ? '3万+粉丝' : '30k+ Followers'}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
