import * as React from 'react';
import { BaseIconProps } from './types';

interface ComponentSimpleIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ComponentSimpleIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ComponentSimpleIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.88 2H10.12c.403 0 .735 0 1.006.022.281.023.54.072.782.196a2 2 0 01.874.874c.124.243.173.501.196.782.022.27.022.603.022 1.005v5.241c0 .403 0 .735-.022 1.006-.023.281-.072.54-.196.782a2 2 0 01-.874.874c-.243.124-.501.173-.782.196-.27.022-.603.022-1.005.022H4.88c-.403 0-.735 0-1.006-.022-.281-.023-.54-.072-.782-.196a2 2 0 01-.874-.874c-.124-.243-.173-.501-.196-.782A13.35 13.35 0 012 10.12V4.88c0-.403 0-.735.022-1.006.023-.281.072-.54.196-.782a2 2 0 01.874-.874c.243-.124.501-.173.782-.196C4.144 2 4.477 2 4.88 2zm-.924 1.019c-.22.018-.332.05-.41.09a1 1 0 00-.437.437c-.04.078-.072.19-.09.41C3 4.18 3 4.472 3 4.9v5.2c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 00.437.437c.078.04.19.072.41.09.225.019.516.019.944.019h5.2c.428 0 .72 0 .944-.019.22-.018.332-.05.41-.09a1 1 0 00.437-.437c.04-.078.072-.19.09-.41.019-.225.019-.516.019-.944V4.9c0-.428 0-.72-.019-.944-.018-.22-.05-.332-.09-.41a1 1 0 00-.437-.437c-.078-.04-.19-.072-.41-.09A12.925 12.925 0 0010.1 3H4.9c-.428 0-.72 0-.944.019z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ComponentSimpleIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ComponentSimpleIcon;
