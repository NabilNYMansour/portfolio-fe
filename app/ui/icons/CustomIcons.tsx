import { rem } from '@mantine/core';

interface AddressBookIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function CustomCircleIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path d="M12 20A1 1 0 0012 4 1 1 0 0012 20" />
    </svg>
  );
}

export function MediumIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path d="M12.447 14.2443C11.835 15.5241 10.9111 16.4979 9.67 17.1662 8.9977 17.5284 8.2796 17.7525 7.5208 17.8546 6.2271 18.0293 4.9946 17.8227 3.8331 17.2395 2.326 16.4826 1.2816 15.2986.6939 13.7173.4815 13.1463.3605 12.5545.3267 11.9439.2291 10.1943.7529 8.6553 1.899 7.3354 2.8107 6.286 3.9564 5.5993 5.3186 5.3285 7.7256 4.8501 9.7803 5.5274 11.4462 7.3292 12.2378 8.1855 12.7202 9.2124 12.9348 10.3567 13.1868 11.6987 13.0207 12.9942 12.447 14.2443zM13.5612 12.6234C13.5032 12.0866 13.4946 11.5578 13.5216 11.0304 13.5905 9.6939 13.8487 8.4015 14.4927 7.2104 14.7627 6.7118 15.0975 6.2631 15.557 5.9188 16.3391 5.3325 17.2445 5.3375 18.0185 5.9328 18.545 6.3378 18.9072 6.8706 19.1957 7.4592 19.597 8.2773 19.8225 9.1471 19.9449 10.0467 20.0246 10.6339 20.07 11.2234 20.0489 11.8157 20.0043 13.0829 19.7968 14.3172 19.2663 15.4809 19.0112 16.0412 18.6881 16.5573 18.2295 16.9771 17.7944 17.3754 17.298 17.6301 16.6896 17.6018 16.1924 17.5784 15.7734 17.3651 15.4048 17.0446 14.8307 16.5456 14.4616 15.9057 14.1768 15.2127 13.8366 14.3861 13.6534 13.5207 13.5612 12.6234M20.453 9.7501C20.4889 9.4086 20.5151 9.0765 20.5601 8.7471 20.6568 8.0388 20.7698 7.3332 21.0488 6.6672 21.1158 6.507 21.1959 6.3549 21.3183 6.2294 21.4988 6.044 21.6981 6.0511 21.8696 6.2514 22.0666 6.4818 22.1701 6.7599 22.2574 7.0434 22.4631 7.7108 22.5688 8.397 22.6458 9.09 22.7489 10.0107 22.7876 10.9341 22.7745 11.8593 22.7646 12.5743 22.7281 13.2881 22.6471 13.9995 22.5684 14.6889 22.4654 15.372 22.2606 16.0367 22.1864 16.2769 22.0964 16.5114 21.9573 16.7233 21.7247 17.0784 21.4421 17.0802 21.2116 16.7229 20.9894 16.3777 20.8791 15.9876 20.785 15.5934 20.633 14.9553 20.5493 14.3073 20.4854 13.6548 20.4215 13.0054 20.3994 12.3543 20.3895 11.7032 20.3801 11.0551 20.4129 10.4076 20.453 9.7501M12.447 14.3443C11.835 15.6241 10.9111 16.5979 9.67 17.2662 8.9977 17.6284 8.2796 17.8525 7.5208 17.9546 6.2271 18.1293 4.9946 17.9227 3.8331 17.3395 2.326 16.5826 1.2816 15.3986.6939 13.8173.4815 13.2463.3605 12.6545.3267 12.0439.2291 10.2943.7529 8.7553 1.899 7.4354 2.8107 6.386 3.9564 5.6993 5.3186 5.4285 7.7256 4.9501 9.7803 5.6274 11.4462 7.4292 12.2378 8.2855 12.7202 9.3124 12.9348 10.4567 13.1868 11.7987 13.0207 13.0942 12.447 14.3443zM13.5612 12.7234C13.5032 12.1866 13.4946 11.6578 13.5216 11.1304 13.5905 9.7939 13.8487 8.5015 14.4927 7.3104 14.7627 6.8118 15.0975 6.3631 15.557 6.0188 16.3391 5.4325 17.2445 5.4375 18.0185 6.0328 18.545 6.4378 18.9072 6.9706 19.1957 7.5592 19.597 8.3773 19.8225 9.2471 19.9449 10.1467 20.0246 10.7339 20.07 11.3234 20.0489 11.9157 20.0043 13.1829 19.7968 14.4172 19.2663 15.5809 19.0112 16.1412 18.6881 16.6573 18.2295 17.0771 17.7944 17.4754 17.298 17.7301 16.6896 17.7018 16.1924 17.6784 15.7734 17.4651 15.4048 17.1446 14.8307 16.6456 14.4616 16.0057 14.1768 15.3127 13.8366 14.4861 13.6534 13.6207 13.5612 12.7234M20.453 9.8501C20.4889 9.5086 20.5151 9.1765 20.5601 8.8471 20.6568 8.1388 20.7698 7.4332 21.0488 6.7672 21.1158 6.607 21.1959 6.4549 21.3183 6.3294 21.4988 6.144 21.6981 6.1511 21.8696 6.3514 22.0666 6.5818 22.1701 6.8599 22.2574 7.1434 22.4631 7.8108 22.5688 8.497 22.6458 9.19 22.7489 10.1107 22.7876 11.0341 22.7745 11.9593 22.7646 12.6743 22.7281 13.3881 22.6471 14.0995 22.5684 14.7889 22.4654 15.472 22.2606 16.1367 22.1864 16.3769 22.0964 16.6114 21.9573 16.8233 21.7247 17.1784 21.4421 17.1802 21.2116 16.8229 20.9894 16.4777 20.8791 16.0876 20.785 15.6934 20.633 15.0553 20.5493 14.4073 20.4854 13.7548 20.4215 13.1054 20.3994 12.4543 20.3895 11.8032 20.3801 11.1551 20.4129 10.5076 20.453 9.8501M12.447 14.6443C11.835 15.9241 10.9111 16.8979 9.67 17.5662 8.9977 17.9284 8.2796 18.1525 7.5208 18.2546 6.2271 18.4293 4.9946 18.2227 3.8331 17.6395 2.326 16.8826 1.2816 15.6986.6939 14.1173.4815 13.5463.3605 12.9545.3267 12.3439.2291 10.5943.7529 9.0553 1.899 7.7354 2.8107 6.686 3.9564 5.9993 5.3186 5.7285 7.7256 5.2501 9.7803 5.9274 11.4462 7.7292 12.2378 8.5855 12.7202 9.6124 12.9348 10.7567 13.1868 12.0987 13.0207 13.3942 12.447 14.6443zM13.5612 13.0234C13.5032 12.4866 13.4946 11.9578 13.5216 11.4304 13.5905 10.0939 13.8487 8.8015 14.4927 7.6104 14.7627 7.1118 15.0975 6.6631 15.557 6.3188 16.3391 5.7325 17.2445 5.7375 18.0185 6.3328 18.545 6.7378 18.9072 7.2706 19.1957 7.8592 19.597 8.6773 19.8225 9.5471 19.9449 10.4467 20.0246 11.0339 20.07 11.6234 20.0489 12.2157 20.0043 13.4829 19.7968 14.7172 19.2663 15.8809 19.0112 16.4412 18.6881 16.9573 18.2295 17.3771 17.7944 17.7754 17.298 18.0301 16.6896 18.0018 16.1924 17.9784 15.7734 17.7651 15.4048 17.4446 14.8307 16.9456 14.4616 16.3057 14.1768 15.6127 13.8366 14.7861 13.6534 13.9207 13.5612 13.0234M20.453 10.1501C20.4889 9.8086 20.5151 9.4765 20.5601 9.1471 20.6568 8.4388 20.7698 7.7332 21.0488 7.0672 21.1158 6.907 21.1959 6.7549 21.3183 6.6294 21.4988 6.444 21.6981 6.4511 21.8696 6.6514 22.0666 6.8818 22.1701 7.1599 22.2574 7.4434 22.4631 8.1108 22.5688 8.797 22.6458 9.49 22.7489 10.4107 22.7876 11.3341 22.7745 12.2593 22.7646 12.9743 22.7281 13.6881 22.6471 14.3995 22.5684 15.0889 22.4654 15.772 22.2606 16.4367 22.1864 16.6769 22.0964 16.9114 21.9573 17.1233 21.7247 17.4784 21.4421 17.4802 21.2116 17.1229 20.9894 16.7777 20.8791 16.3876 20.785 15.9934 20.633 15.3553 20.5493 14.7073 20.4854 14.0548 20.4215 13.4054 20.3994 12.7543 20.3895 12.1032 20.3801 11.4551 20.4129 10.8076 20.453 10.1501" />
    </svg>
  );
}

