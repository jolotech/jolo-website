import { useEffect, useState } from "react";

export function useDeviceType() {
  const [device, setDevice] = useState<"android" | "ios" | "windows" | "mac" | "pc">("pc");

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(ua)) {
      setDevice("android");
    } else if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
      setDevice("ios");
    } else if (/Macintosh|Mac OS X/i.test(ua)) {
      setDevice("mac");
    } else if (/Win32|Windows/i.test(ua)) {
      setDevice("windows");
    } else {
      setDevice("pc");
    }
  }, []);

  return device;
}
