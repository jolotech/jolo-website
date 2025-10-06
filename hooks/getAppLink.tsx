"use client";

import { usePathname } from "next/navigation";
import { useDeviceType } from "./useDeviceType";

export function useAppLink() {
  const pathname = usePathname();
  const device = useDeviceType();

  // Detect current section
  const isRider = pathname?.includes("/rider");
  const isVendor = pathname?.includes("/vendor");

  const getAppLink = () => {
    if (isRider) {
      if (device === "android") {
        return "https://play.google.com/store/apps/details?id=com.jolo.rider_app.app";
      } else if (device === "ios") {
        return "https://apps.apple.com/ng/app/jolo-rider/id6748385926";
      } else {
        return "https://shop.jolojolo.com/deliveryman-registration";
      }
    }

    if (isVendor) {
      if (device === "android") {
        return "https://play.google.com/store/apps/details?id=com.jolo.vendor_app.app";
      } else if (device === "ios") {
        return "https://apps.apple.com/ng/app/jolo-vendor/id6748384000"; // example, replace when ready
      } else {
        return "https://shop.jolojolo.com/store-registration?active=active";
      }
    }

    if (device === "android") {
      return "https://play.google.com/store/apps/details?id=com.jolojolo.user.app";
    } else if (device === "ios") {
      return "https://apps.apple.com/ng/app/jolo-delivery/id6748380014";
    } else {
      return "https://shop.jolojolo.com";
    }
  };

  return getAppLink;
}