export function ShaderToyIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path d="M12.8 3.6C10.9 3.9 9.6 4.6 9 5.7 8.4 6.5 8.2 7.7 8.5 8.6 8.6 9 9.1 9.9 9.2 10.1 9.3 10.1 9.3 10.2 9.3 10.2 9.3 10.3 9.5 10.5 9.8 10.9 10 11.1 11 12.2 11.3 12.5 11.6 12.8 12 13.3 12 13.3 12 13.4 12 13.5 12.1 13.5 12.1 13.6 12.3 13.8 12.4 14.1 13.4 15.9 12.9 18.1 11.5 18.7 11.2 18.9 11 18.9 10.4 18.9 9.9 18.9 9.8 18.9 9.5 18.7 8.8 18.2 8.6 17.8 8.5 17 8.5 16.4 8.7 15.9 9.2 15.6 9.7 15.2 9.8 15.2 10.4 15.1 11.1 14.9 11.1 14.9 11 14.5 10.9 13.3 9 12.8 7.5 13.6 6.3 14.2 5.6 15.4 5.6 16.8 5.4 19 6.7 20.5 9 21 9.5 21.1 11.2 21.1 11.7 21 12.6 20.8 13.1 20.7 13.8 20.3 14.7 19.9 15.7 19.1 16 18.4 16.1 18.3 16.2 18.1 16.2 18.1 16.3 18 16.7 17.1 16.8 16.7 16.8 16.4 16.9 15.8 16.8 15.2 16.8 14.2 16.8 14.1 16.6 13.5 16.5 13.1 16.2 12.6 16.1 12.3 15.8 11.8 14.8 10.8 14 10 13.7 9.8 13.5 9.6 13.4 9.5 13.2 9.4 12.6 8.7 12.4 8.5 11.9 7.8 11.7 6.8 11.9 6.1 12.2 5.2 12.9 4.8 13.9 4.8 14.5 4.9 14.8 5 15.1 5.4 15.3 5.7 15.3 5.8 15.2 6.3 15.2 6.9 15.1 7.2 14.7 7.7 14.4 8.2 14.4 8.1 14.4 8.2 14.4 8.3 14.6 8.5 14.9 8.6 15.2 8.8 15.6 8.8 16.1 8.6 16.9 8.3 17.4 7.5 17.4 6.4 17.4 4.6 16.2 3.6 13.9 3.6 13.4 3.6 12.9 3.6 12.8 3.6Z" />
    </svg>
  );
}

