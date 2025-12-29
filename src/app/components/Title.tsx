import { FC } from 'react';

interface TitleProps {
  children: string;
}
const Title: FC<TitleProps> = ({ children }) => (
  <div className="text-xl lg:text-2xl mb-1.5">{children}</div>
);

export default Title;
