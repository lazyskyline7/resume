import { FC } from 'react';

interface TitleProps {
  children: string;
}
const Title: FC<TitleProps> = ({ children }) => (
  <div className="text-2xl lg:text-4xl my-1.5">{children}</div>
);

export default Title;