export function SteamIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path d="M11.7811 1C6.1102 1 1.4599 5.374 1.0198 10.9333l5.7888 2.3922c.4905-.3339 1.0827-.531 1.7208-.531.0567 0 .1125.0036.1692.0054l2.5749-3.7278V9.019c0-2.2455 1.8252-4.0716 4.0716-4.0716 2.2446 0 4.0716 1.8279 4.0716 4.0743s-1.827 4.0725-4.0716 4.0725h-.0945l-3.6684 2.6199c0 .0468.0036.0945.0036.1431 0 1.6875-1.3635 3.0564-3.051 3.0564-1.4715 0-2.7144-1.0557-2.9979-2.4543L1.3924 14.743C2.6758 19.2763 6.8374 22.6 11.7811 22.6c5.9643 0 10.7991-4.8357 10.7991-10.8S17.7445 1 11.7811 1zM7.786 17.389l-1.3257-.549c.2358.4887.6426.8991 1.1826 1.125 1.1673.4851 2.5137-.0684 2.9988-1.2375.2367-.567.2376-1.1871.0045-1.7541s-.675-1.0089-1.2393-1.2447c-.5616-.234-1.161-.2241-1.6902-.027l1.3707.567c.8604.36 1.2681 1.35.9081 2.2095-.3573.8613-1.3473 1.269-2.2086.9108H7.786zm10.2735-8.3727c0-1.4958-1.2177-2.7135-2.7135-2.7135-1.4985 0-2.7135 1.2177-2.7135 2.7135 0 1.4985 1.215 2.7135 2.7135 2.7135 1.4967 0 2.7135-1.215 2.7135-2.7135zm-4.7457-.0045c0-1.1268.9117-2.0394 2.0385-2.0394 1.1241 0 2.0394.9126 2.0394 2.0394 0 1.1259-.9153 2.0385-2.0394 2.0385-1.1277 0-2.0385-.9126-2.0385-2.0385z" />
    </svg>
  );
}