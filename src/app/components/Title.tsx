import { FC } from 'react';

interface TitleProps {
  children: string;
}
const Title: FC<TitleProps> = ({ children }) => (
  <div className="text-2xl lg:text-4xl">{children}</div>
);

export default Title;
