'use client';
import { useEffect, useState } from 'react';

const IPPage = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [os, setOs] = useState<string>('');
  const [browser, setBrowser] = useState<string>('');
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // 获取内网 IP 地址
    const getLocalIp = async () => {
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel('');
      pc.createOffer()
        .then(offer => pc.setLocalDescription(offer))
        .catch(console.error);

      pc.onicecandidate = (event) => {
        if (event.candidate && event.candidate.candidate) {
          const ipMatch = event.candidate.candidate.match(/([0-9]{1,3}\.){3}[0-9]{1,3}/);
          if (ipMatch) {
            setIp(ipMatch[0]);
          }
        }
      };
    };

    // 获取设备信息
    const getDeviceInfo = () => {
      const userAgent = navigator.userAgent;
      const platform = navigator.platform;

      setOs(platform);
      setBrowser(userAgent);
    };

    // 获取并显示当前时间
    const displayTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setTime(timeString);
    };

    // 每秒更新时间
    const intervalId = setInterval(displayTime, 1000);

    // 初始化数据
    getLocalIp();
    getDeviceInfo();
    displayTime(); // 初始显示时间

    // 清理定时器
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96 max-w-lg">
        <h1 className="text-2xl font-semibold text-center text-teal-800 mb-6">IP 信息展示</h1>
        <div className="space-y-6">
          <div className="flex justify-between text-teal-600">
            <span className="font-medium">内网 IP 地址:</span>
            <span className="text-teal-800">{ip ? ip : '加载中...'}</span>
          </div>
          <div className="flex justify-between text-teal-600">
            <span className="font-medium">操作系统:</span>
            <span className="text-teal-800">{os}</span>
          </div>
          <div className="flex justify-between text-teal-600">
            <span className="font-medium"></span>
            <span className="text-teal-800">{browser}</span>
          </div>
          <div className="flex justify-between text-teal-600">
            <span className="font-medium">当前时间:</span>
            <span className="text-teal-800">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPPage;
