import * as React from 'react';
import { BaseIconProps } from './types';

interface LetterCaseCapitalizeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const LetterCaseCapitalizeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LetterCaseCapitalizeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.01 2.5a.5.5 0 01.465.315l3.375 8.501a.5.5 0 11-.93.37L5.876 9.05H2.146L1.1 11.685a.5.5 0 11-.93-.369l3.376-8.5A.5.5 0 014.01 2.5zm0 1.855L5.517 8.15H2.503L4.01 4.355zm6.889.852c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402.846 0 1.725-.363 2.305-1.048v.623a.4.4 0 00.8 0v-5.93a.4.4 0 00-.8 0v.624A3.01 3.01 0 0010.9 5.207zm2.305 4.495V7.4c-.366-.77-1.224-1.342-2.117-1.342-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.924 0 1.758-.73 2.117-1.46z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.01 2.5a.5.5 0 01.465.315l3.375 8.501a.5.5 0 11-.93.37L5.876 9.05H2.146L1.1 11.685a.5.5 0 11-.93-.369l3.376-8.5A.5.5 0 014.01 2.5zm0 1.855L5.517 8.15H2.503L4.01 4.355zm6.889.852c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402.846 0 1.725-.363 2.305-1.048v.623a.4.4 0 00.8 0v-5.93a.4.4 0 00-.8 0v.624A3.01 3.01 0 0010.9 5.207zm2.305 4.495V7.4c-.366-.77-1.224-1.342-2.117-1.342-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.924 0 1.758-.73 2.117-1.46z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LetterCaseCapitalizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LetterCaseCapitalizeIcon;
